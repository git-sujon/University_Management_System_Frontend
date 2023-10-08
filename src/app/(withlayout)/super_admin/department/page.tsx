"use client";

import LoadingPage from "@/app/loading";
import ActionsBar from "@/components/UI/ActionsBar";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import UMTable from "@/components/UI/UMTable";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
} from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDeBounced } from "@/hooks/debounced";
import dayjs from "dayjs";
import { IMeta } from "@/types";

const Department = () => {
  const [deleteDepartment] = useDeleteDepartmentMutation();

  const deleteHandler = async (id: string) => {
    message.loading("deleting...");
    await deleteDepartment(id);
    message.success("Department deleted successfully")
  };

  const columns = [
    {
      title: "id",
      dataIndex: "_id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },

    {
      title: "Action",
      render: function (data: any) {
        return (
          <div className="flex items-center gap-x-3">
            <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button>
            <Link href={`/super_admin/department/edit/${data._id}`}>
              <Button type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?._id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const deBouncedTerm = useDeBounced({
    searchQuery: searchTerm,
    delay: 1500,
  });

  if (!!deBouncedTerm) {
    query["searchTerm"] = deBouncedTerm;
  }

  const { data, isLoading } = useGetDepartmentQuery({ ...query });

  const departments = data?.departments;
  const meta: IMeta = data?.meta;

  if (isLoading) {
    return <LoadingPage />;
  }

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilter = () => {
    setSearchTerm("");
    setSortBy("");
    setSortOrder("");
  };

  return (
    <div>
      <div>
        <UMBreadCrump
          items={[
            {
              label: `super admin`,
              link: `super_admin`,
            },
          ]}
        />
        <ActionsBar title="Department List">
          <div className="flex justify-center gap-x-5">
            <Input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="search here..."
            />
            <Button onClick={resetFilter} type="primary">
              <ReloadOutlined />
            </Button>
          </div>

          <Link href={"/super_admin/department/create"}>
            <Button type="primary">Create</Button>
          </Link>
        </ActionsBar>
      </div>
      <div className="min-w-full">
        <UMTable
          loading={false}
          columns={columns}
          dataSource={departments}
          pageSize={size}
          totalPage={meta?.total}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
        />
      </div>
    </div>
  );
};

export default Department;

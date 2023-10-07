"use client";

import ActionsBar from "@/components/UI/ActionsBar";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import UMTable from "@/components/UI/UMTable";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Department = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            X
          </Button>
        );
      },
    },
  ];
  const data = [
    {
      id: "1",
      title: "John Doe",
      age: 28,
      address: "Dhaka, Bangladesh",
      tags: ["developer", "creative"],
    },
    {
      id: "2",
      title: "Jane Smith",
      age: 30,
      address: "New York, USA",
      tags: ["designer", "innovator"],
    },
    {
      id: "3",
      title: "Alice Johnson",
      age: 25,
      address: "London, UK",
      tags: ["artist", "adventurer"],
    },
    {
      id: "4",
      title: "Bob Brown",
      age: 35,
      address: "San Francisco, USA",
      tags: ["engineer", "leader"],
    },
    {
      id: "5",
      title: "Emily Davis",
      age: 29,
      address: "Toronto, Canada",
      tags: ["analyst", "communicator"],
    },
    {
      id: "6",
      title: "David Wilson",
      age: 27,
      address: "Berlin, Germany",
      tags: ["programmer", "learner"],
    },
    {
      id: "7",
      title: "Linda Lee",
      age: 33,
      address: "Paris, France",
      tags: ["manager", "team player"],
    },
    {
      id: "8",
      title: "Michael Taylor",
      age: 31,
      address: "Tokyo, Japan",
      tags: ["consultant", "problem solver"],
    },
    {
      id: "9",
      title: "Sophia White",
      age: 26,
      address: "Sydney, Australia",
      tags: ["entrepreneur", "enthusiast"],
    },
    {
      id: "10",
      title: "William Harris",
      age: 34,
      address: "Singapore",
      tags: ["scientist", "analytical"],
    },
    {
      id: "11",
      title: "Olivia Martinez",
      age: 27,
      address: "Los Angeles, USA",
      tags: ["writer", "dreamer"],
    },
    {
      id: "12",
      title: "James Thompson",
      age: 29,
      address: "Mumbai, India",
      tags: ["researcher", "curious"],
    },
    {
      id: "13",
      title: "Ava Anderson",
      age: 32,
      address: "Rio de Janeiro, Brazil",
      tags: ["marketing expert", "strategist"],
    },
    {
      id: "14",
      title: "Mason Hall",
      age: 30,
      address: "Cape Town, South Africa",
      tags: ["entrepreneur", "visionary"],
    },
    {
      id: "15",
      title: "Ella Lewis",
      age: 28,
      address: "Barcelona, Spain",
      tags: ["designer", "creative thinker"],
    },
    {
      id: "16",
      title: "Noah Turner",
      age: 27,
      address: "Seoul, South Korea",
      tags: ["developer", "problem solver"],
    },
    {
      id: "17",
      title: "Mia Moore",
      age: 31,
      address: "Hong Kong",
      tags: ["analyst", "data-driven"],
    },
    {
      id: "18",
      title: "Logan Clark",
      age: 29,
      address: "Rome, Italy",
      tags: ["scientist", "explorer"],
    },
    {
      id: "19",
      title: "Aiden Young",
      age: 26,
      address: "Moscow, Russia",
      tags: ["programmer", "innovator"],
    },
    {
      id: "20",
      title: "Chloe Harris",
      age: 30,
      address: "Dubai, UAE",
      tags: ["manager", "leader"],
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
  };

 
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;

    console.log(order, field);
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
          <Link href={"/super_admin/department/create"}>
            <Button type="primary">Create</Button>
          </Link>
        </ActionsBar>
      </div>
      <div className="min-w-full">
        <UMTable
          loading={false}
          columns={columns}
          dataSource={data}
          pageSize={5}
          totalPage={20}
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
        />
      </div>
    </div>
  );
};

export default Department;

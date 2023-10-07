"use client";
import { Table } from "antd";

type UMTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPage?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
};

const UMTable = ({
  loading,
  columns,
  dataSource,
  pageSize,
  totalPage,
  showSizeChanger,
  onPaginationChange,
  onTableChange,
}: UMTableProps) => {
  const paginationConfig = {
    pageSize: pageSize,
    total: totalPage,
    pageSizeOptions: [5, 10, 20],
    showSizeChanger: showSizeChanger,
    onChange: onPaginationChange,
  };

  return (
    <Table
      columns={columns}
      loading={loading}
      dataSource={dataSource}
      pagination={onPaginationChange ? paginationConfig : false}
      onChange={onTableChange}
    />
  );
};

export default UMTable;

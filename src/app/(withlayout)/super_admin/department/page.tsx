import ActionsBar from "@/components/UI/ActionsBar";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Department = () => {
  return (
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
  );
};

export default Department;

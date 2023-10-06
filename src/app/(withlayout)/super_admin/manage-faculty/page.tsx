"use client"

import ActionsBar from "@/components/UI/ActionsBar";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
   
    return (
      <div>
      <UMBreadCrump
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
       
        ]}
      />
      <ActionsBar title="Faculty List">
      <Link href={"/super_admin/manage-faculty/create"}>
            <Button type="primary">Create Faculty</Button>
        </Link>
      </ActionsBar>
    </div>
  );
    
};

export default ManageFaculty;
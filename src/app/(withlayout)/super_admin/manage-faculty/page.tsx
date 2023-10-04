"use client"

import ActionsBar from "@/components/UI/ActionsBar";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
    const { role } = getUserInfo() as { role: string };
    return (
        <>
        <UMBreadCrump
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
            },
         
          ]}
        />
        <ActionsBar title="Faculty List">
        <Link href={"/super_admin/manage-faculty/create"}>
              <Button type="primary">Create Faculty</Button>
          </Link>
        </ActionsBar>
      </>
    );
};

export default ManageFaculty;
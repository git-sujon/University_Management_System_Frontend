"use client"

import ActionsBar from "@/components/UI/ActionsBar";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "antd";
import Link from "next/link";

const ManageAdmin = () => {
    const { role } = getUserInfo() as { role: string };
    return (
        <div>
        <UMBreadCrump
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
            },
         
          ]}
        />
        <ActionsBar title="Admin List">
        <Link href={"/super_admin/admin/create"}>
              <Button type="primary">Create Admin</Button>
          </Link>
        </ActionsBar>
      </div>
    );
};

export default ManageAdmin;
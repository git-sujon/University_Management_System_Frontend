"use client"

import ActionsBar from "@/components/UI/ActionsBar";
import UMBreadCrump from "@/components/UI/UMBreadCrump";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "antd";
import Link from "next/link";

const MangeStudentPage = () => {
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
      <ActionsBar title="Student List">
      <Link href={"/super_admin/manage-student/create"}>
            <Button type="primary">Create Student</Button>
        </Link>
      </ActionsBar>
    </>
  );
};

export default MangeStudentPage;

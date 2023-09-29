import { MenuProps } from "antd";
import React from "react";
import {
  UserOutlined,
  TableOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { USER_ROLE } from "./role";
import Link from "next/link";
const SideBarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-faculty`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Academic",
      icon: <TableOutlined />,
      key: "manage-academic",
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Department</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semester</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    
  ];

  if (role === USER_ROLE.STUDENT) return defaultSidebarItems;
  else if (role === USER_ROLE.ADMIN) return commonAdminSidebarItems;
};

export default SideBarItems;

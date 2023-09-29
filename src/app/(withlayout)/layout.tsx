"use client";

import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SideBar from "@/components/UI/SideBar";
import Contents from "@/components/UI/Contents";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{}} hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;

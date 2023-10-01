import React from "react";
import { Layout, Menu, theme } from "antd";
import UMBreadCrump from "./UMBreadCrump";

const { Header, Content, Footer, Sider } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {

  const base = "admin"

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <UMBreadCrump items= {[
        {
          label: `${base}`,
          link:`/${base}`
        },
        {
          label: `student`,
          link:`/${base}/student`
        }
      ]} />
      {children}
    </Content>
  );
};

export default Contents;

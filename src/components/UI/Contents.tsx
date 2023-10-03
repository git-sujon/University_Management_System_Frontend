import React from "react";
import { Layout } from "antd";
import UMBreadCrump from "./UMBreadCrump";
import Header from "./Header";

const { Content, Footer, Sider } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <UMBreadCrump
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;

import React from "react";
import { Layout, Row } from "antd";
import UMBreadCrump from "./UMBreadCrump";
import Header from "./Header";

const { Content, Footer, Sider } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <Row
        style={{
          paddingLeft: "10px",
        }}
      >
        {children}
      </Row>
    </Content>
  );
};

export default Contents;

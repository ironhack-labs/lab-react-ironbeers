import React from "react";
import { Layout } from "antd";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

function Root() {
  return (
    <Layout>
      <NavBar />
      <Content
        style={{
          height: "100vh",
          maxHeight: "calc(100vh - 128.09px)",
          padding: "1em 2em",
          overflow: "scroll",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Root;

import React from "react";
import { Layout, ConfigProvider } from "antd";
import { Todo } from "../components/Todo";

const { Content } = Layout;

const theme = {
  components: {
    Button: {},
  },
};

export const LayoutPage: React.FC = () => (
  <ConfigProvider theme={theme}>
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <Todo />
      </Content>
    </Layout>
  </ConfigProvider>
);

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  color: "#ffffff",
  backgroundImage: "linear-gradient(to bottom right, #36d1dc, #5b86e5)",
  padding: "20px",
};

const layoutStyle = {
  overflow: "auto",
  width: "100%",
  minHeight: "100vh",
};

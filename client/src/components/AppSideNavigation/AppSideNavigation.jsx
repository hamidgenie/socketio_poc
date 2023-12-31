import { Layout, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function AppSideNavigation({ collapsed }) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "lightgray",          
          borderRadius: 10,
        }}
      />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
}

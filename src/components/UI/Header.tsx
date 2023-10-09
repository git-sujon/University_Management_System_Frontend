import { Button, Dropdown, Layout, MenuProps, Row, Avatar, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/Constants/storageKeys";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;
const Header = () => {
const router = useRouter()
  const logoutHandler = () => {
    removeUserInfo(authKey)
    router.push("/login")
  }



  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={ logoutHandler} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{
      backgroundColor:"white"
    }}>
      <Row justify={"end"}
      align="middle"
      style={{
          height:"100%"
      }}
      >
        <Dropdown menu={{ items }}>
          <div className="cursor-pointer">
            <Space size={16} wrap>
              <Avatar size={"large"} icon={<UserOutlined />} />
            </Space>
          </div>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;

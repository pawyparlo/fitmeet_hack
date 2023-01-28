import type { MenuProps } from "antd";
import { Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
];

const menuProps: MenuProps = {
  items,
  onClick: () => {},
};

type MobileProfileProps = {
  userName: string;
};

const MobileProfile = ({ userName }: MobileProfileProps) => {
  return (
    <div>
      <Dropdown.Button
        className="mobile-profile-button"
        // overlayClassName="mobile-profile-button"
        menu={menuProps}
        placement="bottomRight"
        icon={<UserOutlined />}
      >
        {userName}
      </Dropdown.Button>
    </div>
  );
};

export default MobileProfile;

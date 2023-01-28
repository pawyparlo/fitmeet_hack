import { Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

// const

const MobileProfile = () => {
  return (
    <div>
      <Dropdown.Button
        // menu={menuProps}
        placement="bottom"
        icon={<UserOutlined />}
      >
        Dropdown
      </Dropdown.Button>
    </div>
  );
};

export default MobileProfile;

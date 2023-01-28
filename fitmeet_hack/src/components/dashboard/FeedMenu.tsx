import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MessageOutlined,
  BellOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";

const FeedMenu = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        to={"/"}
        className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
      >
        <HomeOutlined />
      </Link>
      <Link
        to={"/"}
        className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
      >
        <MessageOutlined />
      </Link>
      <Link
        to={"/"}
        className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid"
      >
        <BellOutlined />
      </Link>
      <Link
        to={"/"}
        className="text-white border-r-[0.2px] border-0 border-gray-700 px-4 border-solid last-of-type:border-r-0"
      >
        <HeatMapOutlined />
      </Link>
    </div>
  );
};

export default FeedMenu;

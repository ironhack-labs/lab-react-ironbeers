import { HomeFilled, VerticalAlignBottomOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" className="link">
      <Space
        wrap
        style={{
          backgroundColor: "var(--main-bg-color)",
          fontSize: "32px",
        }}
      >
        <div>
          <HomeFilled
            style={{
              direction: "vertical",
              width: "100%",
              padding: "20px 0",
              color: "#696940",
            }}
          />
        </div>
      </Space>
    </Link>
  );
}

export default Header;

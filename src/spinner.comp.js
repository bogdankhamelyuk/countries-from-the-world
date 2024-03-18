import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./App.css";

export default function Spinner() {
  return (
    <div className="page-container">
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 80,
            }}
            spin
          />
        }
      />
    </div>
  );
}

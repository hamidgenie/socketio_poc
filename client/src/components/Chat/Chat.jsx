import { SendOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Input, Row } from "antd";
import { useEffect, useState } from "react";

import { socket } from "../../socket";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const onSend = () => {
    socket.emit("message:new", { message: encodeURI(message) });
    setMessage("");
  };

  useEffect(() => {
    const onNewMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("message:new", onNewMessage);

    return () => {
      socket.off("message:new");
    };
  }, []);

  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div
            style={{
              display: "block",
              position: "relative",
              width: "100%",
              height: "60vh",
              border: "thin solid black",
              borderRadius: 10,
              backgroundColor: "lightblue",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <ul>
              {messages.map(({ message }, index) => {
                return <li key={`message-${index}`}>{decodeURI(message)}</li>;
              })}
            </ul>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[10, 10]}>
        <Col span={20}>
          <Input
            size="large"
            style={{ width: "100%" }}
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
          />
        </Col>
        <Col span={2}>
          <Button
            size="large"
            icon={<SendOutlined />}
            style={{ width: "100%" }}
            onClick={() => {
              onSend();
            }}
          >
            Send
          </Button>
        </Col>
      </Row>
    </>
  );
}

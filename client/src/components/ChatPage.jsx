import axios from "axios";
import { useEffect, useState } from "react";

const ChatPage = () => {
  return (
    <>
      <h1>Chat Page</h1>
      <Container>
        <Row>
          <Col>conversation</Col>
          <Col>messages</Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatPage;

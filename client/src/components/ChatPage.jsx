import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChatPage = () => {
  return (
    <>
      <h1>Chat Page</h1>
      <Container>
        <Row>
          <Col>
            conversations
       
          </Col>
          <Col>messages</Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatPage;

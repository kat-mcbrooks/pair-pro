import axios from "axios";
import { useEffect, useState, useContext, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import Conversation from "./Conversation";
import Message from "./Message";
import { io } from "socket.io-client";

const ChatPage = () => {
  const { state } = useContext(AuthContext); //so we can
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef(io("ws://localhost:8900"));

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", state.user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [state.user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/api/conversations/${state.user._id}`);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [state.user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/${currentChat._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      senderId: state.user._id,
      messageBody: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const res = await axios.post("/api/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Chat Page</h1>
      <Container>
        <Row>
          <Col sm={4}>
            {conversations.map((conversation) => (
              <div onClick={() => setCurrentChat(conversation)}>
                <Conversation
                  conversation={conversation}
                  currentUser={state.user}
                />
              </div>
            ))}
          </Col>
          <Col sm={8}>
            {messages.map((message) => (
              <Message
                message={message}
                own={state.user._id === message.senderId}
              />
            ))}
            <div className="form-container">
              <Form className="message-submit">
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <Button onClick={handleSubmit} type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatPage;

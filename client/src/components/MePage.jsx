import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const Me = () => {
  const [me, setMe] = useState([]);

  const { state } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    state.isLoggedIn
      ? axios
          .get(`/api/users/me`)
          .then((res) => {
            const me = res.data;
            setMe(me);
            // navigate("/me");
          })
          .catch(() => {
            // navigate('/login')
          })
      : navigate("/login");
  }, [navigate, state.isLoggedIn]);

  return (
    <div data-testid="person-cards" className="card-container">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <Card className="me-card">
              <Card.Img src={me.image} alt="profile picture" />
              <Card.Body>
                <Card.Title>{me.name}</Card.Title>
                <Card.Text>Languages: {me.languages}</Card.Text>
                <Card.Text>Bio: {me.bio}</Card.Text>
                <Button variant="primary">Edit your Profile</Button>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Me;

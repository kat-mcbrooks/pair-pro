import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { ExternalLink } from 'react-external-link';
import { AiFillGithub } from 'react-icons/ai';
import robot from "../assets/robot.png";
import person1 from "../assets/people/1.jpeg"
import person2 from "../assets/people/2.jpeg"
import person3 from "../assets/people/3.jpeg"
import person4 from "../assets/people/4.jpeg"
import person5 from "../assets/people/5.jpeg"
import person6 from "../assets/people/6.jpeg"

const Me = () => {
  const [me, setMe] = useState([]);
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  const people = [
    person1, person2, person3, person4, person5, person6, robot
  ]

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
    <>
    <div className="sml-banner-image">
      <div className="dark-grey-bg white-text  full-width courier">
        <h2>Hi, {me.name}!</h2> <h4>dont't forget to add any new languages</h4>
      </div>
    </div>
    <div data-testid="person-cards" className="card-container">
      <Container fluid>
        <Row>
          <Col md={2}></Col>
          <Col md={3}>
            <Card className="me-card">
              <Card.Img variant="top" src={people[Math.floor(Math.random()*people.length)]} />
            </Card>
            <br></br>
          </Col>
          <Col md={5}>
            <Card className="me-card">
              <Card.Header>Languages: <br></br> {me.languages?.join(', ')}</Card.Header>
              <Card.Header>Bio: <br></br> {me.bio}</Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Button variant="outline-primary">Edit your Profile</Button>
                  </Col>
                  <Col>
                  {me.github ? (
                    <>
                      <Card.Text as="h1" className="dark-grey-text"> 
                      <ExternalLink href={`http://www.github.com/${me.github}`} >
                        < AiFillGithub  />
                      </ ExternalLink>
                      </Card.Text>
                    </>
                    ):(
                    null )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Me;

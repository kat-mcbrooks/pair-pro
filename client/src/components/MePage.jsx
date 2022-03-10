import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import { AiFillGithub } from "react-icons/ai";

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
    <>

    <div className="sml-banner-image-teal">
      <div className="dark-grey-bg white-text  full-width courier">
        <h2>Nice profile, {me.name}!</h2> 
        <h5>Keep it up-to-date so potential pairs know what you're learning</h5>
      </div>
    </div>
    <div data-testid="person-cards" className="card-container">
      <Container fluid>
        <Row>
          <Col md={2}></Col>
          <Col md={3}>
            <Card className="me-card">
              <Card.Img variant="top "src={me.image} alt="profile picture" />
            </Card>
            <br></br>
          </Col>
          <Col md={5}>
            <Card className="me-card">
              <Card.Header>Languages</Card.Header>
              <Card.Body><Card.Text>{me.languages?.join(', ')}</Card.Text></Card.Body>
              <Card.Header>Introduction</Card.Header>
              <Card.Body><Card.Text>{me.bio}</Card.Text></Card.Body>
              <Card.Header>
                <Row>
                  <Col>
                    <Button data-cy="edit-btn" variant="outline-primary">Edit your Profile</Button>
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
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Me;

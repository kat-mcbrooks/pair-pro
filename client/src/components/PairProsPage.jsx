import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";


const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/`).then((res) => {
      const persons = res.data;
      setPersons(persons);
    });
  }, []);

  return (
    <>
      <div className='sml-banner-image'>
        <div className="white-bg dark-teal-text full-width">
          <h3>Welcome to PairPro, find yourself a pair!</h3>
        </div>
      </div>
      <div data-testid="person-cards">
        <Container fluid >
          <Row xs={1} sm={2} md ={3} lg={4} xl={5} >
            {persons.map((person) => (
              <Col>
                <Card className="card">
                  <Card.Img variant="top" src={person.image.base64} alt="profile picture"/>
                  <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>Languages: {person.languages}</Card.Text>
                    <Card.Text>Bio: {person.bio}</Card.Text>
                    <Button variant="primary">{`Chat to ${person.name}`}</Button>
                  </Card.Body>
                </Card>
                <br></br>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>

  );
};

export default PersonList;

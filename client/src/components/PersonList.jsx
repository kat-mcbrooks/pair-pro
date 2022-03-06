import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/`).then((res) => {
      const persons = res.data;
      setPersons(persons);
    });
  }, []);

  return (
    <div data-testid="person-cards">
      <Row xs={1} md={2} lg={3} className="g-4">
        {persons.map((person) => (
          <Col>
            <Card className="person-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Name: {person.name}</Card.Title>
                <Card.Text>Languages: {person.languages}</Card.Text>
                <Card.Text>Bio: {person.bio}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PersonList;

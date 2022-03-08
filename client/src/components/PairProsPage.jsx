import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import ProfileCardSmall from "./ProfileCardSmall"


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
      <div className="sml-banner-image">
        <div className="white-bg dark-teal-text full-width">
          <h3>Welcome to PairPro, find yourself a pair!</h3>
        </div>
      </div>
      <div data-testid="person-cards">
        <Container fluid>
          <Row xs={1} sm={2} md={3} lg={4} xl={5}>
            {persons.map((person) => (
              <ProfileCardSmall person={person}/>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PersonList;

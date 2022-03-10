import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Container, Form, FormControl, Button } from "react-bootstrap";
import ProfileCardSmall from "./ProfileCardSmall"

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    axios.get(`/api/users/`).then((res) => {
      const persons = res.data;
      setPersons(persons);
    });
  }, []);

  useEffect(() => {

  }, [persons]);

  const onChange = (e) => {
    setLanguage(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if(language) {
    const res = await axios.get(`/api/users/language/${language}`)
    setPersons(res.data)
    } 
  }

  const onClick = async (e) => {
    e.preventDefault();
    if(language) {
    const res = await axios.get(`/api/users/language/${language}`)
    setPersons(res.data)
    } 
  }

  return (
    <>
      <div className="sml-banner-image-teal">
        <div className="dark-grey-bg white-text full-width courier">
          <h2>Welcome to PairPro</h2> <h4>find yourself a pair!</h4>
        </div>
      </div>
      <Row>
        <Col></Col>
        <Col>
        <Form className="d-flex" onSubmit={onSubmit}>
          <FormControl
            type="search"
            placeholder="Enter a Language"
            className="me-2"
            aria-label="Search"
            onChange={onChange}
          />
          <Button variant="outline-primary" onClick={onClick}bg="white">Search</Button>
        </Form>
        <br></br>
        </Col>
        <Col></Col>
        </Row>
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

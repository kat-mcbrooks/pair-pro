import { Row, Col, Card, Button } from "react-bootstrap";
import ChatToButton from "./ChatToButton";
import { ExternalLink } from 'react-external-link';
import { AiFillGithub } from 'react-icons/ai';
import robot from "../assets/robot.png";
import person1 from "../assets/people/1.jpeg"
import person2 from "../assets/people/2.jpeg"
import person3 from "../assets/people/3.jpeg"
import person4 from "../assets/people/4.jpeg"
import person5 from "../assets/people/5.jpeg"
import person6 from "../assets/people/6.jpeg"

const ProfileCardSmall = ({person}) => {
  const people = [
    person1, person2, person3, person4, person5, person6, robot
  ]
  return (
    <Col>
      <Card className="card" border="white" >
      <Card.Header as="h5" bg="warning">{person.name}</Card.Header>
        <Card.Img variant="top" src={people[Math.floor(Math.random()*people.length)]} />
          <Card.Header as="h6">
            Languages 
          </Card.Header> 
          <Card.Body>
            <Card.Text>
              {person.languages?.join(', ')}
            </Card.Text>
          </Card.Body>
          <Card.Header as="h6">
            Introduction
          </Card.Header> 
          <Card.Body>
            <Card.Text>
              {person.bio}
            </Card.Text>
          </Card.Body>
          <Card.Header className="text-center">
          <Row>
            <Col>
              <ChatToButton receiver={person} />
            </Col>
            <Col>
            {person.github ? (
              <>
          <Card.Text as="h1" className="dark-grey-text"> 
            <ExternalLink href={`http://www.github.com/${person.github}`} >
              < AiFillGithub  className="h1"/>
            </ExternalLink>
          </Card.Text>
          </>
          ):(
          null )}
          </Col>
          </Row>
        </Card.Header>
      </Card>
      <br></br>
    </Col>
  )
}

export default ProfileCardSmall

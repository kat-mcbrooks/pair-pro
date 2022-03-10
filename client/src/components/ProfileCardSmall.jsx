import { Row, Col, Card } from "react-bootstrap";
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
      <Card className="card" border="warning" >
      <Card.Header as="h5" bg="warning">{person.name}</Card.Header>
        <Card.Img variant="top" src={people[Math.floor(Math.random()*people.length)]} />
        <Card.Body>
          <Card.Text>Languages: <br></br> {person.languages?.join(', ')}</Card.Text>
          <Card.Text>Bio: <br></br> {person.bio}</Card.Text>
          <Row>
            <Col>
          <ChatToButton receiver={person} />
          </Col>
          <Col>
          {person.github ? (
            <>
          <Card.Text as="h1" className="dark-grey-text"> 
            <ExternalLink href={`http://www.github.com/${person.github}`} >
              < AiFillGithub  />
            </ ExternalLink>
          </Card.Text>
          <Card.Text className="text-center text-muted">Github</Card.Text>
          </>
          ):(
          null )}
          </Col>
          </Row>
        </Card.Body>
      </Card>
      <br></br>
    </Col>
  )
}

export default ProfileCardSmall

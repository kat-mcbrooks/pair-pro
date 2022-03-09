import { Col, Card } from "react-bootstrap";
import ChatToButton from "./ChatToButton";
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
          <Card.Text>Languages: {person.languages}</Card.Text>
          <Card.Text>Bio: {person.bio}</Card.Text>
          <ChatToButton receiver={person} />
        </Card.Body>
      </Card>
      <br></br>
    </Col>
  )
}

export default ProfileCardSmall

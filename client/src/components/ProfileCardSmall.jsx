import { Row, Col, Card, Button } from "react-bootstrap";
import ChatToButton from "./ChatToButton";
import { ExternalLink } from 'react-external-link';
import { AiFillGithub } from 'react-icons/ai';

const ProfileCardSmall = ({person}) => {

  return (
    <Col>
      <Card className="card" border="white" >
      <Card.Header as="h5" bg="warning">{person.name}</Card.Header>
        <Card.Img variant="top" src={person.image} alt="profile picture"/>
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

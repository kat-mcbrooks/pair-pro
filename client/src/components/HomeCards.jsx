import { Card, Row, Col, Container } from "react-bootstrap";

const HomeCards = () => {
  return (
    <div data-testid="home-cards" className="card-container">
    <Container fluid >
      <Row xs={1} lg={3} >
          <Col>
            <br></br>
            <Card className="card">
              <Card.Body>
                <Card.Title>What is PairPro?</Card.Title>
                <Card.Text>
                  Whether you’re new to coding or you’re a seasoned pro looking to learn a new technology, <b>don’t go it alone!</b>
                </Card.Text> 
                <Card.Text>
                  On PairPro, you can search for other developers who want to pair up on coding problems or build bigger projects. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <br></br>
            <Card className="card">
              <Card.Body>
                <Card.Title>Two heads are better than one</Card.Title>
                <Card.Text> Pair programming helps you: </Card.Text>
                  <ul>
                    <li> Get a new perspective</li>
                    <li> Share knowledge and learn</li>
                    <li> Keep focused on the task</li>
                    <li> Deal with errors quicker</li>
                    <li> Explain your process</li>
                  </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <br></br>
            <Card className="card">
              <Card.Body>
                <Card.Title>What our Pair Pros are saying</Card.Title>
                <Card.Text>“Pairing up on PairPro has widened my network and beefed up my coding skills!”</Card.Text>   
                <Card.Text><b>Hannah, Bristol</b></Card.Text>
                <Card.Text>“I am building a big, exciting project with people I've met through PairPro.”</Card.Text>  
                <Card.Text><b>Chisambwe, London</b></Card.Text>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
      </Row>
    </Container>
    </div>
  )
}

export default HomeCards

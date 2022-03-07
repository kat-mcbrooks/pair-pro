import { Card, Button, Row, Col, Container } from "react-bootstrap";

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis tellus eget volutpat dictum. Integer lobortis, erat nec placerat feugiat, arcu felis vestibulum quam, eget iaculis est nisi condimentum urna. Nulla eu vehicula ligula. Aenean et feugiat ex. Duis vel sapien a tortor euismod semper. Cras in malesuada erat. In nisl erat, pulvinar non lectus ac, viverra sagittis enim.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <br></br>
            <Card className="card">
              <Card.Body>
                <Card.Title>Another Informative Thing</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis tellus eget volutpat dictum. Integer lobortis, erat nec placerat feugiat, arcu felis vestibulum quam, eget iaculis est nisi condimentum urna. Nulla eu vehicula ligula. Aenean et feugiat ex. Duis vel sapien a tortor euismod semper. Cras in malesuada erat. In nisl erat, pulvinar non lectus ac, viverra sagittis enim.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <br></br>
            <Card className="card">
              <Card.Body>
                <Card.Title>Yet More Delicious Information</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis tellus eget volutpat dictum. Integer lobortis, erat nec placerat feugiat, arcu felis vestibulum quam, eget iaculis est nisi condimentum urna. Nulla eu vehicula ligula. Aenean et feugiat ex. Duis vel sapien a tortor euismod semper. Cras in malesuada erat. In nisl erat, pulvinar non lectus ac, viverra sagittis enim.
                </Card.Text>
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
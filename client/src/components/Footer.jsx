import { Navbar, Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
  <Navbar className='dark-orange-bg' variant='light'>
    <Container>
      <Navbar.Brand >DreamTeam22</Navbar.Brand>
        <Nav>
   
          <p>Javascript</p>
          <p>...</p>
          <p>Ruby</p>
          <p>...</p>
          <p>Python</p>
          <p>...</p>
          <p>C#</p>
          <p>...</p>
          <p>C++</p>

        </Nav>
    </Container>
  </Navbar>
  );
}

export default Footer

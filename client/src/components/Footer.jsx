import { Navbar, Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
  <Navbar className='dark-orange-bg' variant='light'>
    <Container>
      <Navbar.Brand >DreamTeam22</Navbar.Brand>
        <Nav>
   
          <p><img src="https://img.icons8.com/fluency/48/000000/ruby-programming-language.png"/></p>
          <p><img src="https://img.icons8.com/color/48/000000/php.png"/></p>
          <p><img src="https://img.icons8.com/color/48/000000/c-programming.png"/></p>
          <p><img src="https://img.icons8.com/color/48/000000/kotlin.png"/></p>
          <p><img src="https://img.icons8.com/color/48/000000/perl.png"/></p>
          <p><img src="https://img.icons8.com/color/48/000000/python--v1.png"/></p>
          <p><img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/></p>
          <p><img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png"/></p>
          <p><img src="https://img.icons8.com/color/50/000000/swift.png"/></p>

        </Nav>
    </Container>
  </Navbar>
  );
}

export default Footer

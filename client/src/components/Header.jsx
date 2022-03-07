import { useContext } from "react";
import { AuthContext } from "../App";
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import LogoutButton from "./LogoutButton";
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { state } = useContext(AuthContext);
  const location = useLocation();
  const bgColor = location.pathname === '/' ? 'white' : 'dark-teal'
  const hiddenText = location.pathname === '/' ? 'white-text' : 'dark-teal-text'
  const logoColor = location.pathname === '/' ? 'light' : 'dark'
  const logoLink = state.isLoggedIn ? '/pairpros' : '/'

  return (
  <Navbar fluid='true' className={bgColor} variant={logoColor}>
    <Container>
      <Navbar.Brand href={logoLink}>PairPro</Navbar.Brand>
      <Nav>
        {state.isLoggedIn ? (
          <LogoutButton />
          ):(
          <>
            <Button href="/login">Login</Button>
            <p className={hiddenText}>....</p>
            <Button variant='danger' href="/register">Sign Up</Button>
          </>
        )}
      </Nav>
    </Container>
  </Navbar>
  );
}
    
export default Header;

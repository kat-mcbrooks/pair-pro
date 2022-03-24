import { useContext } from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import LogoutButton from "./LogoutButton";
import { useLocation } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import logoPic from '../assets/nav-logo-black.png'

const Header = () => {
  const { state } = useContext(AuthContext);
  const location = useLocation();
  
  const bgColor = location.pathname === '/' ? 'white-bg' : 'dark-teal-bg'
  const hiddenText = location.pathname === '/' ? 'white-text' : 'dark-teal-text'
  const logoColor = location.pathname === '/' ? 'light' : 'dark'
  const logoLink = state.isLoggedIn ? '/pairpros' : '/'
  const sticky = location.pathname === '/' ? 'top' : false

  return (
  <Navbar fluid='true' className={bgColor} variant={logoColor} sticky={sticky}>
    <Container>
      <Navbar.Brand href={logoLink}>
        <img className="height-max70px" src={logoPic} alt="Pair Pro Logo" />
      </Navbar.Brand>
      <Nav>
        {state.isLoggedIn ? (
          <>
            <LogoutButton />
            <p className={hiddenText}>....</p>
            <Button variant='danger' href="/me">My Profile</Button>
          </>
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

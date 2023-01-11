import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

import './CollapsibleExample.css';

function CollapsibleExample() {
  return (
    <Navbar bg="light" variant={"light"} expand="lg" className='nav-space'>
      <Navbar.Brand href="/#/home" id="brand"> Senior Services</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
              className="me-auto"
              style={{ minH: '150px' }}
              // navbarScroll
          >
            <NavLink className="link" activeStyle={{ fontWeight: 'bold' }} to="/home" >Home</NavLink>
            <NavLink className="link" activeStyle={{ fontWeight: 'bold' }} to="/about" >About</NavLink>
            <NavLink className="link" activeStyle={{ fontWeight: 'bold' }} to="/connect">Connect with Us</NavLink>

          </Nav>

        </Navbar.Collapse>
  </Navbar>
  );
}

export default CollapsibleExample;
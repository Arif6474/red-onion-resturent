import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand as={Link} to="/" ><img style={{height:"25px"}} className="w-100" src={logo2} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/cart" className="text-dark"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </Nav.Link>
      <Nav.Link as={Link} to="/login" className="text-dark fw-bold me-2">Login</Nav.Link>
      <Nav.Link className="rounded-pill bg-danger text-white fw-bold">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;
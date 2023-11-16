import React from 'react';
import image from '../../constant/image';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          src={image.logo}
          alt="app_logo"
          style={{ width: '100px', marginRight: '15px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* Close icon for small screens */}
        <div className="close-icon-container d-lg-none">
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="navbar-close-icon">×</span>
        </Navbar.Toggle>
      </div>


        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Restaurant-Reservation-System">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Story">
            Our Story
          </Nav.Link>
          <Nav.Link as={Link} to="/Gallery">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/Contactus">
            Contact Us
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Admin Login
          </Nav.Link>
          <Nav.Link as={Link} to="/booknow" className="d-lg-none">
            Book Now
          </Nav.Link>
        </Nav>
        <Nav className="ml-md-auto">
          <Nav.Link as={Link} to="/booknow" className="d-none d-lg-block">
            Book Now
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
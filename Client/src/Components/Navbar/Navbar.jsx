// import React from 'react';
// import image from '../../constant/image';
// import './Navbar.css';
// import { Link } from 'react-router-dom';


// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="navbar_logo">
//           <img src={image.logo} alt="app_logo" />
//         </div>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-auto navbar-link">
//             <li className="nav-item">
//               <Link className="nav-link" to="/Restaurant-Reservation-System">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Story">
//                 Our Story
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Gallery">
//                 Gallery
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Contactus">
//                 Contact Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">
//                 Admin Login
//               </Link>
//             </li>
//           </ul>

//           <div className="navbar-nav mr-auto nav-item" id="booktable">
//             <Link to="/booknow" className="nav-link">
//               Book Now
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


// Navbar.js

// import React from 'react';
// import image from '../../constant/image';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// function CustomNavbar() {
//   return (
//     <Navbar expand="lg" bg="dark" variant="dark">
//       <Navbar.Brand>
//         <img
//           src={image.logo}
//           alt="app_logo"
//           style={{ width: '100px', marginRight: '15px' }}
//         />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link as={Link} to="/Restaurant-Reservation-System">
//             Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/Story">
//             Our Story
//           </Nav.Link>
//           <Nav.Link as={Link} to="/Gallery">
//             Gallery
//           </Nav.Link>
//           <Nav.Link as={Link} to="/Contactus">
//             Contact Us
//           </Nav.Link>
//           <Nav.Link as={Link} to="/login">
//             Admin Login
//           </Nav.Link>
//         </Nav>
//         <Nav className="ml-auto">
//           <Nav.Item id="booktable">
//             <Nav.Link as={Link} to="/booknow">
//               Book Now
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default CustomNavbar;



// Navbar.js

import React from 'react';
import image from '../../constant/image';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


function NavbarSite() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <div className="container">
          <Navbar.Brand href="/">
            <img
              className="logo-default"
              alt="مجتمع آموزشی دکتر هشترودی"
              height="80"
              src="assets/img/logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="active">
                صفحه اصلی
              </Nav.Link>
              <Nav.Link href="/">لینک</Nav.Link>
              <NavDropdown title="شبکه های اجتماعی" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">تلگرام</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  اینستاگرام
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarSite;

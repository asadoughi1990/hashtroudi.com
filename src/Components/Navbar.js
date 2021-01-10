import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavbarSite() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <div className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <AnchorLink
                href="#intro"
                className="nav-link active mr-3"
                offset="140"
              >
                صفحه اصلی
              </AnchorLink>
              <AnchorLink href="#learning" className="nav-link mr-3" offset="108">
                آموزش
              </AnchorLink>
              <AnchorLink href="#class" className="nav-link mr-3" offset="108">
                کلاس ها
              </AnchorLink>

              <NavDropdown title="شبکه های اجتماعی" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://t.me/drHashtroudiComplex"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تلگرام
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="http://instagram.com/drhashtroudi"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اینستاگرام
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="http://aparat.com/drhashtroudischool"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  آپارات
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/">
            <img
              className="logo-default"
              alt="مجتمع آموزشی دکتر هشترودی"
              height="80"
              src="assets/img/logo.png"
            />
          </Navbar.Brand>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarSite;

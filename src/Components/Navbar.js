import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavbarSite() {
  return (
    <React.Fragment>
      <Navbar className="color-nav" expand="lg" sticky="top">
        <div className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <AnchorLink
                href="#header"
                className="nav-link active mr-3"
                offset="140"
              >
                صفحه اصلی
              </AnchorLink>
              <AnchorLink href="#grades" className="nav-link mr-3" offset="90">
                مقاطع تحصیلی
              </AnchorLink>
              <AnchorLink href="#about" className="nav-link mr-3" offset="90">
                درباره ما
              </AnchorLink>
              <AnchorLink href="#lms" className="nav-link mr-3" offset="90">
                آموزش آنلاین
              </AnchorLink>
              <AnchorLink href="#video" className="nav-link mr-3" offset="90">
                ویدیوها
              </AnchorLink>
              {/* /gallery */}
              <Nav.Link href="#header" className="nav-link mr-3">
                افتخارات
              </Nav.Link>
              <AnchorLink href="#footer" className="nav-link mr-3" offset="90">
                تماس با ما
              </AnchorLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/">
            <img
              className="logo-default"
              alt="مجتمع آموزشی دکتر هشترودی"
              height="70"
              src="assets/img/logo.png"
            />
          </Navbar.Brand>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarSite;

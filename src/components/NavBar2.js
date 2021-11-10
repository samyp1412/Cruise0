import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isAuthenticated,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
            </Nav>
            {!isAuthenticated && (
            <Nav className="d-none d-md-block" navbar>
                <NavItem>
                   <Button
                        id="qsLoginBtn"
                        color="primary"
                        className="btn-margin"
                        onClick={() => logoutWithRedirect()}
                    >
                Log out
        </Button>
             </NavItem>  
             </Nav> 
              )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

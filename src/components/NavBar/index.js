import React from "react";
import "./NavbarElements.js";
import {
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavButton,
  NavButtonLink,
  NavLogo,
  NavMenu,
} from "./NavbarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavMenu>
            <NavItem>
              <NavLink>catalog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavMenu>
            <NavLogo>Troll</NavLogo>
          </NavMenu>
          <NavMenu>
            <NavButton>
              <NavButtonLink to="/download">Download CV</NavButtonLink>
            </NavButton>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;

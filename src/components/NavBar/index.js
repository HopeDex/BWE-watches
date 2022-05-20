import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

import { FaShoePrints, FaBars } from "react-icons/fa";
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
            <NavLogo>
              <FaShoePrints />
              Troll
            </NavLogo>
          </NavMenu>
          <NavMenu>
            <NavItem>
              <NavLink>Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <FiHeart fontSize={"20px"} />
              </NavLink>
            </NavItem>

            <NavButton>
              <NavButtonLink to="/download">
                <FiShoppingCart fontSize={"20px"} />3
              </NavButtonLink>
            </NavButton>
            <FaBars />
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;

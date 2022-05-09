import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  height: 60px;
  display: flex;
  position: sticky;
  top: 0;
  margin-top: -6opx;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
`;
export const NavLogo = styled.a`
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: center;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: beige;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: left;

  margin-bottom: 0;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenu2 = styled.ul`
  display: flex;
  align-items: right;

  margin-bottom: 0;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 60px;
`;

export const NavLink = styled(LinkScroll)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid beige;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    background: black;
  }
`;
export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled.a`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
    text-decoration: none;
  }
`;

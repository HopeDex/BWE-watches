import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  top: 0;
  padding-left: 100px;
  margin-right: 100px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  background: transparent;
`;
export const NavLogo = styled.a`
  color: #fff;
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
  animation: navbar 1s linear 0s 1 normal forwards;

  @media screen and (max-width: 768px) {
    display: none;
  }
  @keyframes navbar {
    0% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid beige;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: black;
    text-decoration: none;
    background: white;
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
  background: white;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: white;
    text-decoration: none;
  }
`;
export const MIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: black;
    color: white;
  }
`;

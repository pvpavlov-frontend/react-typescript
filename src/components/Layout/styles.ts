import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  color: ${colors.white};
`;
export const NavFooter = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  color: ${colors.white};
  & > a {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 8px;
    &.active {
      color: red;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${colors.white};
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
  color: ${colors.black};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

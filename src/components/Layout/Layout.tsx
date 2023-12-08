import { useLocation } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Footer,
  Main,
  NavContainer,
  StyledLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  console.log(location);
  return (
    <LayoutWrapper>
      <Header>
        Logo
        <NavContainer>
          <StyledLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
            to="/"
          >
            Home
          </StyledLink>
          <StyledLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
            to="/users"
          >
            Users
          </StyledLink>
          <StyledLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
            to="/about"
          >
            About
          </StyledLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </LayoutWrapper>
  );
}

export default Layout;

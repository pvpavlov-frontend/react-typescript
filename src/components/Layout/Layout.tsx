import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutWrapper,
  Header,
  Footer,
  Main,
  NavContainer,
  StyledLink,
  NavFooter,
} from "./styles";
import { LayoutProps } from "./types";
import Logo from "components/Logo";

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  console.log(location);
  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage} name="Logo"></Logo>
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
          <StyledLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
            to="/clients"
          >
            Clients
          </StyledLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <NavFooter>
          <StyledLink
            to="/"
          >
            Home
          </StyledLink>
          <StyledLink
            to="/users"
          >
            Users
          </StyledLink>
          <StyledLink
            to="/about"
          >
            About
          </StyledLink>
          <StyledLink
            to="/clients"
          >
            Clients
          </StyledLink>
        </NavFooter>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;

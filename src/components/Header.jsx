import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <StyledNav>
        <StyledLink to="/">LOGO</StyledLink>
        <NavList>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/my-card">My Card</StyledLink>
          <StyledLink to="/my-orders">My Orders</StyledLink>
        </NavList>
      </StyledNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #3ca8d3;
  width: 100%;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #fff;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  font-size: 20px;
  width: 400px;
  justify-content: space-between;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  :hover {
    color: #2b74e2;
  }
  &.active {
    color: #222;
  }
`;

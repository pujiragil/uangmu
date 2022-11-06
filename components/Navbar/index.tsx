import styled from "styled-components";

const Nav = styled.div`
  background: #c3ead8;
`;

const NavContainer = styled.nav`
  max-width: 1920px;
  margin: 0 auto;
`;

const NavWrapper = styled.div`
  display: flex;
  padding: 24px 16px;
  height: 80px;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`

const NavLogo = styled.img`
  height: 45px;
  cursor: pointer;
`

const NavToggle = styled(NavLogo)`
  height: 20px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const NavMenu = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

const NavItem = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
`

const NavButtonWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`

const NavButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: white;
  background: #1D191F;
  padding: 14px 24px;
  border-radius: 999px;
`

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <NavWrapper>
          <NavLogo src="/uangmu.png" />
          <NavToggle src="/menu.svg" />

          <NavMenu>
            <NavItem>Home</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact</NavItem>
          </NavMenu>

          <NavButtonWrapper>
            <NavItem>Log in</NavItem>
            <NavButton>Sign up
              <img src="/user.svg" />
            </NavButton>
          </NavButtonWrapper>
        </NavWrapper>
      </NavContainer>
    </Nav>
  );
}

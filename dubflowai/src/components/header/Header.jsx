"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoSvg from "../../assets/images/LogoContainer.svg";
import {
  GetStartedButton,
  HeaderContainer,
  Logo,
  MobileMenuButton,
  Nav,
  NavLink,
  NavLinks,
} from "./styled.components";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <img
            src={LogoSvg}
            alt="Logo"
            style={{
              height: "52px",
              width: "52px",
              marginRight: "12px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            className="header-logo-img"
          />
          DubFlow.ai
        </Logo>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink href="#dashboard">Dashboard</NavLink>
          <NavLink href="#upload">Upload</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#help">Help</NavLink>
          <NavLink href="#signin">Sign In</NavLink>
          <GetStartedButton>Get Started</GetStartedButton>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Nav>
      <style>
        {`
          @media (max-width: 600px) {
            .header-logo-img {
              height: 32px !important;
              width: 32px !important;
            }
          }
        `}
      </style>
    </HeaderContainer>
  );
}

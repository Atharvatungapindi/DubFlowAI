"use client";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LogoSvg from "../../assets/images/LogoContainer.svg";
import {
  CopyText,
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterLabel,
  FooterLinks,
  FooterLinkText,
  FooterSection,
  FooterText,
  Logo,
  SocialLinks,
} from "./styled.components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <Logo>
              <img
                src={LogoSvg}
                alt="Logo"
                style={{ height: "43px", width: "43px", marginRight: "12px" }}
              />
              DubFlow.ai
            </Logo>
            <FooterText>
              Transform your videos with AI-powered dubbing in minutes
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterLabel>Product</FooterLabel>
            <FooterLinks>
              <FooterLinkText>Features</FooterLinkText>
              <FooterLinkText>Pricing</FooterLinkText>
              <FooterLinkText>EnterPrice</FooterLinkText>
              <FooterLinkText>Case Studies</FooterLinkText>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterLabel>Resources</FooterLabel>
            <FooterLinks>
              <FooterLinkText>Documentation</FooterLinkText>
              <FooterLinkText>API</FooterLinkText>
              <FooterLinkText>Guides</FooterLinkText>
              <FooterLinkText>Support</FooterLinkText>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterLabel>Company</FooterLabel>
            <FooterLinks>
              <FooterLinkText>About</FooterLinkText>
              <FooterLinkText>Blog</FooterLinkText>
              <FooterLinkText>Careers</FooterLinkText>
              <FooterLinkText>Contact</FooterLinkText>
            </FooterLinks>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <CopyText>&copy; 2024 DubFlow.ai. All rights reserved.</CopyText>
          <SocialLinks>
            <FacebookRoundedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </SocialLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

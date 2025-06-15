"use client";
import SampleUploadImage from "../../assets/images/sample_image.png";
import {
  CTAButton,
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTextContainer,
  HeroTitle,
  HeroVisual
} from "./styled.components";

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTextContainer>
          <HeroTitle>Global Voices, Seamlessly Delivered</HeroTitle>
          <HeroSubtitle>
            Transform your videos with AI-powered dubbing in minutes
          </HeroSubtitle>
          <CTAButton>Get Started</CTAButton>
        </HeroTextContainer>

        <HeroVisual>
          <img src={SampleUploadImage} alt="Hero Visual" />
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
}

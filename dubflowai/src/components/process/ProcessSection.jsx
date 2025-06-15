"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import DividerImage from "../../assets/images/Frame.svg";
import ProcessImage from "../../assets/images/process_image.png";
import {
  StepsContainer,
  Subtitle,
  Title,
  TitleContainer,
  WorkflowContainer,
} from "./styled.components";

export default function ProcessSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <WorkflowContainer>
      <TitleContainer>
        <Title>How It Works</Title>
        <Subtitle>
          Transform your content for global reach in four simple steps
        </Subtitle>
        <img
          src={DividerImage}
          alt="Divider"
          style={{ width: "100%", maxWidth: "128px", height: "4px" }}
        />
      </TitleContainer>
      <StepsContainer>
        <img
          src={ProcessImage}
          alt="Process Steps"
          style={{ width: isMobile ? "100%" : "auto" }}
        />
      </StepsContainer>
    </WorkflowContainer>
  );
}

import styled from "styled-components";
import { Typography, Paper } from "@mui/material";

export const WorkflowContainer = styled.div`
     display: flex;
    flex-direction: column;
  align-items: center;
    width: 100%;
    overflow-x: auto;
   padding: 1rem 2rem;


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;Ī
        gap: 20px;
        padding: 1rem;
    }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #131e21;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 139%;
`;

export const Subtitle = styled.p`
  color: #5f7075;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 139%;
  letter-spacing: 0.024px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StepContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.active
      ? "0 8px 16px rgba(0, 0, 0, 0.2)"
      : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  transform: ${(props) => (props.active ? "translateY(-5px)" : "none")};

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    padding: 15px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    width: 40px;
    height: 40px;
  }
`;

export const StepTitle = styled(Typography)`
  text-align: center;
  margin-top: 10px;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-top: 0;
    text-align: left;
  }
`;

export const ConnectorDesktop = styled.div`
  width: 40px;
  height: 2px;
  background-color: #e0e0e0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ConnectorMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 2px;
    height: 20px;
    background-color: #e0e0e0;
  }
`;

export const LanguageTag = styled.div`
  background-color: #f5f5f5;
  border-radius: 16px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;

  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #f44336;
    margin-right: 8px;
  }
`;

export const PreviewButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 8px;
`;

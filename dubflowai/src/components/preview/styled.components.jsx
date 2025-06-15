import styled from "styled-components";

export const MainContainer = styled.div`
  border-radius: 8px;
  background: #fcfcfc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 1rem 2rem;
  margin: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }

`;

export const ContentWrapper = styled.div`
  display: block;
  gap: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 32px;
  }

  @media (min-width: 1200px) {
    gap: 40px;
  }
`;

export const ExportText = styled.p`
  color: #131e21;
  font-family: Poppins, Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0;

  @media (min-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.15rem;
  }
`;

export const Heading = styled.h2`
  color: #131e21;
  font-family: Poppins, Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: 0.03em;
  margin: 0;

  @media (min-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.h3`
  color: #5f7075;
  font-family: Poppins, Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.05em;
  margin: 0;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.05rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }
`;

export const VideoPreviewSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 480px) {
    gap: 10px;
  }

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1024px) {
    gap: 18px;
  }
`;

export const VideoPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e8e9ea;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 479px) {
    height: 180px;
    border-radius: 6px;
  }

  @media (min-width: 320px) {
    height: 180px;
  }

  @media (min-width: 480px) {
    height: 220px;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    height: 280px;
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    height: 320px;
    border-radius: 12px;
  }

  @media (min-width: 1200px) {
    height: 350px;
  }

  @media (min-width: 1440px) {
    height: 380px;
  }
`;

export const VideoControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 8px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  border: 1px solid #f0f0f0;

  @media (max-width: 479px) {
    flex-direction: column;
    gap: 12px;
    padding: 16px 12px;

    > div:first-child {
      width: 100%;
      justify-content: center;
    }

    > div:last-child {
      width: 100%;
      justify-content: center;
    }
  }

  @media (min-width: 320px) {
    gap: 6px;
    padding: 6px 8px;
    flex-wrap: nowrap;
  }

  @media (min-width: 480px) {
    gap: 8px;
    padding: 8px 10px;
  }

  @media (min-width: 768px) {
    gap: 12px;
    padding: 10px 14px;
    border-radius: 6px;
  }

  @media (min-width: 1024px) {
    gap: 16px;
    padding: 12px 16px;
    border-radius: 8px;
  }
`;

export const TimeDisplay = styled.span`
  color: #666666;
  min-width: 24px;
  text-align: center;
  font-size: 0.7rem;
  font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas,
    "Courier New", monospace;

  @media (min-width: 320px) {
    min-width: 28px;
    font-size: 0.75rem;
  }

  @media (min-width: 480px) {
    min-width: 32px;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    min-width: 36px;
    font-size: 0.85rem;
  }

  @media (min-width: 1024px) {
    min-width: 40px;
    font-size: 0.9rem;
  }
`;

export const ExportSection = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: 480px) {
    padding: 16px 0;
    gap: 10px;
  }

  @media (min-width: 768px) {
    padding: 20px 0;
    gap: 12px;
  }

  @media (min-width: 1024px) {
    padding: 24px 0;
    gap: 16px;
    flex-shrink: 0;
  }

  @media (min-width: 1200px) {
    gap: 18px;
  }
`;

export const ExportOption = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  width: 100%;
  min-height: 60px;

  @media (max-width: 479px) {
    padding: 18px 16px;
    gap: 14px;
    min-height: 70px;
    border-radius: 10px;
  }

  &:hover {
    background-color: #e9ecef;
    border-color: #dee2e6;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 480px) {
    gap: 10px;
    padding: 12px;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    gap: 14px;
    padding: 16px;
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    gap: 16px;
    padding: 18px;
  }

  @media (min-width: 1200px) {
    padding: 20px;
  }
`;

export const ExportIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  color: #666666;
  flex-shrink: 0;

  svg {
    font-size: 0.9rem;
  }

  @media (min-width: 480px) {
    width: 32px;
    height: 32px;
    border-radius: 6px;

    svg {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    border-radius: 8px;

    svg {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    width: 40px;
    height: 40px;

    svg {
      font-size: 1.25rem;
    }
  }
`;

export const ExportDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;

  @media (min-width: 480px) {
    gap: 2px;
  }

  @media (min-width: 768px) {
    gap: 3px;
  }

  @media (min-width: 1024px) {
    gap: 4px;
  }
`;

export const ExportTitle = styled.div`
  font-weight: 500;
  color: #1a1a1a;
  font-size: 0.8rem;
  line-height: 1.25;

  @media (min-width: 480px) {
    font-size: 0.85rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ExportSubtitle = styled.div`
  color: #666666;
  font-size: 0.7rem;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.85rem;
  }
`;

export const ResponsiveHidden = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileOnly = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

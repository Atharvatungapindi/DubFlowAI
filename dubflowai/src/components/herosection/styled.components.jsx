import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 1rem 2rem;
  margin-top: 60px;
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 968px) {
    align-items: center;
  }
`;

export const HeroTitle = styled.h1`
  color: #131e21;
  font-family: Poppins;
  font-size: 58px;
  font-style: normal;
  font-weight: 600;
  line-height: 139%;
  letter-spacing: -0.29px;

  @media (max-width: 1200px) {
    font-size: 44px;
  }
  @media (max-width: 968px) {
    font-size: 36px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const HeroSubtitle = styled.p`
  color: #5f7075;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 149.543%;
  margin-top: 12px;
  margin-bottom: 32px;

  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 968px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const CTAButton = styled.button`
  width: 100%;
  max-width: 238px;
  height: 52px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #1e57ff;
  color: #fafbfe;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    max-width: 100%;
    height: 44px;
    font-size: 14px;
    padding: 12px;
  }
`;

export const HeroVisual = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
    border-radius: 16px;
  }

  @media (max-width: 968px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    img {
      border-radius: 10px;
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    img {
      border-radius: 8px;
    }
  }
`;

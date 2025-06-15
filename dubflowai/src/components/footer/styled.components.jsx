import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #1e293b;
  color: white;
  padding: 3rem 2rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
  }
`;

export const FooterContent = styled.div`
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #334155;
  padding-top: 2rem;
  color: #94a3b8;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Logo = styled.div`
  color: #131e21;
  font-family: Poppins;
  font-size: 33px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.083px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const FooterText = styled.p`
  color: #5f7075;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.08px;
`;

export const FooterLinkText = styled.div`
  color: #5f7075;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.08px;
`;

export const FooterLabel = styled.h3`
  color: #fafbfe;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
`;

export const CopyText = styled.div`
  color: #5f7075;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.08px;
`;

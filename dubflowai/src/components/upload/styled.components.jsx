import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 1rem 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    padding: 1rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 900px) {
    gap: 16px;
  }
`;

export const TopSection = styled.div`
  border-radius: 16px;
  background: #f0f1f4;
  padding: 32px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const BottomSection = styled.div`
  border-radius: 16px;
  background: #f0f1f4;
  padding: 32px 24px;

  @media (max-width: 600px) {
    padding: 20px 12px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 900px) {
    gap: 16px;
  }
`;

export const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 2px dashed #5f7075;
  padding: 50px 16px;
  text-align: center;
  transition: border-color 0.2s ease;

  @media (max-width: 600px) {
    padding: 32px 8px;
  }
`;

export const UploadIcon = styled.div`
  margin-bottom: 24px;
`;

export const UploadText = styled.div`
  color: #131e21;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 139%;
  letter-spacing: 0.08px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const SpanText = styled.span`
  color: #131e21;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 139%;
  letter-spacing: 0.08px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const BrowseButton = styled.button`
  display: flex;
  width: 100%;
  max-width: 166px;
  height: 44px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #1e57ff;
  color: #fafbfe;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.175px;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    max-width: 100%;
    height: 38px;
    font-size: 13px;
  }
`;

export const SupportText = styled.div`
  color: #131e21;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 139%;
  letter-spacing: 0.035px;
  margin-top: 32px;

  @media (max-width: 600px) {
    font-size: 12px;
    margin-top: 16px;
  }
`;

export const IntegrationButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const IntegrationButton = styled.button`
  border-radius: 8px;
  border: 1px solid #5f7075;
  display: flex;
  max-width: 473px;
  width: 100%;
  align-content: center;
  gap: 16px;
  align-self: stretch;
  flex-wrap: wrap;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    max-width: 100%;
    font-size: 13px;
    padding: 10px 8px;
  }
`;

export const UploadSettings = styled.div`
  border-radius: 16px;
  background: #f0f1f4;
  padding: 24px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const SectionTitle = styled.h3`
  color: #131e21;
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 139%;
  letter-spacing: 0.029px;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 14px;
  }
`;

export const Label = styled.label`
  color: #5f7075;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 139%;
  letter-spacing: 0.035px;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 6px;
  }
`;

export const StartButton = styled.button`
  border-radius: 12px;
  width: 100%;
  background: #4285f4;
  color: #fafbfe;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.175px;
  display: flex;
  height: 44px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border: none;

  @media (max-width: 600px) {
    height: 38px;
    font-size: 13px;
    padding: 10px 8px;
  }
`;

export const LanguageSection = styled.div`
  padding: 24px;
  border-radius: 16px;
  border: 0.5px solid #5f7075;

  @media (max-width: 600px) {
    padding: 14px;
  }
`;

export const SearchInput = styled.input`
  border-radius: 8px;
  border: 1px solid #5f7075;
  width: 100%;
  padding: 8px;
  color: #5f7075;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 139%;
  letter-spacing: 0.08px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
    border-color: #4285f4;
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 6px;
    margin-bottom: 10px;
  }
`;

export const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const LanguageCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 2px solid ${(props) => (props.selected ? props.color : "#e1e5e9")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;


  @media (max-width: 600px) {
    padding: 10px;
    gap: 20px;
  }
`;

export const LanguageFlag = styled.div`
  font-size: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 6px;

  @media (max-width: 600px) {
    font-size: 18px;
    width: 24px;
    height: 24px;
  }
`;

export const LanguageInfo = styled.div`
  flex: 1;
`;

export const LanguageName = styled.div`
  color: #131e21;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.08px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LangCode = styled.div`
  color: #5f7075;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.048px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const VoiceCount = styled.div`
  color: #5f7075;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.048px;
  margin-top: 8px;

  @media (max-width: 600px) {
    font-size: 10px;
    margin-top: 4px;
  }
`;

export const FiltersTitle = styled.h4`
  color: #131e21;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 139%;
  letter-spacing: 0.08px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 16px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

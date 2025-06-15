import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  margin-bottom: 20px;
  }                                                `;

export const VoiceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;

  & > * {
    flex: 1 1 200px;
    max-width: 300px;
    min-width: 200px;
    box-sizing: border-box;
  }
`;

export const VoiceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  border: 2px solid ${(props) => (props.selected ? "#4285f4" : "transparent")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
  background: ${(props) => (props.isUpload ? "#f1f3f4" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8e8e8;
  border-radius: 50%;
`;

export const VoiceName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
  text-align: center;
`;

export const VoiceLanguage = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  text-align: center;
`;

export const TagsContainer = styled.div`
  max-width: 97px;
  width: 100%;
  padding: 8px 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 16px;
  background: ${(props) => {
    switch (props.type) {
      case "female":
        return "#e8f0fe";
      case "male":
        return "#e8f0fe";
      case "formal":
        return "#e6f7ff";
      case "excited":
        return "#e6f7ff";
      default:
        return "#f1f3f4";
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "female":
        return "#4285f4";
      case "male":
        return "#4285f4";
      case "formal":
        return "#03a9f4";
      case "excited":
        return "#03a9f4";
      default:
        return "#666";
    }
  }};
`;

export const PreviewButton = styled.button`
  background: ${(props) => (props.isUpload ? "transparent" : "#4285f4")};
  color: ${(props) => (props.isUpload ? "transparent" : "white")};
  border: ${(props) => (props.isUpload ? "1px solid #ddd" : "none")};
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  text-align: center;
  opacity: ${(props) => (props.playing ? 0.8 : 1)};
  color: ${(props) => (props.isUpload ? "#666" : "white")};
  margin-top: ${(props) => (props.isUpload ? "auto" : "0")};
  display: ${(props) => (props.isUpload ? "none" : "block")};

  &:hover {
    background: ${(props) => (props.isUpload ? "#f8f9fa" : "#3367d6")};
  }
`;

export const CloneDescription = styled.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin: 8px 0 16px;
  line-height: 1.4;
`;

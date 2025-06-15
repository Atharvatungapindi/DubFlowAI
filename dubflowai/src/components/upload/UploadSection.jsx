"use client";

import { useState } from "react";
import UploadImage from "../../assets/images/UploadIcon.svg";
import DropBoxIcon from "../../assets/images/drop-box.svg";
import GoogleDriveIcon from "../../assets/images/google-drive.svg";
import YoutubeIcom from "../../assets/images/youtube.svg";
import {
  BottomSection,
  BrowseButton,
  Container,
  FilterGroup,
  FiltersTitle,
  FormGroup,
  IntegrationButton,
  IntegrationButtons,
  Label,
  LangCode,
  LanguageCard,
  LanguageFlag,
  LanguageGrid,
  LanguageInfo,
  LanguageName,
  LanguageSection,
  LeftSection,
  RightSection,
  SearchInput,
  SectionTitle,
  Select,
  SpanText,
  StartButton,
  SupportText,
  TopSection,
  UploadArea,
  UploadIcon,
  UploadSettings,
  UploadText,
  VoiceCount,
} from "./styled.components";
import FrenchFlag from "../../assets/images/france-flag.png";
import SpanishFlag from "../../assets/images/spanish-flag.png";
import ItalicFlag from "../../assets/images/Italic-flag.png";
import IndianFlag from "../../assets/images/inidan-flag.png";
import ChinaFlag from "../../assets/images/china-flag.png";
import DutchFlag from "../../assets/images/dutch-flag.png";
import GermanFlag from "../../assets/images/german-flag.png";
import KoreanFlag from "../../assets/images/korean-flag.png";
import { Search } from "lucide-react";

const UploadSection = () => {
  const [fileFormat, setFileFormat] = useState("MP4");
  const [quality, setQuality] = useState("High (1080p)");
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    {
      name: "French",
      code: "Francais",
      flag: FrenchFlag,
      voices: 45,
    },
    {
      name: "Spanish",
      code: "Espanol",
      flag: SpanishFlag,
      voices: 38,
    },
    {
      name: "Italian",
      code: "Italiano",
      flag: ItalicFlag,
      voices: 30,
    },
    {
      name: "Indian",
      code: "Hindi",
      flag: IndianFlag,
      voices: 50,
    },
    {
      name: "Korean",
      code: "Korean",
      flag: KoreanFlag,
      voices: 42,
    },
    {
      name: "Chinese",
      code: "Mandarian",
      flag: ChinaFlag,
      voices: 22,
    },
    {
      name: "German",
      code: "Deutsch",
      flag: GermanFlag,
      voices: 42,
    },
    {
      name: "Dutch",
      code: "Dutch",
      flag: DutchFlag,
      voices: 28,
    },
  ];

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <LeftSection>
        <TopSection>
          <UploadArea>
            <UploadIcon>
              <img src={UploadImage} alt="Upload Icon" />
            </UploadIcon>
            <UploadText>Drag and drop your video here</UploadText>
            <SpanText>or</SpanText>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "24px",
              }}
            >
              <BrowseButton>Browse Files</BrowseButton>
            </div>
            <SupportText>Support MP4, MOV, AVI (up to 2GB)</SupportText>
          </UploadArea>

          <IntegrationButtons>
            <IntegrationButton>
              <img src={GoogleDriveIcon} alt="google-drive" /> Google Drive
            </IntegrationButton>
            <IntegrationButton>
              <img src={DropBoxIcon} alt="drop-box" /> DropBox
            </IntegrationButton>
            <IntegrationButton>
              <img src={YoutubeIcom} alt="youtube-icon" /> Youtube
            </IntegrationButton>
          </IntegrationButtons>
        </TopSection>

        <BottomSection>
          <SectionTitle>Select Voice Actor</SectionTitle>
          <FiltersTitle>Filters</FiltersTitle>

          <FilterGroup>
            <Label>Gender</Label>
            <Select>
              <option>All</option>
              <option>Male</option>
              <option>Female</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Accent</Label>
            <Select>
              <option>All</option>
              <option>American</option>
              <option>British</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Style</Label>
            <Select>
              <option>All</option>
              <option>Professional</option>
              <option>Casual</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Price</Label>
            <Select>
              <option>Free</option>
              <option>Premium</option>
            </Select>
          </FilterGroup>
        </BottomSection>
      </LeftSection>

      <RightSection>
        <UploadSettings>
          <SectionTitle>Upload Settings</SectionTitle>

          <FormGroup>
            <Label>File Format</Label>
            <Select
              value={fileFormat}
              onChange={(e) => setFileFormat(e.target.value)}
            >
              <option>MP4</option>
              <option>MOV</option>
              <option>AVI</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Quality</Label>
            <Select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            >
              <option>High (1080p)</option>
              <option>Medium (720p)</option>
              <option>Low (480p)</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Batch Processing</Label>
          </FormGroup>

          <StartButton>Start Dubbing</StartButton>
        </UploadSettings>

        <LanguageSection>
          <SectionTitle>Choose Target Language</SectionTitle>

          <div style={{ position: "relative", width: "100%" }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
                pointerEvents: "none",
              }}
            />
            <SearchInput
              type="text"
              placeholder="Search languages"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: "36px" }}
            />
          </div>

          <LanguageGrid>
            {filteredLanguages.map((language) => (
              <LanguageCard
                key={language.code}
                // onClick={() => setSelectedLanguage(language.code)}
                // selected={selectedLanguage === language.code}
                // color={language.color}
              >
                <LanguageFlag>
                  <img
                    src={language.flag}
                    alt={language.code}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "62px",
                      maxHeight: "44px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </LanguageFlag>
                <LanguageInfo>
                  <LanguageName>{language.name}</LanguageName>
                  <LangCode>{language.code}</LangCode>
                  <VoiceCount>{language.voices} voices</VoiceCount>
                </LanguageInfo>
              </LanguageCard>
            ))}
          </LanguageGrid>
        </LanguageSection>
      </RightSection>
    </Container>
  );
};

export default UploadSection;

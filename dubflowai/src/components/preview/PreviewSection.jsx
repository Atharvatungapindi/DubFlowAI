"use client";
import { ChevronRight, Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import { useState } from "react";
import AudioDubIcon from "../../assets/images/audioIcon.svg";
import SubtitleIcon from "../../assets/images/subtitleIcon.svg";
import VideoDubIcon from "../../assets/images/videoDub.svg";
import {
  ContentWrapper,
  ExportDetails,
  ExportOption,
  ExportSection,
  ExportSubtitle,
  ExportText,
  ExportTitle,
  Heading,
  MainContainer,
  SubHeading,
  TimeDisplay,
  VideoControls,
  VideoPlaceholder,
  VideoPreviewSection,
} from "./styled.components";

const PreviewSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(0);

  const exportOptions = [
    {
      id: "video",
      title: "Video with Dubbing",
      subtitle: "MP4, Full Quality",
      icon: VideoDubIcon,
    },
    {
      id: "audio",
      title: "Audio Only",
      subtitle: "MP3, High Quality",
      icon: AudioDubIcon,
    },
    {
      id: "subtitles",
      title: "Subtitles",
      subtitle: "SRT, VTT formats",
      icon: SubtitleIcon,
    },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (event, newValue) => {
    setCurrentTime(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleExportOptionClick = (optionId) => {
    console.log(`Export option clicked: ${optionId}`);
    // Handle export logic here
  };

  return (
    <MainContainer>
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Heading>Preview & Export</Heading>
        <SubHeading>Review and download your dubbed video</SubHeading>
      </Box>

      <ContentWrapper>
        <VideoPreviewSection>
          <VideoPlaceholder>
            <Typography
              variant="body1"
              sx={{
                color: "#666666",
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
            >
              No video to display
            </Typography>
          </VideoPlaceholder>

          <VideoControls>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                minWidth: 0,
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <IconButton
                onClick={handlePlayPause}
                size="medium"
                sx={{
                  color: "#666666",
                  width: { xs: 44, sm: 36 },
                  height: { xs: 44, sm: 36 },
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                }}
              >
                {isPlaying ? (
                  <Pause sx={{ fontSize: { xs: "1.5rem", sm: "1.25rem" } }} />
                ) : (
                  <PlayArrow
                    sx={{ fontSize: { xs: "1.5rem", sm: "1.25rem" } }}
                  />
                )}
              </IconButton>

              <TimeDisplay>{formatTime(currentTime)}</TimeDisplay>

              <Box
                sx={{
                  flexGrow: 1,
                  mx: { xs: 1, sm: 2 },
                  minWidth: { xs: "120px", sm: "180px" },
                  maxWidth: { xs: "200px", sm: "300px" },
                }}
              >
                <Slider
                  value={currentTime}
                  max={duration || 100}
                  onChange={handleTimeChange}
                  size="medium"
                  sx={{
                    color: "#666666",
                    height: { xs: 6, sm: 4 },
                    "& .MuiSlider-thumb": {
                      width: { xs: 16, sm: 12 },
                      height: { xs: 16, sm: 12 },
                      backgroundColor: "#666666",
                      "&:hover": {
                        boxShadow: "0 0 0 8px rgba(102, 102, 102, 0.16)",
                      },
                    },
                    "& .MuiSlider-track": {
                      height: { xs: 6, sm: 4 },
                      backgroundColor: "#666666",
                    },
                    "& .MuiSlider-rail": {
                      height: { xs: 6, sm: 4 },
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                />
              </Box>

              <TimeDisplay>{formatTime(duration)}</TimeDisplay>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <IconButton
                size="medium"
                sx={{
                  color: "#666666",
                  width: { xs: 44, sm: 36 },
                  height: { xs: 44, sm: 36 },
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                }}
              >
                <VolumeUp sx={{ fontSize: { xs: "1.5rem", sm: "1.25rem" } }} />
              </IconButton>

              <Box
                sx={{
                  width: { xs: "80px", sm: "78px" },
                  minWidth: { xs: "80px", sm: "78px" },
                  maxWidth: { xs: "80px", sm: "78px" },
                  height: { xs: "6px", sm: "4px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Slider
                  size="medium"
                  sx={{
                    color: "#666666",
                    height: { xs: 6, sm: 4 },
                    "& .MuiSlider-thumb": {
                      width: { xs: 14, sm: 10 },
                      height: { xs: 14, sm: 10 },
                      backgroundColor: "#666666",
                    },
                    "& .MuiSlider-track": {
                      height: { xs: 6, sm: 4 },
                      backgroundColor: "#666666",
                    },
                    "& .MuiSlider-rail": {
                      height: { xs: 6, sm: 4 },
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                />
              </Box>
            </div>
          </VideoControls>
        </VideoPreviewSection>

        <ExportSection>
          <ExportText>Export Options</ExportText>

          {exportOptions.map((option) => (
            <ExportOption
              key={option.id}
              onClick={() => handleExportOptionClick(option.id)}
            >
              <img
                src={option.icon}
                alt={option.title}
                style={{
                  width: "36px",
                  height: "36px",
                  flexShrink: 0,
                }}
              />
              <ExportDetails>
                <ExportTitle>{option.title}</ExportTitle>
                <ExportSubtitle>{option.subtitle}</ExportSubtitle>
              </ExportDetails>

              <ChevronRight
                sx={{
                  color: "#999999",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                }}
              />
            </ExportOption>
          ))}
        </ExportSection>
      </ContentWrapper>
    </MainContainer>
  );
};

export default PreviewSection;

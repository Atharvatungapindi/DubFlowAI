"use client";

import { useState } from "react";
import {
  Container,
  VoiceGrid,
  VoiceCard,
  AvatarContainer,
  Avatar,
  UploadIcon,
  VoiceName,
  VoiceLanguage,
  TagsContainer,
  Tag,
  PreviewButton,
  CloneDescription,
} from "./styled.components";
import ClaraImg from "../../assets/images/clara.png";
import ThomasImg from "../../assets/images/Thomas.png";
import MariaImg from "../../assets/images/Maria.png";
import UploadImg from "../../assets/images/UploadCard.svg";

const VoiceSection = () => {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const voices = [
    {
      id: "clara",
      name: "Clara",
      language: "French",
      tags: ["Female", "Formal"],
      avatar: ClaraImg,
      audioSample: "/audio/clara-sample.mp3",
    },
    {
      id: "thomas",
      name: "Thomas",
      language: "French",
      tags: ["Male", "Excited"],
      avatar: ThomasImg,
      audioSample: "/audio/thomas-sample.mp3",
    },
    {
      id: "marie",
      name: "Marie",
      language: "Dutch",
      tags: ["Female", "Formal"],
      avatar: MariaImg,
      audioSample: "/audio/marie-sample.mp3",
    },
  ];

  const handlePreviewVoice = (voice) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // In a real implementation, this would play the actual audio file
    const audio = new Audio(voice.audioSample);
    audio.onplay = () => {
      setIsPlaying(true);
      setSelectedVoice(voice.id);
    };
    audio.onended = () => {
      setIsPlaying(false);
    };

    setCurrentAudio(audio);
    audio.play().catch((error) => {
      console.log("Audio playback error:", error);
      // Handle the error or show a message to the user
    });
  };

  const handleUploadVoice = () => {
    // This would trigger a file upload dialog in a real implementation
    console.log("Upload voice sample");
  };

  return (
    <Container>
      <VoiceGrid>
        {voices.map((voice) => (
          <VoiceCard key={voice.id} selected={selectedVoice === voice.id}>
            <AvatarContainer>
              <Avatar src={voice.avatar} alt={voice.name} />
            </AvatarContainer>
            <VoiceName>{voice.name}</VoiceName>
            <VoiceLanguage>{voice.language}</VoiceLanguage>
            <TagsContainer>
              {voice.tags.map((tag, index) => (
                <Tag key={index} type={tag.toLowerCase()}>
                  {tag}
                </Tag>
              ))}
            </TagsContainer>
            <PreviewButton
              onClick={() => handlePreviewVoice(voice)}
              playing={isPlaying && selectedVoice === voice.id}
            >
              {isPlaying && selectedVoice === voice.id
                ? "Playing..."
                : "Preview Voice"}
            </PreviewButton>
          </VoiceCard>
        ))}

        <VoiceCard isUpload>
          <AvatarContainer isUpload>
            <UploadIcon>
              <img src={UploadImg} alt="Upload Icon" />
            </UploadIcon>
          </AvatarContainer>
          <VoiceName>Clone Your Voice</VoiceName>
          <CloneDescription>
            Upload audio sample to create your custom voice
          </CloneDescription>
          <PreviewButton onClick={handleUploadVoice} isUpload>
            Upload Sample
          </PreviewButton>
        </VoiceCard>
      </VoiceGrid>
    </Container>
  );
};

export default VoiceSection;

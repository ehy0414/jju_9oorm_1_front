"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../home/images/cake.png";
import image2 from "../home/images/painting.png";
import image3 from "../home/images/uiux.png";

const CarouselContainer = styled.section`
  padding: 0 12px;
`;

const BannerWrapper = styled.article`
  position: relative;
  width: 100%;
  height: 360px;
  border-radius: 6px;
  overflow: hidden;
`;

const ImageLayer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  z-index: ${(props) => (props.$active ? 1 : 0)};
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(4px);
`;

const Dot = styled.span`
  width: ${(props) =>
    props.$active ? "12px" : "8px"};
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.3)"};
  cursor: pointer;
  transition: background-color 0.3s;
`;

const images = [image1, image2, image3];

export function ImageBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      setPrevIndex(currentIndex);
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContainer>
      <BannerWrapper>
        {images.map((img, index) => (
          <ImageLayer
            key={index}
            src={img}
            $active={index === currentIndex}
            alt={`Banner ${index + 1}`}
          />
        ))}
        <DotContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              $active={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotContainer>
      </BannerWrapper>
    </CarouselContainer>
  );
}

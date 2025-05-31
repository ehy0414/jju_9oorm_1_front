"use client";
import * as React from "react";
import styled from "styled-components";
import image1 from "../../home/images/video.png";
import image2 from "../../home/images/painting.png";
import image3 from "../../home/images/uiux.png";

const Figure = styled.figure`
  display: flex;
  min-height: 164px;
  width: 100%;
  align-items: stretch;
  overflow: hidden;
  justify-content: start;
  margin: 0;
`;

const ImageContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  width: 100%;
  padding: 3px 3px 1px;
  flex-direction: column;
  align-items: stretch;
  height: 164px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  position: relative; /* 추가 */
  overflow: hidden;    /* 이미지 넘침 방지 */
`;

const Title = styled.h2`
  z-index: 1;
  color: white;
  font-size: 12px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  margin: 0;
`;

const Pagination = styled.div`
  z-index: 1;
  align-self: center;
  display: flex;
  margin-top: 65px;
  align-items: center;
  gap: 4px;
  justify-content: center;
`;


const PaginationDot = styled.div`
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 1);
  align-self: stretch;
  display: flex;
  min-height: 4px;
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;


function ImageSection() {
  return (
    <ImageContainer>
        <StyledImage src={image2} alt="수업 사진" />
        <Pagination>
            <PaginationDot />
        </Pagination>
    </ImageContainer>

  );
}

export default ImageSection;

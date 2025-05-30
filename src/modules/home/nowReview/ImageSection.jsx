"use client";
import * as React from "react";
import styled from "styled-components";

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
  padding: 76px 33px 8px;
  flex-direction: column;
  align-items: stretch;
  height: 164px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  margin: 0;
`;

const Pagination = styled.div`
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

function ImageSection() {
  return (
    <Figure>
      <ImageContainer>
        <Title>참가중인 수업 사진</Title>
        <Pagination>
          <PaginationDot />
        </Pagination>
      </ImageContainer>
    </Figure>
  );
}

export default ImageSection;

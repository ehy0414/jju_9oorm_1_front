"use client";
import styled from "styled-components";
import ClassTag from "./ClassTag";

const ClassCard = () => {
  return (
    <CardWrapper>
      <ImageContainer>
        <ImagePlaceholder />
      </ImageContainer>
      <ContentSection>
        <ClassTitle>기초 요가</ClassTitle>
        <ClassDescription>
          이 클래스에서는 요가의 기초를 배웁니다. 다양한 자세를 익히고 몸의 유연성을
          기릅니다.
        </ClassDescription>
        <ClassTag>#요가</ClassTag>
      </ContentSection>
      <BottomImage src="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/9f00bafa25ca45e4d3185c71fb60efa532a22496?placeholderIfAbsent=true" alt="" />
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  position: relative;
  display: flex;
  margin-top: 8px;
  width: 100%;
  padding: 8px 0;
  align-items: start;
  gap: 12px;
  justify-content: center;
`;

const ImageContainer = styled.div`
  z-index: 0;
  display: flex;
  min-height: 80px;
  align-items: stretch;
  overflow: hidden;
  justify-content: start;
  width: 80px;
`;

const ImagePlaceholder = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  min-height: 80px;
  width: 80px;
  height: 80px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

const ContentSection = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  justify-content: start;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

const ClassTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  margin-top:2px;
`;

const ClassDescription = styled.p`
  line-height: 20px;
  margin: 0;
`;

const BottomImage = styled.img`
  aspect-ratio: 333.33;
  object-fit: contain;
  object-position: center;
  width: 331px;
  position: absolute;
  z-index: 0;
  min-width: 240px;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 0;
`;

export default ClassCard;

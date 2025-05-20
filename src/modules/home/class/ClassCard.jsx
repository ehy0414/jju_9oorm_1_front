"use client";
import styled from "styled-components";
import ClassTag from "./ClassTag";

const CardWrapper = styled.article`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 150px;
  flex-shrink: 0;
  cursor: pointer;
`;

const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 150px;
  margin: 0;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const TagPosition = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
`;

const TextContent = styled.div`
  width: 100%;
  padding: 8px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  margin: 0;
`;

const Duration = styled.time`
  font-size: 12px;
  font-weight: 500;
  display: block;
  margin-top: 4px;
`;

const ClassCard = ({ tag, imageUrl, title, duration, isLast }) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <Img src={imageUrl || "/placeholder.jpg"} alt={title} />
        <TagPosition>
          <ClassTag>{tag}</ClassTag>
        </TagPosition>
      </ImageContainer>
      <TextContent>
        <Title>{title}</Title>
        <Duration>{duration}</Duration>
      </TextContent>
    </CardWrapper>
  );
};

export default ClassCard;

import React from "react";
import styled from "styled-components";

const CarouselContainer = styled.section`
  padding: 0 12px;
  @media (max-width: 991px) {
    padding: 0 16px;
  }
  @media (max-width: 640px) {
    padding: 0 8px;
  }
`;

const BannerWrapper = styled.article`
  position: relative;
  width: 100%;
  height: 360px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  @media (max-width: 640px) {
    height: 300px;
  }
`;

const BannerText = styled.p`
  width: 304px;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  color: #000;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 640px) {
    width: 90%;
    font-size: 14px;
  }
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export function ImageBanner() {
  return (
    <CarouselContainer>
      <BannerWrapper>
        <BannerText>
          오늘 뜨는 클래스 광고 이미지 또는 할인 프로모션 또는 쿠폰... 등
        </BannerText>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
      </BannerWrapper>
    </CarouselContainer>
  );
}

import React from "react";
import styled from "styled-components";

export const LoginBadge = () => {
  return (
    <BadgeContainer>
      <BadgeBackground>
        <BadgeText>5초만에 가입</BadgeText>
      </BadgeBackground>
      <DiamondIconWrapper>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.68457 0L11.3414 5.65685L5.68457 11.3137L0.0277166 5.65685L5.68457 0Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0286932 5.65685L5.68555 11.3137L11.3424 5.65685L10.6353 4.94975L5.68555 9.8995L0.7358 4.94975L0.0286932 5.65685Z"
            fill="#D9D9D9"
          />
        </svg>
      </DiamondIconWrapper>
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const BadgeBackground = styled.div`
    width: 66px;
    height: 24px;
    margin-right: 70px;
    margin-top:70px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.13);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BadgeText = styled.p`
    color: #f00;
    font-family: 'Jua', sans-serif;
    font-size: 11px;
    font-weight: bold;
    margin: 0;
`;

const DiamondIconWrapper = styled.div`
    position: absolute;
    top: 14px; /* 말풍선 밑에 오도록 조정 */
    margin-top:70px;
    left: 6px;
`;

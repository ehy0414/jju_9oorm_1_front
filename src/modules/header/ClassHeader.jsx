"use client";
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ClassHeader() {
    const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <IconWrapper>
          <svg onClick={()=> {navigate(-1)}}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px] aspect-[1/1]"
        >
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7071 3.29289C16.3166 2.90237 15.6834 2.90237 15.2929 3.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L15.2929 20.7071C15.6834 21.0976 16.3166 21.0976 16.7071 20.7071C17.0976 20.3166 17.0976 19.6834 16.7071 19.2929L9.41421 12L16.7071 4.70711C17.0976 4.31658 17.0976 3.68342 16.7071 3.29289Z"
            fill="black"
            fillOpacity="0.7"
            />
        </svg>
        </IconWrapper>
        <Title>HOT 클래스</Title>
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
`;

const HeaderContent = styled.div`
  display: flex;
  padding: 12px 8px;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const IconWrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  flex: 1;
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export default ClassHeader;

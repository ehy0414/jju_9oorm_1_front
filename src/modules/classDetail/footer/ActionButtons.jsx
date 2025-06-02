"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ActionButton = styled.button`
  color: ${props => props.$inverse ? '#fff' : '#000'};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 10px 12px;
  width: 100%;
  border-radius: 8px;
  border: ${props => props.$inverse ? 'none' : '1px solid #000'};
  background-color: ${props => props.$inverse ? '#000' : '#fff'};
  cursor: pointer;
  text-align: left;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const ButtonContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 92%;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    gap: 8px;
    margin-bottom: 60px;

`;

function ActionButtons() {
    const navigate = useNavigate();
    return (
        <ButtonContainer>
        <ActionButton
            onClick={() => console.log('View cart')}
        >
            더 알아보기
        </ActionButton>
        <ActionButton
            $inverse
            onClick={() => console.log('Contact expert')}
        >
            클래스 신청
        </ActionButton>
        </ButtonContainer>
    );
}

export default ActionButtons;

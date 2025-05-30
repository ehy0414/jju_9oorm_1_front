"use client";
import * as React from "react";
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
    margin-bottom: 80px;

`;

function ActionButtons() {
  return (
    <ButtonContainer>
      <ActionButton
        onClick={() => console.log('View all classes')}
        aria-label="View all classes"
      >
        모든 클래스 보기
      </ActionButton>
      <ActionButton
        onClick={() => console.log('View cart')}
        aria-label="View shopping cart"
      >
        장바구니 보기
      </ActionButton>
      <ActionButton
        $inverse
        onClick={() => console.log('Contact expert')}
        aria-label="Contact an expert"
      >
        전문가에게 문의하기
      </ActionButton>
    </ButtonContainer>
  );
}

export default ActionButtons;

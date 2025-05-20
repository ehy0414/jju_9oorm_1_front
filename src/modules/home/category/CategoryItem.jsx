"use client";
import * as React from "react";
import styled from "styled-components";

const ItemWrapper = styled.article`
    display: flex;
    height: 68px;
    padding: 4px;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    transition: all 0.3s ease; /* 부드러운 애니메이션 */

    &:hover {
        transform: scale(1.05); /* 약간 확대 */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 그림자 추가 */
    }

  @media (max-width: 991px) {
    height: 80px;
    padding: 3px;
  }

  @media (max-width: 640px) {
    height: 72px;
    padding: 2px;
  }
`;

const CategoryIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-top: 12px;
  @media (max-width: 640px) {
    width: 22px;
    height: 22px;
  }
`;

const CategoryLabel = styled.p`
  flex-shrink: 0;
  align-self: stretch;
  overflow: hidden;
  color: #000;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  margin-top:2px;

  @media (max-width: 640px) {
    font-size: 9px;
    line-height: 12px;
  }
`;

const CategoryItem = ({ iconUrl, label }) => {
  return (
    <ItemWrapper>
      <CategoryIcon src={iconUrl} alt="" />
      <CategoryLabel>{label}</CategoryLabel>
    </ItemWrapper>
  );
};

export default CategoryItem;

"use client";
import styled from "styled-components";

const CategoryChip = ({ imageUrl, title }) => {
  return (
    <ChipArticle>
      <CategoryImage src={imageUrl} alt={`${title} category icon`} />
      <CategoryTitle>{title}</CategoryTitle>
    </ChipArticle>
  );
};

const ChipArticle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 2px 12px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 75px;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

const CategoryImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 6px;
`;

const CategoryTitle = styled.h3`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  color: #333;
`;


export default CategoryChip;

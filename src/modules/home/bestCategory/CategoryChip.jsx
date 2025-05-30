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
  flex-direction: column; /* 세로로 배치 */
  align-items: center;     /* 가운데 정렬 */
  justify-content: center;
  gap: 4px;                /* 이미지와 텍스트 사이 간격 */
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 75px;
`;

const CategoryImage = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  margin-top: 14px;
`;

const CategoryTitle = styled.h3`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin-top: 6px;  /* 원하는 만큼 내려줌 */
`;


export default CategoryChip;

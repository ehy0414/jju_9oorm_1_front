"use client";
import styled from "styled-components";
import CategoryHeader from "./CategoryHeader";
import CategoryChip from "./CategoryChip";

const BestCategoryList = () => {
  const categories = [
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/7615727f464e0851cdcc13b92985ee8299787270?placeholderIfAbsent=true", title: "음악" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/bd4eb31176e49688b38e0318bf47df28e75d96fc?placeholderIfAbsent=true", title: "요리" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/b3a9d34a0da3bc3af8b2f33ccc2789fbf91821e4?placeholderIfAbsent=true", title: "미술" },
  ];

  return (
    <ListSection>
      <CategoryHeader title="베스트 카테고리" />
      <CategoryRow>
        {categories.map((category, index) => (
          <ListItem key={index}>
            <CategoryChip imageUrl={category.imageUrl} title={category.title} />
          </ListItem>
        ))}
      </CategoryRow>
    </ListSection>
  );
};

const ListSection = styled.section`
  padding: 15px;
  display: flex;
  max-width: 94%;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  justify-content: center;
`;

const CategoryRow = styled.ul`
  display: flex;
  margin-top: 8px;
  width: 100%;
  align-items: start;
  gap: 14px;
  font-size: 14px;
  white-space: nowrap;
  text-align: center;
  line-height: 16px;
  justify-content: start;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

const ListItem = styled.li`
  padding: 0;
  margin: 0;
`;

export default BestCategoryList;

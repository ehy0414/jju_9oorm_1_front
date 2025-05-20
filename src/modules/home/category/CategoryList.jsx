"use client";
import * as React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryContainer = styled.section`
  display: flex;
  width: 93%;
  max-width: 360px;
  padding: 0 12px;
  margin-top: 12px;
  align-items: flex-start;
  gap: 8px;

  @media (max-width: 991px) {
    padding: 0 8px;
    gap: 6px;
  }

  @media (max-width: 640px) {
    padding: 0 6px;
    gap: 4px;
  }
`;

const FontLoader = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
    rel="stylesheet"
  />
);

const CategoryList = () => {
  const categories = [
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/23ff155bc1b29ad924def1a683d935b7617952fc", label: "미술" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d3bc0c3e73f928531653ab9f0b1259c789577b3", label: "요리" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce7bf4baf2422efcf4d99ade8d67bcbd02b60c94", label: "공예" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/efb693a20ec5ce539908ce52997d87e7ae838f98", label: "영상" },
  ];

  return (
    <>
      <FontLoader />
      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            iconUrl={category.iconUrl}
            label={category.label}
          />
        ))}
      </CategoryContainer>
    </>
  );
};

export default CategoryList;

"use client";
import styled from "styled-components";

const CategoryHeader = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  width: 100%;
  padding-top: 16px;
  align-items: center;
  gap: 12px;
  justify-content: start;
`;

const Title = styled.h2`
  align-self: stretch;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  margin: 0;
`;

export default CategoryHeader;

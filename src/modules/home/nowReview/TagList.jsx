"use client";
import * as React from "react";
import styled from "styled-components";

const TagContainer = styled.ul`
  display: flex;
  margin: 8px 0 0;
  width: 100%;
  align-items: center;
  gap: 6px;
  overflow: hidden;
  white-space: nowrap;
  justify-content: start;
  padding: 0;
  list-style: none;
`;

const Tag = styled.li`
  align-self: stretch;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 1px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 2px 4px;
  gap: 2px;
  overflow: hidden;
`;

function TagList() {
  return (
    <TagContainer>
      <Tag>#원데이클래스</Tag>
      <Tag>#즐거운시간</Tag>
    </TagContainer>
  );
}

export default TagList;

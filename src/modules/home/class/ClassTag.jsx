"use client";
import styled from "styled-components";

const TagWrapper = styled.span`
  border-radius: 6px;
  background-color: #999; // 어두운 회색
  color: #fff;
  padding: 4px;
  white-space: nowrap;
  font-size: 12px;
`;

const ClassTag = ({ children }) => {
  return <TagWrapper>{children}</TagWrapper>;
};

export default ClassTag;

import styled from "styled-components";

const ClassTag = ({ children }) => {
  return <TagWrapper>{children}</TagWrapper>;
};

const TagWrapper = styled.span`
  align-self: start;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2px 4px;
  gap: 2px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1;
  font-size: 12px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
`;

export default ClassTag;

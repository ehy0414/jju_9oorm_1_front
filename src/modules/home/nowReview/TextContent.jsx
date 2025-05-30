"use client";
import * as React from "react";
import styled from "styled-components";
import TagList from "./TagList";
import UserAvatar from "./UserAvatar";

const Container = styled.div`
  width: 100%;
  padding: 8px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  line-height: 1;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
`;

function TextContent() {
  return (
    <Container>
      <Title>오늘의 수업을 기대해요!</Title>
      <TagList />
      <UserAvatar />
    </Container>
  );
}

export default TextContent;

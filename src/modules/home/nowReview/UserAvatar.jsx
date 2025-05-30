"use client";
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  white-space: nowrap;
  justify-content: start;
`;

const AvatarImage = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  align-self: stretch;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  flex-shrink: 0;
  height: 20px;
`;

const Username = styled.span`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

function UserAvatar() {
  return (
    <Container>
      <AvatarImage role="img" aria-label="User avatar" />
      <Username>홍길동</Username>
    </Container>
  );
}

export default UserAvatar;

"use client";
import * as React from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";

const AvatarCard = () => {
  return (
    <CardContainer>
      <UserAvatar
        avatarUrl="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/76ca8b6a372626ae083cb621a3e4f6fff55b4ea3?placeholderIfAbsent=true"
        name="아무개"
        role="강사"
        badgeUrl="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/b2be8d66f06097ae770ec88ec2bcdef80cec838a?placeholderIfAbsent=true"
      />
    </CardContainer>
  );
};

const CardContainer = styled.article`
  max-width: 355px;
  padding-top: 8px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  white-space: nowrap;
`;

export default AvatarCard;

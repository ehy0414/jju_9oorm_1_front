"use client";
import * as React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";

const UserAvatar = ({ avatarUrl, name, role, badgeUrl }) => {
  return (
    <AvatarContainer>
      <ContentWrapper>
        <AvatarSection>
          <AvatarImage src={avatarUrl} alt={`${name}'s avatar`} />
          <UserInfo name={name} role={role} badgeUrl={badgeUrl} />
        </AvatarSection>
      </ContentWrapper>
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  display: flex;
  margin-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  align-items: center;
  gap: 12px;
  justify-content: start;
`;

const ContentWrapper = styled.div`
  align-self: stretch;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

const AvatarSection = styled.figure`
  display: flex;
  width: 100%;
  padding-right: 66px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: stretch;
  gap: 12px;
  margin: 0;
`;

const AvatarImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  border-radius: 40px;
  flex-shrink: 0;
`;

export default UserAvatar;

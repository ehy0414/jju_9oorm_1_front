"use client";
import * as React from "react";
import styled from "styled-components";

const UserInfo = ({ name, role, badgeUrl }) => {
  return (
    <InfoContainer>
      <NameWrapper>
        <UserName>{name}</UserName>
        <BadgeImage src={badgeUrl} alt="User badge" />
      </NameWrapper>
      <UserRole>{role}</UserRole>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  justify-content: space-between;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
`;

const BadgeImage = styled.img`
  aspect-ratio: 6.45;
  object-fit: contain;
  object-position: center;
  width: 58px;
  align-self: start;
  margin-top: 6px;
  flex-shrink: 0;
`;

const UserRole = styled.p`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  align-self: start;
  margin-top: 6px;
  margin-bottom: 0;
`;

export default UserInfo;

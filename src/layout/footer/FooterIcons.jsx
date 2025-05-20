"use client";
import * as React from "react";
import styled from "styled-components";

const NavItemWrapper = styled.button`
  display: flex;
  height: 59px;
  padding: 4px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  flex: 1 0 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const NavIcon = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const NavLabel = styled.span`
  height: 14px;
  flex-shrink: 0;
  align-self: stretch;
  overflow: hidden;
  color: #000;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
`;

const FooterIcons = ({ icon, label }) => {
  return (
    <NavItemWrapper>
      <NavIcon src={icon} alt="" />
      <NavLabel>{label}</NavLabel>
    </NavItemWrapper>
  );
};

export default FooterIcons;

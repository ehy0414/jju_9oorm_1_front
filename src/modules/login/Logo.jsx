import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return (
    <>
        <LogoImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de209b21ef6d538e05dcb6c92fb352977eb072bb"
        alt="Logo"
        />
        <BrandImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/149997c5ba182657fb2f14da35daeae8d3a421ba"
        alt="Brand Text"
        />
    </>
  );
};

const LogoImage = styled.img`
  width: 86px;
  height: 86px;
  margin-top: 189px;
`;

const BrandImage = styled.img`
  width: 286px;
  height: 44px;
`;

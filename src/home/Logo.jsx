import React from "react";
import styled from "styled-components";

const LogoContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 34px;
`;

const LogoIcon = styled.img`
  width: 55px;
  height: 55px;
`;

const LogoText = styled.img`
  width: 182px;
  height: 28px;
`;

export function Logo() {
  return (
    <LogoContainer>
      <LogoIcon
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdccbf98733bef21c7d4449ff8735884c6eaa5bf"
        alt="Logo Icon"
      />
      <LogoText
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9149874d7172f690586c8e325bc7d61ec9aad0"
        alt="Logo Text"
      />
    </LogoContainer>
  );
}

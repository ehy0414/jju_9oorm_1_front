import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "./OAuth";
import kakao_login from "../assets/kakao_login.png";

export const KakaoLogin = () => {
  return (
    <KakaoLink href={KAKAO_AUTH_URL} className="kakaobtn">
                <KakaoImg src={kakao_login} />
    </KakaoLink>
  );
};

const KakaoLink = styled.a`
`;

const KakaoImg = styled.img `
    width: 183px;
    height: 45px;
`;

const ButtonImage = styled.img`
  width: 183px;
  height: 45px;
`;

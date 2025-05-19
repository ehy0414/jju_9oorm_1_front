"use client";
import * as React from "react";
import styled from "styled-components";
import { Logo } from "../modules/login/Logo";
import { LoginBadge } from "../modules/login/LoginBadge";
import { KakaoLogin } from "../modules/login/KakaoLogin";


const LoginPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <Logo />
        <SignupSection>
          <LoginBadge />
          <KakaoLogin />
        </SignupSection>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 752px;
  padding-bottom: 62px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.13);
  align-items: center;
  gap: 12px;
  background-color: #fff;

  @media (max-width: 640px) {
    width: 376px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

const SignupSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 13px;
`;

export default LoginPage;

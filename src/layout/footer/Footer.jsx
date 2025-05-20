"use client";
import * as React from "react";
import styled from "styled-components";
import FooterIcons from "./FooterIcons";

const NavigationWrapper = styled.nav`
  bottom: 0;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
  width: 360px;
  background-color: #fff;
  position: fixed;
`;

const Footer = () => {
  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ea1ca330bbf0e04b9c5f803165a980ebd7ae8a7", label: "홈" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae22dfb0ef912a2912b0d2dca7fe46f985e0d83b", label: "내 클래스" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6dca7b04b54320821c7babf42e587b749b144156", label: "알림" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd38b42285c79b33d2ce88b0af7b9fb7323a7a8e", label: "프로필" }
  ];

  return (
    <NavigationWrapper>
      {navItems.map((item, index) => (
        <FooterIcons
          key={index}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </NavigationWrapper>
  );
};

export default Footer;

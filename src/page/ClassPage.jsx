"use client";
import styled from "styled-components";
import { Logo } from "../modules/home/Logo";
import { SearchSection } from "../modules/home/SearchSection";
import { ImageBanner } from "../modules/home/ImageBanner";
import Footer from "../layout/footer/Footer";
import ClassHeader from "../modules/header/ClassHeader";

const SearchContainer = styled.main`
    width: 360px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.13);
    font-family: "Roboto", sans-serif;
    overflow: hidden;
`;

function ClassPage() {

  return (
    <SearchContainer>
      <ClassHeader />
      <ImageBanner />
      <Footer />
    </SearchContainer>
  );
}

export default ClassPage;



"use client";
import styled from "styled-components";
import { Logo } from "../modules/home/Logo";
import { SearchSection } from "../modules/home/SearchSection";
import { ImageBanner } from "../modules/home/ImageBanner";
import CategoryList from "../modules/home/category/CategoryList";
import ClassList from "../modules/home/class/ClassList";


const SearchContainer = styled.main`
    width: 360px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.13);
    font-family: "Roboto", sans-serif;
    @media (max-width: 991px) {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }
    @media (max-width: 640px) {
        width: 100%;
        padding: 12px;
    }
`;

function HomePage() {
  return (
    <SearchContainer>
      <Logo />
      <SearchSection />
      <ImageBanner />
      <CategoryList/>
      <ClassList />
    </SearchContainer>
  );
}

export default HomePage;

"use client";
import styled from "styled-components";
import { Logo } from "../modules/home/Logo";
import { SearchSection } from "../modules/home/SearchSection";
import { ImageBanner } from "../modules/home/ImageBanner";
import CategoryList from "../modules/home/category/CategoryList";
import ClassList from "../modules/home/class/ClassList";
import Footer from "../layout/footer/Footer";
import { BestReviewSection } from "../modules/home/review/BestReviewSection";


const SearchContainer = styled.main`
    width: 360px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.13);
    font-family: "Roboto", sans-serif;
    overflow: hidden;
`;

function HomePage() {
  return (
    <SearchContainer>
      <Logo />
      <SearchSection />
      <ImageBanner />
      <CategoryList/>
      <ClassList />
      <BestReviewSection />
      <Footer />
    </SearchContainer>
  );
}

export default HomePage;

"use client";
import styled from "styled-components";
import { Logo } from "../modules/home/Logo";
import { SearchSection } from "../modules/home/SearchSection";
import { ImageBanner } from "../modules/home/ImageBanner";
import CategoryList from "../modules/home/category/CategoryList";
import ClassList from "../modules/home/class/ClassList";
import Footer from "../layout/footer/Footer";
import { BestReviewSection } from "../modules/home/review/BestReviewSection";
import TextContent from "../modules/home/nowReview/TextContent";
import Post from "../modules/home/nowReview/Post";


const SearchContainer = styled.main`
    width: 360px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.13);
    font-family: "Roboto", sans-serif;
    overflow: hidden;
`;

const SectionWrapper = styled.div`
  margin: 24px 16px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const PostScrollContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;



function HomePage() {
  const dummyPosts = [1, 2, 3, 4]; //더미데이터

  return (
    <SearchContainer>
      <Logo />
      <SearchSection />
      <ImageBanner />
      <CategoryList/>
      <ClassList />
      <BestReviewSection />

      <SectionWrapper>
        <SectionTitle>오늘의 후기</SectionTitle>
        <PostScrollContainer>
          {dummyPosts.slice(0, 4).map((item, index) => (
            <Post key={index} />
          ))}
        </PostScrollContainer>
      </SectionWrapper>
      
      <Footer />
    </SearchContainer>
  );
}

export default HomePage;



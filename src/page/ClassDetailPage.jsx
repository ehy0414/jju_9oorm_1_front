"use client";
import styled from "styled-components";
import { ImageBanner } from "../modules/home/ImageBanner";
import Footer from "../layout/footer/Footer";
import ClassHeader from "../modules/header/ClassHeader";
import AvatarCard from "../modules/classDetail/avatar/AvatarCard";

const SearchContainer = styled.main`
    width: 360px;
    height: 100%;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.13);
    font-family: "Roboto", sans-serif;
    overflow: hidden;
`;


function ClassDetailPage() {
    const dummyPosts = [1, 2, 3, 4]; //더미데이터

  return (
    <SearchContainer>
        <ClassHeader title={"클래스 상세"}/>
        <ImageBanner />
        <AvatarCard />
        <Footer />
    </SearchContainer>
  );
}

export default ClassDetailPage;



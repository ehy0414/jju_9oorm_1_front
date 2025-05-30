"use client";
import * as React from "react";
import styled from "styled-components";
import ImageSection from "./ImageSection";
import TextContent from "./TextContent";

const PostArticle = styled.article`
  border-radius: 6px;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 1px;
  min-width: 164px;
  overflow: hidden;
`;

function Post() {
  return (
    <PostArticle>
      <ImageSection />
      <TextContent />
    </PostArticle>
  );
}

export default Post;

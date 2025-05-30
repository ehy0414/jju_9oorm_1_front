"use client";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ClassCard from "./ClassCard";
import cake from "../images/cake.png";
import video from "../images/video.png";
import uiux from "../images/uiux.png";
import painting from "../images/painting.png";

const ListSection = styled.section`
  display: flex;
  max-width: 94%;
  padding-right: 12px;
  padding-left: 12px;
  flex-direction: column;
  overflow: hidden;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 1);
`;

const SectionTitle = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  justify-content: start;
`;

const TitleText = styled.h3`
  flex: 1 1 0%;
  min-width: 240px;
  margin: auto 0;
`;

const CardsRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  margin-top: 12px;
  padding-bottom: 8px;
  cursor: grab;
  user-select: none;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

const ClassList = () => {
  const rowRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const row = rowRef.current;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      row.style.cursor = "grabbing";
      startX.current = e.pageX - row.offsetLeft;
      scrollLeft.current = row.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX.current) * 1; // 속도 조절
      row.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      row.style.cursor = "grab";
    };

    row.addEventListener("mousedown", handleMouseDown);
    row.addEventListener("mousemove", handleMouseMove);
    row.addEventListener("mouseleave", handleMouseUp);
    row.addEventListener("mouseup", handleMouseUp);

    return () => {
      row.removeEventListener("mousedown", handleMouseDown);
      row.removeEventListener("mousemove", handleMouseMove);
      row.removeEventListener("mouseleave", handleMouseUp);
      row.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <ListSection>
      <SectionTitle>
        <TitleText>클래스 추천</TitleText>
      </SectionTitle>
      <CardsRow ref={rowRef}>
        <ClassCard tag="Art" imageUrl={painting} title="자유 페인팅" duration="3 hours" />
        <ClassCard tag="Cooking" imageUrl={cake} title="케이크 만들기" duration="4 hours" />
        <ClassCard tag="Tech" imageUrl={video} title="영상 편집" duration="5 hours" />
        <ClassCard tag="Design" imageUrl={uiux} title="UX디자인 입문" duration="2 hours" />

      </CardsRow>
    </ListSection>
  );
};

export default ClassList;

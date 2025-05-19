import React, { useState } from "react";
import styled from "styled-components";

const SearchWrapper = styled.section`
  margin-bottom: 32px;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const SearchInput = styled.input`
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  line-height: 20px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 270px;
  margin-left: 12px;
`;

const SearchIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 28px;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #000;
  border: none;
  cursor: pointer;
`;

const SearchDescription = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  line-height: 16px;
  margin-left: 12px;
`;

export function SearchSection() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // 👉 여기에 검색 로직 작성 (예: 라우팅 또는 API 호출)
    console.log("검색어:", searchText);
  };

  return (
    <SearchWrapper>
      <SearchHeader>
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px" }}>
          <SearchInput
            type="text"
            placeholder="클래스 검색"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchIconWrapper type="submit">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="search-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.136 14.9972C12.8155 16.1214 11.1038 16.7998 9.23366 16.7998C5.0547 16.7998 1.66699 13.4121 1.66699 9.23317C1.66699 5.05422 5.0547 1.6665 9.23366 1.6665C13.4126 1.6665 16.8003 5.05422 16.8003 9.23317C16.8003 11.092 16.1301 12.7943 15.018 14.1115L18.65 17.7435L17.7662 18.6274L14.136 14.9972ZM15.5503 9.23317C15.5503 12.7218 12.7223 15.5498 9.23366 15.5498C5.74506 15.5498 2.91699 12.7218 2.91699 9.23317C2.91699 5.74457 5.74506 2.9165 9.23366 2.9165C12.7223 2.9165 15.5503 5.74457 15.5503 9.23317Z"
                fill="white"
              />
            </svg>
          </SearchIconWrapper>
        </form>
      </SearchHeader>
      <SearchDescription>관심있는 클래스를 검색해보세요!</SearchDescription>
    </SearchWrapper>
  );
}

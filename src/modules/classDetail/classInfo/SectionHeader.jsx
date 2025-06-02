import styled from "styled-components";

const SectionHeader = () => {
  return (
    <HeaderWrapper>
      <TextContent>
        <MainTitle>클래스 소개</MainTitle>
        <SubTitle>이 클래스에서 배우게 될 것</SubTitle>
      </TextContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  padding-top: 16px;
  align-items: center;
  gap: 12px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  line-height: 1;
  justify-content: start;
`;

const TextContent = styled.div`
  align-self: stretch;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

const MainTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 5px;
`;

const SubTitle = styled.p`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`;

export default SectionHeader;

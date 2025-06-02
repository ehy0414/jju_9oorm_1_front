import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import ClassCard from "./ClassCard";

const ClassIntroduction = () => {
  return (
    <Container>
      <SectionHeader />
      <ClassCard />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  max-width: 355px;
  padding-left: 12px;
  padding-right: 12px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export default ClassIntroduction;

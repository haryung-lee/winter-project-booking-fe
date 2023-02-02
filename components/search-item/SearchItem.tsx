import React from "react";
import styled from "@emotion/styled";

import theme from "styles/theme";

const SearchItem = () => {
  return (
    <Container>
      <Subject>UIUX 디자인</Subject>
      <Professor>이운형</Professor>
      <Description>
        <span>전공선택</span>
        <Department>디자인학과</Department>
      </Description>
    </Container>
  );
};

export default SearchItem;

const Container = styled.li`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: all 0.15s ease-in-out;
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.primary.grey300};
  }
  &:hover {
    background-color: ${theme.primary.grey200};
  }
`;

const Subject = styled.span`
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
`;

const Professor = styled.span`
  color: ${theme.primary.grey400};
  font-size: ${theme.fontSize.xs};
`;

const Description = styled.div`
  color: ${theme.primary.grey400};
  font-size: ${theme.fontSize.xs};
`;

const Department = styled.span`
  margin-left: 0.3rem;
`;

import React, { useState } from "react";
import styled from "@emotion/styled";

import theme from "styles/theme";
import SearchItem from "components/search-item";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Detail = () => {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("black");

  return (
    <div>
      <Main>
        <TopIcon>
          <ArrowBackIosIcon
            style={{
              fontSize: theme.fontSize.lg,
              color: theme.primary.grey400,
            }}
          />
          <SubjectTitle>UIUX 디자인/이운형</SubjectTitle>
        </TopIcon>
        <SearchList>
          {Array.from({ length: 1 }, (_, i) => i).map((i) => (
            <SearchItem key={i} />
          ))}
        </SearchList>
        <SubTitle>
          <TotalBook>주교재 및 참고서적</TotalBook>
          <MainBook
            style={{
              color: color,
            }}
            onClick={() => {
              color === "grey" ? setColor("black") : setColor("grey");
            }}
          >
            주교재
          </MainBook>
          <RefBook>참고서적</RefBook>
        </SubTitle>
        <Details>
          <BookPicture>
            <BookmarkBorderIcon
              style={{
                marginTop: 20,
                marginLeft: 280,
                color: theme.primary.iris,
              }}
            />
          </BookPicture>
          <Author></Author>
          <Publisher></Publisher>
          <PubDate></PubDate>
          <DataType></DataType>
          <KeepInfo></KeepInfo>
        </Details>
      </Main>
    </div>
  );
};

export default Detail;

const Author = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`;

const Publisher = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`;

const PubDate = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`;

const DataType = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`;

const KeepInfo = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};
  border-bottom: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`;

const BookPicture = styled.div`
  width: 280px;
  height: 240px;
`;

const Details = styled.li`
  margin-top: 0.6rem;
  width: 20.5rem;
  height: 29rem;
  border: 2px solid ${theme.primary.white};
  background: #ffffff;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const TopIcon = styled.div`
  display: flex;
`;

const TotalBook = styled.div`
  font-size: ${theme.fontSize.xs};
`;

const MainBook = styled.button`
  margin-left: auto;
  margin-right: 0.6rem;
  font-size: ${theme.fontSize.xxs};
`;

const RefBook = styled.button`
  font-size: ${theme.fontSize.xxs};
`;

const SubTitle = styled.div`
  display: flex;
  padding-top: 0.8rem;
`;

const SubjectTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: ${theme.fontSize.sm};
`;

const Main = styled.main`
  max-width: 360px;
  background-color: ${theme.primary.white};
  padding: 0 1rem;
  margin: 4.5rem auto;
`;

const SearchList = styled.ul`
  border: 1px solid ${theme.primary.grey300};
  border-radius: 0.3rem;
  margin-top: 1.5rem;
`;

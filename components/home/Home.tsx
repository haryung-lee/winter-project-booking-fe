import React, { useState } from "react";
import styled from "@emotion/styled";
import { SelectChangeEvent } from "@mui/material";
import Image from "next/image";

import theme from "styles/theme";
import DropDown from "components/common/drop-down";
import SearchItem from "components/search-item";

const Home = () => {
  const [option, setOption] = useState("교수명");
  const [searchInput, setSearchInput] = useState({
    value: "",
    isFocus: false,
  });

  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  const handleChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setSearchInput({ ...searchInput, value: event.target.value });
  };

  const handleBlurSearchInput = () => {
    setSearchInput({ ...searchInput, isFocus: false });
  };

  const handleFocusSearchInput = () => {
    setSearchInput({ ...searchInput, isFocus: true });
  };

  const handleClickClearButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setSearchInput({ ...searchInput, value: "" });
  };

  return (
    <Container>
      <Main>
        <Banner>
          전공책을
          <br />
          찾아보세요 👀
          <Image
            priority={true}
            src="/images/banner.png"
            alt="banner"
            width="200"
            height="200"
            style={{
              position: "absolute",
              right: "-1rem",
              bottom: "-1rem",
            }}
          />
        </Banner>
        <SearchContainer>
          <DropDown
            value={option}
            handleChange={handleChangeOption}
            items={[
              { key: "교수명", value: "교수명" },
              { key: "과목명", value: "과목명" },
              { key: "학과명", value: "학과명" },
            ]}
          />
          <InputContainer isFocus={searchInput.isFocus}>
            <SearchInput
              value={searchInput.value}
              onChange={handleChangeSearchInput}
              onBlur={handleBlurSearchInput}
              onFocus={handleFocusSearchInput}
              placeholder="검색어를 입력하세요"
            />
            {!!searchInput.value ? (
              <Button
                className="material-symbols-outlined md-20"
                type="button"
                onClick={handleClickClearButton}
              >
                close
              </Button>
            ) : (
              <Button className="material-symbols-outlined md-20">
                search
              </Button>
            )}
          </InputContainer>
        </SearchContainer>
        <SearchList>
          {Array.from({ length: 5 }, (_, i) => i).map((i) => (
            <SearchItem key={i} />
          ))}
        </SearchList>
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  flex-grow: 1;
`;

const Main = styled.main`
  max-width: 360px;
  background-color: ${theme.primary.white};
  padding: 0 1rem;
  margin: 2rem auto;
`;

const Banner = styled.div`
  position: relative;
  height: 11rem;
  background-color: ${theme.primary.grey200};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${theme.primary.grey400};
  padding: 1rem;
  border-radius: 0.3rem;
  font-size: ${theme.fontSize.lg};
  font-weight: 600;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    gap: 0.4rem;
  }
`;

const InputContainer = styled.div<{ isFocus: boolean }>`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.primary.grey100};
  border-radius: 0.3rem;
  padding: 0.375rem 0.4rem 0.375rem 0.8rem;
  flex-grow: 1;
  box-sizing: border-box;

  ${({ isFocus }) =>
    isFocus &&
    `border: 2px solid ${theme.primary.blue}; 
    padding: 0.375rem 0.3rem 0.375rem 0.7rem;`}
  &:hover {
    background-color: ${theme.primary.grey200};
    input {
      background-color: ${theme.primary.grey200};
    }
  }
`;

const SearchInput = styled.input`
  height: 100%;
  font-size: ${theme.fontSize.sm};
  padding: 0 0.1rem;
  color: ${theme.text.darkGrey};
  background-color: ${theme.primary.grey100};
  width: 100%;
`;

const Button = styled.button`
  color: ${theme.text.darkGrey};
`;

const SearchList = styled.ul`
  border: 1px solid ${theme.primary.grey300};
  border-radius: 5px;
  margin-top: 1.5rem;
`;

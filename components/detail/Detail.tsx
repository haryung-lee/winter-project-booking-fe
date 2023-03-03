import React, { useState } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import Image from 'next/image'

import theme from 'styles/theme'
import SearchItem from 'components/search-item'

const Detail = () => {
  const [mainclicked, setMainClicked] = useState(false)
  const [refclicked, setRefClicked] = useState(false)
  const [bookmark, setBookmark] = useState(false)

  const handleMainBook = () => {
    setMainClicked(!mainclicked)
    setRefClicked(false)
    console.log(mainclicked)
  }

  const handleRefBook = () => {
    setRefClicked(!refclicked)
    setMainClicked(false)
    console.log(refclicked)
  }

  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  return (
    <>
      <Head>
        {bookmark == true ? (
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
          />
        ) : (
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
        )}
      </Head>
      <Main>
        <TopIcon>
          <BackIcon className="material-symbols-outlined md-18">
            arrow_back_ios
          </BackIcon>
          <SubjectTitle>UIUX 디자인/이운형</SubjectTitle>
        </TopIcon>
        <SearchList>
          {/* {Array.from({ length:1 }, (_, i) => i).map((i) => (
                <SearchItem key={i} />
            ))} */}
        </SearchList>
        <SubTitle>
          <TotalBook>주교재 및 참고서적</TotalBook>
          <MainBook onClick={handleMainBook}>주교재</MainBook>
          <RefBook onClick={handleRefBook}>참고서적</RefBook>
        </SubTitle>
        <Details>
          {mainclicked && (
            <>
              <BookPicture>
                <BookMark
                  onClick={handleBookmark}
                  className="material-symbols-outlined md-24"
                >
                  bookmark
                </BookMark>
                <Image
                  priority={true}
                  src="/images/uiuxDesign.png"
                  alt="banner"
                  width="120"
                  height="187"
                  style={{
                    position: 'relative',
                    marginLeft: '6rem',
                    marginTop: '0rem',
                  }}
                />
              </BookPicture>
              <Author></Author>
              <Publisher></Publisher>
              <PubDate></PubDate>
              <DataType></DataType>
              <KeepInfo></KeepInfo>
            </>
          )}
          {refclicked && (
            <>
              <BookPicture>
                <BookMark
                  onClick={handleBookmark}
                  className="material-symbols-outlined md-24"
                >
                  bookmark
                </BookMark>
              </BookPicture>
              <Author></Author>
              <Publisher></Publisher>
              <PubDate></PubDate>
              <DataType></DataType>
              <KeepInfo></KeepInfo>
            </>
          )}
        </Details>
      </Main>
    </>
  )
}

export default Detail

const BookMark = styled.button`
  margin-top: 15px;
  margin-left: 280px;
  color: ${theme.primary.iris};
`

const BackIcon = styled.button`
  color: ${theme.primary.grey400};

  transition: 0.2s ease-in-out;

  &:hover {
    color: ${theme.primary.grey300};
  }
`

const Author = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`

const Publisher = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`

const PubDate = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`

const DataType = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`

const KeepInfo = styled.div`
  margin: auto;
  width: 18.7rem;
  height: 2.5rem;
  border-top: 1px solid ${theme.primary.grey300};
  border-bottom: 1px solid ${theme.primary.grey300};

  &:hover {
    background-color: ${theme.primary.grey200};
  }
`

const BookPicture = styled.div`
  width: 17.5rem;
  height: 15.5rem;
  display: relative;
`

const Details = styled.li`
  margin-top: 0.6rem;
  width: 20.5rem;
  height: 29rem;
  border: 2px solid ${theme.primary.white};
  background: #ffffff;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`

const TopIcon = styled.div`
  display: flex;
`

const TotalBook = styled.div`
  font-size: ${theme.fontSize.xs};
`

const MainBook = styled.button`
  margin-left: auto;
  margin-right: 0.6rem;
  font-size: ${theme.fontSize.xxs};

  transition: 0.2s ease-in-out;

  &:hover {
    color: ${theme.primary.grey300};
  }
`

const RefBook = styled.button`
  font-size: ${theme.fontSize.xxs};

  transition: 0.2s ease-in-out;

  &:hover {
    color: ${theme.primary.grey300};
  }
`

const SubTitle = styled.div`
  display: flex;
  padding-top: 0.8rem;
`

const SubjectTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: ${theme.fontSize.sm};
`

const Main = styled.main`
  max-width: 360px;
  background-color: ${theme.primary.white};
  padding: 0 1rem;
  margin: 4.5rem auto;
`

const SearchList = styled.ul`
  border: 1px solid ${theme.primary.grey300};
  border-radius: 0.3rem;
  margin-top: 1.5rem;
`

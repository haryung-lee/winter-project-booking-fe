import React, { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useRouter } from 'next/router'

import theme from 'styles/theme'
import { useSubjectIdQuery } from '@hooks/query/search/useSubjectQuery'

const Detail = () => {
  const router = useRouter()
  const { query: detail } = router

  const [bookType, setMainClicked] = useState('main')
  const { data, isLoading } = useSubjectIdQuery({ id: detail.id as any })
  const [bookmark, setBookmark] = useState(false)

  const handleMainBook = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setMainClicked('main')
  }

  const handleRefBook = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setMainClicked('ref')
  }

  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.back()
  }

  return (
    <Main>
      <TopIcon>
        <BackIcon
          className="material-symbols-outlined md-20"
          onClick={handleBack}
        >
          arrow_back_ios
        </BackIcon>
        <SubjectTitle>{`${data?.name} / ${data?.professor}`}</SubjectTitle>
      </TopIcon>
      <Item>
        <Subject>{data?.name}</Subject>
        <Professor>{data?.professor}</Professor>
        <Description>
          <span>{data?.subjectType}</span>
          <Department>{data?.department}</Department>
        </Description>
      </Item>
      <SubTitle>
        <span>주교재 및 참고서적</span>
        <MainBook onClick={handleMainBook}>주교재</MainBook>
        <RefBook onClick={handleRefBook}>참고서적</RefBook>
      </SubTitle>
      <Details>
        {isLoading ? (
          <>로딩중</>
        ) : (
          data?.books?.map((book) => {
            return (
              <div>
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
                {book.id}
              </div>
            )
          })
        )}
      </Details>
      {/* {bookType === 'main' && (
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
        {bookType === 'ref' && (
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
      </Details> */}
    </Main>
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
  align-items: center;
`

const MainBook = styled.button`
  margin-left: auto;
  margin-right: 0.6rem;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${theme.primary.grey300};
  }
`

const RefBook = styled.button`
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${theme.primary.grey300};
  }
`

const SubTitle = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: ${theme.fontSize.sm};
`

const SubjectTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: ${theme.fontSize.sm};
`

const Main = styled.main`
  background-color: ${theme.primary.white};
  padding: 0 1rem;
  margin: 2rem auto;
  flex-grow: 1;
`

const Item = styled.div`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: all 0.15s ease-in-out;
  border: 2px solid ${theme.primary.blue100};
  border-radius: 5px;
  margin-top: 1rem;
`

const Subject = styled.span`
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
`

const Professor = styled.span`
  color: ${theme.primary.grey400};
  font-size: ${theme.fontSize.xs};
`

const Description = styled.div`
  color: ${theme.primary.grey400};
  font-size: ${theme.fontSize.xs};
`

const Department = styled.span`
  margin-left: 0.3rem;
`

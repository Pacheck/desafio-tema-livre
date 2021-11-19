import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'

const Dowload = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          mains{
            title
            subtitle
            list
            background{
              url
            }
          }
        }
    }`
  )

  const {
    background,
    subtitle,
    list,
    title
  } = data.alldata.mains[0]

  return (
    <S.Container ImgGrid={background.url} >
      <S.BoxTitle>
        <S.TitleBox>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </S.TitleBox>
        <S.BoxList>
          <S.List>{list[0]}</S.List>
          <S.List>{list[1]}</S.List>
          <S.List>{list[2]}</S.List>
          <S.List>{list[3]}</S.List>
        </S.BoxList>
      </S.BoxTitle>
    </S.Container>
  );
}
export default Dowload;
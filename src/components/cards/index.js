import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'


const Card = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          clients{
            title
            imgGirl{
              url
            }
            imgPlay{
              url
            }
            subtitle
          }
        }
    }`
    )

  const {
    title,
    imgGirl,
    imgPlay,
    subtitle
  } = data.alldata.clients[0]

  return (
    <S.Container id = "taxi">
      <S.Boxtitle>
        <S.Title>{title}</S.Title>
      </S.Boxtitle>
      <S.BoxCard>
        <S.Card>
          <S.ImgPlay src={imgPlay.url}></S.ImgPlay>
          <S.ImgGril src={imgGirl[0].url} ></S.ImgGril>
          <S.TitleImg>{subtitle}</S.TitleImg>
        </S.Card>
        <S.Card>
          <S.ImgPlay src={imgPlay.url}></S.ImgPlay>
          <S.ImgGril src={imgGirl[1].url} ></S.ImgGril>
          <S.TitleImg>{subtitle}</S.TitleImg>
        </S.Card>
      </S.BoxCard>
    </S.Container>
  );
}
export default Card;
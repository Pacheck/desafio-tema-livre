import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'


const Card = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          cards{
            imgDog{
              url
            }
            title
            titleBtn
          }
        }
    }`
    )

  const {
    title,
    titleBtn,
    imgDog
  } = data.alldata.cards[0]

  return (
    <S.Container id = "taxi">
      <S.BoxCard>
        <S.Card>
          {/* <S.ImgDog src={imgcar.url} ></S.ImgDog> */}
          <S.ImgDog src={imgDog[0].url} ></S.ImgDog>
          <S.TitleDog>{title[0]}</S.TitleDog>
          <S.ParagraphDog>{titleBtn}</S.ParagraphDog>
        </S.Card>
        <S.Card>
          <S.ImgDog src={imgDog[1].url} ></S.ImgDog>
          <S.TitleDog>{title[1]}</S.TitleDog>
          <S.ParagraphDog>{titleBtn}</S.ParagraphDog>
        </S.Card>
        <S.Card>
          <S.ImgDog src={imgDog[2].url}></S.ImgDog>
          <S.TitleDog>{title[2]}</S.TitleDog>
          <S.ParagraphDog>{titleBtn}</S.ParagraphDog>
        </S.Card>
        <S.Card>
          <S.ImgDog src={imgDog[3].url}></S.ImgDog>
          <S.TitleDog>{title[3]}</S.TitleDog>
          <S.ParagraphDog>{titleBtn}</S.ParagraphDog>
        </S.Card>
      </S.BoxCard>
    </S.Container>
  );
}
export default Card;
import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'


const Card = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          headers{
            title
            subtitle
            paragraph
            button
            background{
              url
            }
          }
        }
    }`
    )

  const {
    title,
    subtitle,
    paragraph,
    button,
    background
  } = data.alldata.headers[0]

  return (
    <S.Container ImgGrid={background.url}>
      <S.Boxtitle>
        <S.Title>{title}</S.Title>
        <S.TitleD>{subtitle}</S.TitleD>
        <S.Subtitle>{paragraph}</S.Subtitle>
      </S.Boxtitle>
      <S.BoxButton>
        <S.Button>{button}</S.Button>
      </S.BoxButton>
    </S.Container>
  );
}
export default Card;
import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'


const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            alldata{
                footers{
                    imgLogo{
                      url
                    }
                    title
                    listLocation
                    listDay
                    listQuick
                    listSocial
                    allRights
                    layout
                }
            }
        }`
        )
        // insta{url}
        
    const {
        imgLogo,
        title,
        listLocation,
        listDay,
        listQuick,
        listSocial,
        allRights,
        layout
    } = data.alldata.footers[0]

    
    return (
        <div>
            <S.Container id="contact">
                <S.BoxContainer>
                    <img src={imgLogo.url} ></img>
                    <S.Location>
                        <S.Title>{title[0]}</S.Title>
                        <S.Paragraph>{listLocation[0]}</S.Paragraph>
                        <S.Paragraph>{listLocation[1]}</S.Paragraph>
                        <S.Paragraph>{listLocation[2]}</S.Paragraph>
                        <S.Paragraph>{listLocation[3]}</S.Paragraph>
                        <S.Paragraph>{listLocation[4]}</S.Paragraph>
                    </S.Location>
                    <S.Day>
                        <S.Title>{title[1]}</S.Title>
                        <S.List>
                            <S.Item>{listDay[0]}</S.Item>
                            <S.Item>{listDay[1]}</S.Item>
                        </S.List>
                    </S.Day>
                    <S.Quick>
                        <S.Title>{title[2]}</S.Title>
                        <S.ItemS>{listQuick[0]}</S.ItemS>
                        <S.ItemS>{listQuick[1]}</S.ItemS>
                        <S.ItemS>{listQuick[2]}</S.ItemS>
                        <S.ItemS>{listQuick[3]}</S.ItemS>
                        <S.ItemS>{listQuick[4]}</S.ItemS>
                    </S.Quick>
                    <S.Social>
                        <S.Title>{title[3]}</S.Title>
                        <S.ItemS>{listSocial[0]}</S.ItemS>
                        <S.ItemS>{listSocial[1]}</S.ItemS>
                        <S.ItemS>{listSocial[2]}</S.ItemS>
                        <S.ItemS>{listSocial[3]}</S.ItemS>
                        {/* <S.ItemS> <S.Icon src={insta.url} /> {itemfollow[4]}</S.ItemS> */}
                    </S.Social>
                </S.BoxContainer>
            </S.Container>
            <S.BoxSubtitle>
                <S.Subtitle>{allRights}</S.Subtitle>
            </S.BoxSubtitle>
            <S.BoxSubtitleTwo>
                <S.SubtitleTwo>{layout}</S.SubtitleTwo>
            </S.BoxSubtitleTwo>
        </div>
    );
}

export default Footer;
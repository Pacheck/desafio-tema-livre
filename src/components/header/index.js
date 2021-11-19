import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style"; 

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        alldata{
            headers{
                logo{
                  url
                }
                home
                about
                services
                reservation
                contact
                number
            }
        }
    }`)
    const{
        logo,
        home,
        about,
        services,
        reservation,
        contact,
        number
    } = data.alldata.headers[0]
    return (
        <S.Container>
            <S.Headerbox>
            <S.Containernav>
                <S.Logo>
                    <img src={logo.url}/>
                </S.Logo>
            <S.Itembtn>{home}</S.Itembtn>
            <S.Itembtn>{about}</S.Itembtn>
            <S.Itembtn>{services}</S.Itembtn>
            <S.Itembtn>{reservation}</S.Itembtn>
            <S.Itembtn>{contact}</S.Itembtn>
            <S.Itembtn>{number}</S.Itembtn>
            </S.Containernav>
            </S.Headerbox>
        </S.Container>
    );
}
export default Header;
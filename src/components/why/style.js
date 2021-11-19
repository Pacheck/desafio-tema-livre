import styled from "styled-components";

export const Container = styled.section`
  background-image: url(${props => props.ImgGrid});
  background-repeat: no-repeat;
  width: 100%;
  height: 652px;
`

export const BoxTitle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 652px;
  height: 130px;
`

export const TitleBox = styled.div`
  position: relative;
  top: 108px;
  left: 216px;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: normal;
  color: #373737;
`

export const SubTitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
  color: #373737;
  margin-top: 30px;
`

export const BoxList = styled.ul`
  /* list-style: #F8CA11; */
  position: relative;
  left: 113px;
  top: 165px;
`

export const List = styled.li`
  font-size: 22px;
  color: #373737;
  margin-bottom: 0.6rem;
  cursor: pointer;
  &:hover{
    color: #F8CA11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1normal none running fdBcwW;
  }
`
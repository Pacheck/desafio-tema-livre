import styled from "styled-components";

export const Container = styled.section`
  background-image: url(${props => props.ImgGrid});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 865px;
  background-color: rgba(245, 210, 210);
  margin-top: 107px;
`

export const Boxtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  margin-top: 140px;
  margin-left: 200px;
`

export const Title = styled.h2`
  font-size: 56px;
  color: #6D4545;
`

export const TitleD = styled.h2`
  font-size: 48px;
  color: #6D4545;
`

export const Subtitle = styled.p`
  font-size: 24px;
  width: 636px;
  color: #6D4545;
`

export const BoxButton = styled.div`
  font-size: 24px;
  width: 636px;
  color: #6D4545;
`

export const Button = styled.button`
  font-size: 32px;
  cursor: pointer;
  border: none;
  width: 324px;
  height: 78px;
  color: #ffffff;
  background-color: #FEAF02;
  margin-top: 28px;
  margin-left: 200px;
`

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #3C4049;
  img{
    margin-right: 50px;
    margin-bottom: 40px;
  }
`

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
`

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  width: 16%;
  height: 288px;
  padding: 0 15px;
  margin-right: 20px;
`
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: #ebebeb;
  text-align: left;
  width: 250px;
`

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  height: 288px;
  width: 14%;
  @media (max-width: 992px){
    padding: 0;
    width: 50%;
  }
`
export const List = styled.ul`
  list-style-type: none;
`

export const Item = styled.li`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 0.6rem;
  cursor: pointer;
  &:hover{
    color: #F8CA11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1normal none running fdBcwW;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 288px;
  width: 13%;
`

export const ItemS = styled.li`
  display: flex;
  color: #FFFFFF;
  font-size: 16px;
  margin-bottom: 9px;
  cursor: pointer;
  &:hover{
  color: #F8CA11;
  transition: all 0.3s ease 0s;
  animation: 5s ease 0s 1normal none running fdBcwW;
  }
`

export const Quick = styled.div`
  height: 288px;
  width: 255px;
`

export const Icon = styled.img`
  margin-right: 10px;
`

export const Button = styled.div`
  width: 153px;
  height: 48px;
  border: 0;
  color: #ebebeb;
  background-color: #FECF3D;
  text-align: center;
  padding: 13px 0px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
  border-radius: 5px;
  cursor: pointer;
`

export const Input = styled.input`
  width: 100%;
  color: #eceaea;
  font-size: 16px;
  height: 48px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  border: 0;
  @media (max-width: 992px){
    width: 100%;
  }
`

export const Title = styled.h3`
  padding: 25px 0;
  font-size: 28px;
  color: #ebebeb;
  font-weight: bold;
`

export const BoxSubtitle = styled.div`
  height: 85px;
  background-color: #2E2F34;
  display: flex;
  align-items: center;
`
export const Subtitle = styled.p`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-left: 250px;
`

export const BoxSubtitleTwo = styled.div`
  color: #707070;
  background-color: #222326;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubtitleTwo = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 20px;
`
import styled from 'styled-components'

export const Headerbox = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  background-color: #FFFFFF;
  z-index: 1;
  height: 107px;
`

export const Containernav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`

export const Logo = styled.div`
width: 30rem;
`

export const Itembtn = styled.a`
  text-decoration: none;
  font-size: 17px;
  color: #373737;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
      color:#f8ca11;
      cursor: pointer;
  }
`

export const Container = styled.div`
  background-color: #1a1a1a;
  width: 100%; 
`
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
  height: 15vh;
  align-items: center;
  text-align: center;
  img{
    height: 12vh;
  }
  nav{
    display: flex;
    flex-direction: column;
  }
   a{
      padding: 1px;
      color: #eaeaea;
      text-decoration: none;
    }
    a:hover{
      text-decoration: underline;
      filter: brightness(110)
    }

  @media (max-width: 400px) {
    &{
      flex-direction: column;
      align-items: center;
      padding-bottom: 7vh;
    }
    nav{
      display: flex;
      flex-direction: row;
      padding: 0;
    }
    a{
      padding: 1vw;
    }
    img {
      padding: 0;
      visibility: hidden;
    }
  }
`

export const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vh;
  align-items: center;
  text-align: center;
`

export const Footer = styled.footer`
  align-items: flex-end;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: auto;
`

export const LayoutComp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  h2{
    color: ${props => props.theme.randomC};
    filter: brightness(200%)
  }
`
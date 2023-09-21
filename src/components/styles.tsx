import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
  height: 15vh;
  align-items: center;
  h1{
    animation: Degrer 1.5s alternate;
  }
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
  margin-top: 3vh;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  text-align: center;
`
export const DivInfoWeather = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    h2{
    color: ${props => props.theme.randomC};
    filter: brightness(200%)
  }
  h4{
    padding: 1vh;
  }
`
type infoWeatherType = {
  textTemp: string;
}

export const LabelDigiteCidade = styled.label`
  font-weight: 600;
  padding: 1vh;
` 

export const InfoWeather = styled.div<infoWeatherType>`
  transform: scale(130%);
  align-items: center;
  padding-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  img{
    ${props => props.textTemp};
  }
  @keyframes rodando {
    0%{
      transform: rotate(180deg)
    }
    100%{
      transform: rotate(0)
    }
  }
`
export const FormWeather = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;  
  input, button{
    width: 20rem;
    padding: .3vh;
  }
  padding: 0 1vh 1vh 1vh;
`

export const UlForecast = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  li{
    list-style: none; 
    padding: 3.2vw;
  }
`

export const OlApis = styled.ol`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh;
  text-align: center;
  h3 {
    margin-bottom: 2vh;
  }
  li{
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #7676c9;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    padding: 1vh;
    button{
      margin-top: 1vh;
      width: 50%;
      padding: 0 5vw;
    }
  }
`

export const ButtonDivApis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
` 

export const ButtonStyled = styled.button`
  margin: 5vh 0;
  width: 30vw;
`

export const AnimaisDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AnimaisSection = styled.section`
  width: 50%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2{
    text-align: center;
  }
  img{
    width: 80%;
    height: 80%;
  }
`
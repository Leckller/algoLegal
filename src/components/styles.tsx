import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  height: 15vh;
  align-items: center;
  img{
    padding-right: 25vw;
    height: 12vh;
  }
  nav{
    padding-left: 24vw;
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
      align-items: center
    }
    nav{
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
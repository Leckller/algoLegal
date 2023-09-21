import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { randomColor } from './services/randomColor'
import { useState } from 'react'
import ApisRoute from './components/ApisRoute'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100vw;
    height: 100vh;
    background-color: #222;
    color: #eaeaea;
  }
  @keyframes Degrer {
    0% {
      transform: scale(1) rotate(0)
    }
    25% {
      transform: scale(1.2) rotate(20deg)
    }
    50% {
      transform: scale(1.6) rotate(0)
    } 
    75% {
      transform: scale(1.2) rotate(-20deg)
    }
    100% {
      transform: scale(1) rotate(0)
    }
  }
`
const theme = {
  randomC: () => randomColor(),
}

function App() {
  const [choseApi, setChoseApi] = useState(0)

  return (
    <>
    <ThemeProvider theme= {theme}>
    <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home choseApi={choseApi} setChoseApi={setChoseApi}/>}/>
          <Route path='/Apis' element={<ApisRoute setChoseApi={setChoseApi}/>}/>
          <Route path='/About' element={ <About/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App

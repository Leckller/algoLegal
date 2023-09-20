import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { randomColor } from './services/randomColor'
import { useState } from 'react'
import ApisRoute from './components/ApisRoute'
import AnimaisComp from './components/AnimaisComp'

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
`
const theme = {
  randomC: () => randomColor(),
}

function App() {
  const [choseApi, setChoseApi] = useState(2)

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

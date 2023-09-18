import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
import { createGlobalStyle } from 'styled-components'

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

function App() {

  return (
    <>
    <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Coffe/:id'/>
          <Route path='/About' element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

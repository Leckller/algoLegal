import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import About from './components/About'
import Home from './components/Home'
function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Coffe/:id'/>
          <Route path='/About' element={<About/>}/>
        </Route>
      </Routes>
  )
}

export default App

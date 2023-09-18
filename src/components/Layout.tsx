import { NavLink, Outlet } from "react-router-dom";
import { Header } from "./styles";
import ruy from '../assets/ruy.png'

function Layout () {
  return(
    <>
    <Header>
      <img src={ruy} alt="Funny img" />
      <h1>Muita Api!</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Coffe/:id'>Coffe</NavLink>
      </nav>
    </Header>
    <Outlet/>
    <footer>
      <p>Feat by Ruy</p>     
    </footer>
    </>
  )
}

export default Layout;
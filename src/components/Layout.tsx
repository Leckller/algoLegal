import { NavLink, Outlet } from "react-router-dom";
import { Footer, Header, LayoutComp } from "./styles";
import ruy from '../assets/ruy.png'

function Layout () {
  return(
    <LayoutComp>
    <Header>
      <img src={ruy} alt="Funny img" />
      <h1>M.A.I</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Apis'>Apis</NavLink>
      </nav>
    </Header>
    <Outlet/>
    <Footer>
      <p>Feat by Ruy</p>     
    </Footer>
    </LayoutComp>
  )
}

export default Layout;
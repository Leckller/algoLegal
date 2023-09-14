import { NavLink, Outlet } from "react-router-dom";
import styles from './layout.module.css'

function Layout () {
  return(
    <>
    <header className={styles.header}>
      <img src="" alt="coffe img" />
      <h1>Cafézinho!</h1>
      <nav className={styles.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Coffe/:id'>Coffe</NavLink>
        <NavLink to='/About'>About</NavLink>
      </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout;
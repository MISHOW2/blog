import { NavLink } from "react-router-dom";

const NavBar = ()=>{

  return(
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/posts'>blog</NavLink>
      </nav>
  )
}

export default NavBar
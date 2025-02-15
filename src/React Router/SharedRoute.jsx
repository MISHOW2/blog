import { Outlet } from "react-router-dom";
import NavBar from '../Components/Navbar'

export default function SharedLayout() {
  return (
   <>
    <NavBar/>
    <Outlet />
   </>
  );
}

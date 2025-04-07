import React from "react";
import { Link } from "react-router-dom";
import App from "./App.jsx";

function  Nav() {
  
    return (
      <>
        <h1> this is the NAV !</h1>
        <Link to='/'> iniciar sesion</Link>
        <Link to='/home'> pagina inicial</Link>
        <Link to='/user/profile'> perfil de usuario</Link>
      </>
    )
  }
  
  export default Nav
  
import { useState } from 'react' //importando funcion
import reactLogo from '../assets/react.svg' //variable
import viteLogo from '/vite.svg'
import '../App.css'  
import Boton from '../Componnet.jsx'
import ResponsiveAppBar from '../appvar.jsx'

function  profile() {
  
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <h1> PROFILE</h1>
    <h2> esta es la vista de perfil</h2>
    </>
  )
}

export default profile

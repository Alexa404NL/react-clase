import { useState } from 'react' //importando funcion
import reactLogo from './assets/react.svg' //variable
import viteLogo from '/vite.svg'
import './App.css'  
import Boton from './Componnet.jsx'
import Initial from './views/Initial.jsx'
import Login from './views/login.jsx'
import Profile from './views/profile.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={ <Initial/>}/>
          <Route path="/" element={ <Login/>}/>
          <Route path="/user/profile" element={ <Profile/>}/>
          <Route path="/boton" element={ <Boton texto={"prueba de vistas"}/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App

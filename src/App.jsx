import { useState } from 'react' //importando funcion
import reactLogo from './assets/react.svg' //variable
import viteLogo from '/vite.svg'
import './App.css'  
import Boton from './Componnet.jsx'
import Initial from './views/Initial.jsx'
import Login from './views/login.jsx'
import Profile from './views/profile.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import  ResponsiveAppbar from './appvar.jsx'
import Footer from "./Footer.jsx"


function App() {
  const [isLogin, setLogin] = useState(false);
  const login = async (user) => {
      const data = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const datos = await data.json();
      console.log("status: ", datos.isLogin);
      setLogin(datos.isLogin);
      return datos.isLogin;  
  };

  const logout = async () => {
    setLogin(false);
  }

    return (
      <BrowserRouter>
       {isLogin && <ResponsiveAppbar logout={logout} />}
        <Routes>
          <Route path="/home" element={isLogin ? <Initial/>: <Navigate to= {"/"}/> }/>
          <Route path="/" element={<Login login={login}/>}/>
          <Route path="/user/profile" element={ isLogin ? <Profile/> : <Navigate to= {"/"}/>}/>
          <Route path="/boton" element={<Boton texto={"prueba de vistas"}/>}/>
          <Route path="/*" element={isLogin ? <Initial/> : <Navigate to= {"/"}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
}

export default App

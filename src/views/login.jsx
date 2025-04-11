
import '../App.css'  
import React from 'react'
import Nav from '../Nav.jsx'
import ResponsiveAppBar from '../appvar.jsx'
import { TextField, Box, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'


function  Login ({login}) {
  const [username, setUsername]= React.useState('yo soy el user')
  const [password, setPassword]= React.useState('...')
  const navigate=useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault(); 
    console.log("username:",username);
    console.log("pass:",password);
    const isLogin = await login({username, password});
    if (isLogin) {
      navigate("/home")
    } else {
      alert("usuario o contraseña incorrectos")

    }

  };
  return (
    <>
      
      <h1>estas en LOGIN</h1>
      {/*<Nav></Nav>*/}

      <form onSubmit={onsubmit}>
        <Box
          bgcolor={"white"}
          margin={"auto"}
          flexDirection={"column"}
          display={"flex"}
          witbh={"40px"}
          marginTop={"20px"}        
          padding={"20px"}
        >

          <TextField label="Username" value ={username} onChange={(e)=>setUsername(e.target.value)}/>
          <br></br>
          <TextField label="Password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        <Button variant="contained" type="submit" color="primary">Login</Button>
      </form>

    </>
  )
}

export default Login

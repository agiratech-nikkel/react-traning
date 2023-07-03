import React, { useState,useEffect } from 'react';
import './login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

function Login() {

    const navigate  = useNavigate()

    let User = {
        email:'test@gmail.com',
        password:'password@123'
    }

    useEffect(() => {
        localStorage.setItem('User',JSON.stringify(User))
      }, []);

    const [state, setState] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault()
       let User =  localStorage.getItem('User')
       if(User === JSON.stringify(state)){
        localStorage.removeItem('User')
        localStorage.setItem("auth",true)
        navigate('/')
       }
    }

  return (
    <section className='container'>
      <section className='card' >
       <h1 className="name" >Welcome</h1>
        <Box
        className='form-structure'
        component="form"
        onSubmit={onSubmit}
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" name="email" value={state.email} onChange={handleChange} variant="outlined" />
      <TextField id="outlined-basic" label="Password" name="password" value={state.password} onChange={handleChange} variant="outlined" />
      <Stack className="button-structure" direction="row">
      <Button type='submit' className="button-structure" variant="contained">Login In </Button>
    </Stack>
    </Box>
    
      </section>
    </section>
  )
}

export default Login

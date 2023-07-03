import React from 'react'
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './home.css'
function Home() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      
    }
  });
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 


  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  return (
    <div className='container'>

     <div>
     <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
     </div>

     <form onSubmit={handleSubmit(onSubmit)}>
     <div  className='home-form'>
     <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          className='form-field'
        />
           <TextField
          required
          id="outlined-required"
          label="Dob"
          defaultValue=""
          className='form-field'
        />
            <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          className='form-field'
        />
        <TextField
          required
          id="outlined-required"
          label="Number"
          defaultValue=""
          className='form-field'
        /> 

          <TextField
          required
          id="outlined-required"
          label="address"
          defaultValue=""
          className='form-field'
        /> 

        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue=""
          className='form-field'
        /> 

        <TextField
          required
          id="outlined-required"
          label="District"
          defaultValue=""
          className='form-field'
        /> 

        <TextField
          required
          id="outlined-required"
          label="State"
          defaultValue=""
          className='form-field'
        />

          <TextField
          required
          id="outlined-required"
          label="Pincode"
          defaultValue=""
          className='form-field'
        />

      </div>
     
      <input type="submit" />
    </form>
    </div>
  )
}

export default Home

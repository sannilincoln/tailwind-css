import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import fullgospellogo from '../fullgospellogo.png'
// import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import MuiDatePicker from '../Components/common/Datepicker';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];




const theme = createTheme();

export default function SignUp() {


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
 <div className=" bg-cover bg-center bg-gradient-to-r from-rgba(0,0,0,0.7) to-rgba(0,0,0,0.7) flex flex-col align-middle justify-center " style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1502987846294-e7ec70f4b393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80")`,
    }}> 
      <Container  className='shadow-xl p-10 opacity-90 my-12 bg-slate-100 max-w-xl rounded'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            
            <img src={fullgospellogo} className='h-20' alt="fgbmfi logo" />

          <Typography component="h1" variant="h5">
            Guest  Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  name="Title"
                  label="Title"
                  // value={}
                  //  onChange={}
                  autoFocus
                >
                        {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  required
                  name="Gender"
                  label="Gender"
                  // value={}
                  //  onChange={}
                  autoFocus
                >
                        {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>

              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="FirstName"
                  required
                  fullWidth
                  id="FirstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="LastName"
                  label="Last Name"
                  name="LastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="WhatsApp Number"
                  name="number"
                  autoComplete="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MuiDatePicker
                Title={'Date of Birth'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  required
                  name="Conutry"
                  label="Conutry"
                  // value={}
                  //  onChange={}
                  autoFocus
                >
                        {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                 <TextField
                  select
                  fullWidth
                  required
                  name="State"
                  label="State"
                  // value={}
                  //  onChange={}
                  autoFocus
                >
                        {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'#00a99d','&:hover':{backgroundColor:'#00a99d'} }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2" className='text-fgbmfi'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    
    </div>    
    // </ThemeProvider>
  );
}
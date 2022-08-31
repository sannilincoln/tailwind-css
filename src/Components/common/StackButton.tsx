import * as React from 'react';
import Stack from '@mui/material/Stack';
import {  useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

export default function StackButtons() {
  const btnStyle ={
    backgroundColor:'#00a99d', 
    '&:hover':{backgroundColor:'#00a99d'},
    fontWeight:'600'
    
  }
  
  const navigate = useNavigate();
  return (
    <Stack spacing={6} direction="row"  justifyContent="center" alignItems="center">
      <Button variant="contained" size='large' onClick={() => navigate('SignUp')} sx={btnStyle}>
          Guest Register </Button>
      <Button variant="contained" size='large'  onClick={() => navigate('Login')} sx={btnStyle}>Member Login</Button>
      
    </Stack>
  );
}


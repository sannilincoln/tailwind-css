import * as React from 'react';
import Stack from '@mui/material/Stack';
import {  useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

export default function StackButtons({}) {
 
  
  const navigate = useNavigate();
  return (
    <Stack spacing={4} direction="row"  justifyContent="center" alignItems="center">
      <Button variant="contained" size='large' onClick={() => navigate('SignUp')} className='m-4 font-semibold bg-fgbmfi'>
          Guest Register </Button>
      <Button variant="contained" size='large'  onClick={() => navigate('Login')} className='m-4 font-semibold bg-fgbmfi'>Member Login</Button>
      
    </Stack>
  );
}


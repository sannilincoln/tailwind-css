import * as React from 'react';
import Stack from '@mui/material/Stack';
import {  useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

export default function StackButtons() {
  const navigate = useNavigate();
  return (
    <Stack spacing={6} direction="row"  justifyContent="center" alignItems="center">
      <Button variant="contained" size='medium' onClick={() => navigate('SignUp')} sx={{backgroundColor:'#00a99d', '&:hover':{backgroundColor:'#00a99d'}}}>
          Guest Register </Button>
      <Button variant="contained" size='medium'  onClick={() => navigate('Login')} sx={{backgroundColor:'#00a99d', '&:hover':{backgroundColor:'#00a99d'}}}>Member Login</Button>
      
    </Stack>
  );
}

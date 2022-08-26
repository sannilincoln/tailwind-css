import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function StackButtons() {
  return (
    <Stack spacing={6} direction="row"  justifyContent="center" alignItems="center">
      <Button variant="contained" size='medium' sx={{backgroundColor:'#00a99d'}}>Guest Register </Button>
      <Button variant="contained" size='medium' sx={{backgroundColor:'#00a99d'}}>Member Login</Button>
      
    </Stack>
  );
}

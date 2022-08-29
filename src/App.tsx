import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Home from './Pages/Home';
import Login from '../src/Pages/Login'
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile'



export default function App() {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login/>} />
        <Route path="SignUp" element={<SignUp/>} />
        <Route path="Profile" element={<Profile/>} />
      </Routes>
    // <Profile/>
    // <Container maxWidth="sm">
    // </Container>
  );
}

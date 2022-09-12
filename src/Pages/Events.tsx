import React from 'react'
import NavBar from '../Components/Navbar'
import PublicIcon from '@mui/icons-material/Public';
import fullgospellogo from '../fullgospellogo.png'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {  useNavigate } from "react-router-dom";


const Home = () => {
const navigate = useNavigate();

  const styles={
    paperStyle:{
      backgroundColor:'#00a99d', 
    '&:hover':{backgroundColor:'#00a99d'},
    fontWeight:'600'
    }
    
  }
  return (
    <>
    <main className='relative '>
    <div className="h-screen bg-cover bg-center  flex flex-col align-middle justify-center " style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1648315156503-5335899e3470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
    }}>
           <NavBar/>
                     <img src={fullgospellogo} className="h-28 lg:h-40 self-center"  alt="fgbmfi logo" />

            <h1 className='text-white text-center lg:text-6xl'> National Convention</h1>
            <h1 className='text-white text-center lg:text-6xl'> Theme: Gift Event</h1>

           {/* <Stack spacing={4} direction="row"  justifyContent="center" alignItems="center">
      <Button variant="contained" size='large' onClick={() => navigate('/SignUp')} className='m-4 font-semibold bg-fgbmfi'>
          Guest Register </Button>
      <Button variant="contained" size='large'  onClick={() => navigate('/Login')} className='m-4 font-semibold bg-fgbmfi'>Member Login</Button>
      
    </Stack> */}
    </div>
 <div className="lg:flex lg:justify-center absolute  right-0  left-0">
            <Paper  elevation={4} className='lg:w-96 mx-4 mb-8 bg-fgbmfi' >
              <h3 className='text-slate-100 text-center'>
              <h1 className='text-white m-0'>#1000</h1>
              Early Bird Registration
              </h3>
            </Paper>

            <Paper elevation={4} className='lg:w-96 mx-4 mb-8 bg-fgbmfi'>
           <h3 className='text-slate-100 text-center'>
              <h1 className='text-white m-0'>#1500</h1>
               Registration
              </h3>
            </Paper>
        </div>
     <div className="lg:px-20 py-16 px-1 " >
        <div className="flex justify-center align-middle">
            < PublicIcon fontSize='large'/>
        </div>
        <h1 className='text-center'>About Convention</h1>
        <p className='text-center px-16'>
          We use a vast global movement of laymen comprising millions of men and women being used mightily by God to bring this last great harvest of souls through the outpourings of God’s Holy Spirit,
           before the return of our Lord Jesus Christ.
            Our ladies are also members and play very important roles.
        </p>
      </div>
      <div className="flex flex-col justify-center align-middle lg:px-20 py-14 bg-slate-50" >
        <h1 className='text-center'>REGISTRATION FEE</h1>

       

        <div className="lg:flex lg:justify-center ">
            <Paper  elevation={4} className='lg:w-96 mx-4 mb-8 bg-fgbmfi' >
              <h3 className='text-slate-100 text-center'>
              <h1 className='text-white m-0'>#1000</h1>
              Early Bird Registration
              </h3>
            </Paper>

            <Paper elevation={4} className='lg:w-96 mx-4 mb-8 bg-fgbmfi'>
           <h3 className='text-slate-100 text-center'>
              <h1 className='text-white m-0'>#1500</h1>
               Registration
              </h3>
            </Paper>
        </div>

        <Stack spacing={4} direction="row"  justifyContent="center" alignItems="center">
      <Button variant="outlined" size='large' onClick={() => navigate('/SignUp')} className='m-4 font-semibold  text-fgbmfi border-fgbmfi'>
          Guest Register </Button>
      <Button variant="outlined" size='large'  onClick={() => navigate('/Login')} className='m-4 font-semibold  text-fgbmfi border-fgbmfi'>Member Login</Button>
    </Stack>

      </div>
      <div className="flex flex-col" >
        <h1 className='text-center font-bold'>CHAIRMAN'S SPEECH</h1>
         <div className='flex flex-col justify-center  mt-8'>
         
         <div className='h-56 w-56  border-4 rounded-full self-center border-solid border-fgbmfi'></div>
         <h2 className='text-center'>President's Name</h2>
         
        <p className='text-center lg:px-20 px-1'>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quasi nemo animi voluptas?
          Dicta ab sunt, earum eius corporis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eos expedita asperiores officiis numquam laborum dolorem reprehenderit,
           id quo dolore molestiae ullam fugiat, repudiandae eveniet temporibus, saepe velit? Omnis, commodi.
         explicabo soluta numquam suscipit fuga optio esse aut, temporibus veritatis necessitatibus.adipisicing elit. Quae quasi nemo animi voluptas?
          Dicta ab sunt, earum eius corporis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eos expedita asperiores officiis numquam laborum dolorem reprehenderit,
           id quo dolore molestiae ullam fugiat, repudiandae eveniet temporibus, saepe velit? Omnis, commodi.
         explicabo soluta numquam suscipit fuga optio esse aut, temporibus veritatis necessitatibus.
        </p>                   
          </div>
      </div>

     <div className="h-14  bg-fgbmfi flex justify-center align-middle">
        <p className='xsm:text-sm lg:text-base text-white text-center  font-semibold'> {new Date().getFullYear()} - FGBMFI Nigeria Conventions</p>
     </div>
    </main>
    </>
  )
}

export default Home
import React from 'react'
import StackButtons from '../Components/common/StackButton'
import NavBar from '../Components/Navbar'
import PublicIcon from '@mui/icons-material/Public';
import fullgospellogo from '../fullgospellogo.png'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';



const Home = () => {
  const styles={
    paperStyle:{
      backgroundColor:'#00a99d', 
    '&:hover':{backgroundColor:'#00a99d'},
    fontWeight:'600'
    }
    
  }
  return (
    <>
    <main>
    <div className="h-screen bg-cover bg-center bg-gradient-to-r from-rgba(0,0,0,0.7) to-rgba(0,0,0,0.7) flex flex-col align-middle justify-center " style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1648315156503-5335899e3470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
    }}>
           <NavBar/>
                     <img src={fullgospellogo} className="h-40  self-center"  alt="fgbmfi logo" />

            <h1 className='text-white text-center text-6xl'> National Convention</h1>
            <h1 className='text-white text-center text-6xl'> Theme: Gift Event</h1>
          <StackButtons 
          

           />
    </div>

      <div className="px-20 py-16 " >
        <div className="flex justify-center align-middle">
            < PublicIcon fontSize='large' />
        </div>
        <h1 className='text-center'>About Convention</h1>
        <p className='text-center lg:mx-96 '>
          We use a vast global movement of laymen comprising millions of men and women being used mightily by God to bring this last great harvest of souls through the outpourings of God’s Holy Spirit,
           before the return of our Lord Jesus Christ.
            Our ladies are also members and play very important roles.
        </p>
      </div>
      <div className="px-20 py-14 bg-slate-50" >
        <h1 className='text-center'>REGISTRATION FEE</h1>
      <Box 
       sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        '& > :not(style)': {
          mb: 4,
          width: 400,
          height: 128, 
          mx:16
        },
      }}>
            <Paper  elevation={4} sx={styles.paperStyle}>
              <h3 className='text-slate-100 text-center'>
              <h1 className='text-white m-0'>#1000</h1>
              Early Bird Registration
              </h3>
            </Paper>
            <Paper elevation={4} sx={styles.paperStyle} >
           <h3 className='text-slate-100 text-center'>
              <h1 className='text-white m-0'>#1500</h1>
               Registration
              </h3>
            </Paper>
      </Box>
                <StackButtons
                />
      </div>
      <div className="h-96 " >
        <h1 className='text-center font-bold'>CHAIRMAN'S SPEECH</h1>
         <div className='flex  px-96 mt-8'>
         <div className="mr-10">
         <div className='h-56 w-56  border-4 rounded-full self-center border-solid border-fgbmfi'></div>
         <h2>President's Name</h2>

         </div>
        <p className='text-center '>
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
        <p className='text-white text-center font-semibold'> {new Date().getFullYear()} - FGBMFI Nigeria Conventions</p>
     </div>
    </main>
    </>
  )
}

export default Home
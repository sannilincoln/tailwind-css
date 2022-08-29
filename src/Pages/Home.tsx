import React from 'react'
import StackButtons from '../Components/common/StackButton'
import NavBar from '../Components/Navbar'
import PublicIcon from '@mui/icons-material/Public';


const Home = () => {
  return (
    <>
    <main>
    <div className="h-screen bg-cover bg-center bg-gradient-to-r from-rgba(0,0,0,0.7) to-rgba(0,0,0,0.7) flex flex-col align-middle justify-center " style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1648315156503-5335899e3470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
    }}>
           <NavBar/>
            <h1 className='text-white text-center text-6xl'> Welcome To Full Gospel Business Men Conventions</h1>
          <StackButtons/>
    </div>

      <div className="px-20 py-16 " >
        <div className="flex justify-center align-middle">
            < PublicIcon fontSize='large' />
        </div>
        <h1 className='text-center'>About Convention</h1>
        <p className='text-center'>
          We use a vast global movement of laymen comprising millions of men and women being used mightily by God to bring this last great harvest of souls through the outpourings of God’s Holy Spirit,
           before the return of our Lord Jesus Christ.
            Our ladies are also members and play very important roles.
        </p>
      </div>

     <div className="h-11 bg-fgbmfi flex justify-center">
        <p className='text-white text-center '> {new Date().getFullYear()} - FGBMFI Nigeria Conventions</p>
     </div>

    </main>
    </>
  )
}

export default Home
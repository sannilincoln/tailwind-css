import HomeIcon from '@mui/icons-material/Home';
import PasswordIcon from '@mui/icons-material/Password';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';


export const  SideList = [ 
    {
        id:0,
        icon: <HomeIcon/>,
        label:'Home',
        route:'/',
    },
    {
        id:1,
        icon:<PasswordIcon />,
        label:'Change Password',
        route:'#',
    },
    {
        id:2,
        icon:<EventAvailableIcon/>,
        label:'Registered Event',
        route:'#',
    },
 ]
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import fullgospellogo from '../fullgospellogo.png'
import { Link, useNavigate } from "react-router-dom";



const drawerWidth = 240;
const navItems = [{id:1,
                    item:'HOME',
                    link:'/'
                  },
                   {id:1,
                    item:'CONTACT',
                    link:'#'
                  },
                    {
                    id:2,
                    item:'FGBMFI-NIGERIA.ORG.NG',
                    link:'https://fgbmfi-nigeria.org.ng/'
                  },
                    {
                    id:3,
                    item:'ADMIN LOGIN',
                    link:'http://admin.fgbmficonventions.com/'
                    }
                  ]

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ flex:1, textAlign: 'center', backgroundColor:'#00a99d' }}>
       
          <img src={fullgospellogo} className='h-14' alt="fgbmfi logo" />
          

      <Divider />
      <List >
        {navItems.map(({item,id, link }) => (
          <ListItem key={id} disablePadding >
            <ListItemButton  sx={{ textAlign: 'center', }}>
              <ListItemText primary={item} sx={{ color:'#fff', fontWeight:'600'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav"  sx={{backgroundColor:'#00a99d'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            

          </IconButton>
          
          <div className="flex-grow xs:hidden sm:block">
          <img src={fullgospellogo} className="h-14"   alt="fgbmfi logo" />
          </div>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({item,id,link}) => (
              <Button key={id} onClick={() => window.open(link)} sx={{ color: '#fff',fontSize:15, fontWeight:'600', marginX:2 }}>
                {item} 
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 , }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

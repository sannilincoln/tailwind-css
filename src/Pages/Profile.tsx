import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { SideList } from '../Components/ProfileDrawer';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import fullgospellogo from '../fullgospellogo.png'
import { useNavigate } from 'react-router-dom';




function DashboardContent() {

      const navigate = useNavigate();

    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2a3042',
    color: theme.palette.common.white,
    fontWeight: '600',
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

  return (
   
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
         <AppBar position="fixed" sx={{ backgroundColor:'White' }}>
        <Toolbar sx={{flex:1, color:'#555'}}>
          <Typography variant="h6" component="div" sx={{flex:1, textAlign:'right', color:'#555'}}>
           email
          </Typography>
           <Button variant="text" size="small" sx={{color:'#555',marginLeft:2}}                                   >
          <LogoutIcon/>

                                         </Button>

         
        </Toolbar>
      </AppBar>
        <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, backgroundColor:'#2a3042',  boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <div className="flex  ml-3">
            <img src={fullgospellogo} className='h-14' alt="fgbmfi logo" />
            <h4 className='text-slate-200 ml-3'>FGBMFI</h4>

            </div>
          <List className='text-slate-200'>
            {SideList.map(({id,label,route,icon}) => (
              <ListItem key={id} disablePadding >
                <ListItemButton onClick={()=>navigate(route)}>
                  <ListItemIcon sx={{color:'#c7c7c7'}}>
                   {icon}
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        
        </Box>
      </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    // flexDirection: 'column',
                    height: 200,
                  }}
                >
                   <div className='flex '>
                    <div className='h-28 w-28 mt-4 border-2 rounded-full border-solid border-fgbmfi'></div>
                                <div className='ml-12'>
                                <h4>Name</h4>
                                    <p>Name</p>
                                    <p>Country</p>
                                </div>
                   
                   </div>
                </Paper>
              </Grid>
             
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {/* event Table */}
                        <h2>Upcoming Events</h2>
                            <div>
                                <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Event Name</StyledTableCell>
                                    <StyledTableCell >Host</StyledTableCell>
                                    <StyledTableCell >Action</StyledTableCell>
                                 
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell >{row.calories}</StyledTableCell>
                                    <StyledTableCell > 
                                         <Button variant="contained" size="small"
                                         sx={{backgroundColor:'#2a3042', '&:hover':{backgroundColor:'#2a3042'}}}
                                         >
                                                Register
                                            </Button>
                                            </StyledTableCell>
                                   
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                            </div>

                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
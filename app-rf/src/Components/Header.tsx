"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { Tabs, Tab } from '@mui/material';
import LogoRF from '@/Assets/logorfsvg2.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Header = () => {
  
  return (
    <AppBar position="static" sx={{bgcolor:"#242424", boxShadow:"0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
        <Typography   >
        <img src={LogoRF.src} alt="logo" />
        </Typography>
       
       
   
      
          <Tabs sx={{ marginLeft:'auto', justifyContent:'space-around', Width:'full', textDecoration:'none', fontSize:'16px'}} >
            <Tab label  = 'Home' sx={{color:'#FBA403'}} />
            <Tab label='Sobre mim' sx={{color:'#FFF'}}/>
            <Tab label='Galeria' sx={{color:'#FFF'}}/>
            <Tab label='Contato' sx={{color:'#FFF'}}/>
          </Tabs>            
            
            <Box sx={{ flexGrow: 0, marginLeft:'auto'}}>
              <IconButton  sx={{ p: 0, gap:'15px'}}>
               
              <Typography  >
       
        <InstagramIcon href='instagram.com/renatofilho.ink' sx={{color:'#FFF'}}/>

        </Typography>
       <Typography>
       <WhatsAppIcon href='wa.me/551973522573' sx={{color:'#FFF'}}/>
       </Typography>
      
              </IconButton> 
           
           </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
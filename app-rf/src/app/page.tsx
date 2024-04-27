import React from 'react'
import Header from '@/Components/Header'
import Container from '@mui/material/Container';
import type { NextPage } from 'next';
import AboutUs from '@/Components/AboutUs';


const Home: NextPage =() => {
 
  return (
   
    <Container maxWidth="xl" >
       <Header/>
       <AboutUs/>
       </Container>

    
  
  );
}
export default Home

import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import wallpaperRfsvg from '@/Assets/wallpaperRFsvg.svg'
import { Typography } from '@mui/material'


const AboutUs = () => {
  return (
    <Container maxWidth='xl'>
      <Box sx={{flexDirection:'row', display:'flex', gap:'80px'}}>
      <Box sx={{ paddingTop:'74px',
    paddingLeft:'89px',}}>
      <img src={wallpaperRfsvg.src} alt="Renato Filho" />
        </Box>
        <Box   sx={{

my: 2,
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
gap:'42px',

}}>
   <Typography color='#FFF' variant="h6" component="h6" >
             Minha trajetória na Tattoo
            </Typography>
    
</Box>

        </Box>
        </Container>
  )
}

export default AboutUs

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';



export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '10vh',
        backgroundColor:'black',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
       
        <Typography variant="body1"sx={{ 
        color:'white',
        textAlign:'center',
      }}>--  LMS WEB APPLICATION  --</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:'black',
        }}
      >
       
      </Box>
    </Box>
  );
}
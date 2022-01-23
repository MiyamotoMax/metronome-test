import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const tick = ()=>{
  const element = (
    <div>
      <Container maxWidth="sm">
      <Button variant="contained" color="primary" onClick={() => {
    tick();
  }}>
      What time is it now?
    </Button>
    <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
        {new Date().toLocaleTimeString()}
        </Typography>
      </Box>
    </Container>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

tick();
//setInterval(tick, 1000);


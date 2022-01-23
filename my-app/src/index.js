import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

let uiData = {
  time: new Date().toLocaleTimeString(),
  switchStatus: false,
  sliderValue: 120
}
const tick = () => {
  const element = (
    <div>
      <Container maxWidth="sm">
        <Button variant="contained" color="primary" onClick={() => {
          uiData.time = new Date().toLocaleTimeString();
          tick();
        }}>
          What time is it now?
        </Button>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {uiData.time}
          </Typography>
        </Box>
        <Switch onClick={(event) => {
          uiData.switchStatus = event.target.checked;
          tick();
          updateStatus();
        }} />
        <Typography variant="h4" component="h1" gutterBottom>
          {String(uiData.switchStatus)}
        </Typography>
        <Box sx={{ width: 300 }}>
          <Slider
            defaultValue={120}
            valueLabelDisplay="auto"
            min={30}
            max={240}
            onChangeCommitted={(event, value) => {
              uiData.sliderValue = value;
              tick();
              updateStatus();
            }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            BPM: {String(uiData.sliderValue)}
          </Typography>
        </Box>
      </Container>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

tick();
let testTimer;
const updateStatus = () => {
  console.log(uiData.switchStatus);
  const startMetro = () => {
    console.log(testTimer);
    testTimer = setInterval(() => {
      uiData.time = new Date().toLocaleTimeString();
      console.log(uiData.time);
      tick();
    }, 60000 / uiData.sliderValue);
  }
  const stopMetro = () => {
    clearInterval(testTimer);
  }
  if (uiData.switchStatus) {
    console.log('start');
    stopMetro();
    startMetro();
  } else {
    console.log('stop');
    stopMetro();
  }
}
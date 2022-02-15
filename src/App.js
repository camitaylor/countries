import React from 'react';
import { Grommet } from 'grommet';
import AppBar from './components/AppBar/AppBar';


const theme = {
  global: {
    colors: {
      brand: '#228BE6',
         },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    },
  },
};

function App() {
  return (
    <Grommet theme={ theme } themeMode="dark">
      <AppBar />
      
    </Grommet>
  );
}

export default App;

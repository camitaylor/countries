import React, {useState} from 'react';
import { Grommet, Main } from 'grommet';
import Router from './router/Router';
import AppBar from './components/AppBar/AppBar'


const theme = {
  global: {
    colors: {
      brand: '#7D4CDB',
         },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    },
  },
};

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <Grommet 
    full 
    theme={ theme }> 
    {/* themeMode={darkMode ? "dark" : "light"} > */}
      <Main>
        <AppBar />
        <Router />
      </Main>
      
    </Grommet>
  );
}

export default App;

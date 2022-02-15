import React, {useState} from 'react';
import { Grommet } from 'grommet';
import AppBar from './components/AppBar/AppBar';
import CountriesListView from './views/CountriesListView/CountriesListView';


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
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <Grommet 
    full 
    theme={ theme }> 
    {/* themeMode={darkMode ? "dark" : "light"} > */}
      <AppBar />
      <CountriesListView />
      
    </Grommet>
  );
}

export default App;

import React, {useState} from 'react';
import { Grommet, Main } from 'grommet';
import { grommet } from 'grommet/themes';
import Router from './router/Router';
import AppBar from './components/AppBar/AppBar'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <Grommet 
      full 
      theme={grommet}
      themeMode={darkMode ? "dark" : "light"}
    >
    <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main >
        <Router />
      </Main>
      
    </Grommet>
  );
}

export default App;

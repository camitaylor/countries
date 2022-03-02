import React, {useEffect, useState} from 'react';
import { Box, Grommet, Main } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import Router from './router/Router';
import AppBar from './components/AppBar/AppBar'
import useFetch from './hooks/useFetch/useFetch';


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

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
});

const App = () => {
  // const [darkMode, setDarkMode] = useState(false);

  const [countriesData, setCountriesData] = useState([])
  
  const { data, isLoading } = useFetch('https://restcountries.com/v2/all')
  // const { data, isLoading } = useFetch(`https://restcountries.com/v2/all?country=${searchValue}`)

  

    useEffect(() => {

      setCountriesData(data)
      
    }, [data]);


    if (isLoading) {
      // console.log(searchValue)
      
      return <Box>Loading...</Box> 
    }
  
  return (
    <Grommet 
    full 
    theme={{ theme, customBreakpoints }}> 
    {/* themeMode={darkMode ? "dark" : "light"} > */}
    <AppBar />
      <Main >
        <Router countriesData={countriesData} />
      </Main>
      
    </Grommet>
  );
}

export default App;

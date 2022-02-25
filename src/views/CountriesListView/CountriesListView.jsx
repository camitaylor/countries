import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Grommet, ResponsiveContext, Select, TextInput } from 'grommet';
import CountriesListCard from '../../components/CountriesListCard/CountriesListCard';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import { Search } from 'grommet-icons';
import useFetch from '../../hooks/useFetch/useFetch';

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


const CountriesListView = () => {

  const size = useContext(ResponsiveContext);

  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [population, setPopulation] = useState('');
  const [capital, setCapital] = useState('');
  const [flag, setFlag] = useState('');

  const res = useFetch('https://restcountries.com/v2/all')
  // const res = useFetch(`https://restcountries.com/v2/all?country=${searchValue}`)
  
    
  const countriesData = res.response
    
    useEffect(() => {
      
      if(countriesData) {
      
      setName(countriesData.name)
      setRegion(countriesData.region)
      setPopulation(countriesData.population)
      setCapital(countriesData.capital)
      setFlag(countriesData.flag)
    
      }
    }, [countriesData]);

    console.log(countriesData)

    // if (!countriesData) {
    //   console.log(searchValue)
      
    //   return <div>Loading...</div> 
    // }

  return (
    <Grommet theme={customBreakpoints}>
      <Box
        background= "white"
        direction='row-responsive'
        justify='between'
      >
        <Box
          margin={{ top: "large", left: "xlarge" }}
          align="start"
          direction="row-responsive"
          gap="xsmall"
        >
          <TextInput 
            icon={<Search />} 
            placeholder="Search for a country..."
            // value={value}
            // onChange={event => setValue(event.target.value)}
          />
          <Button
            margin={{ top: "xsmall"}}
            size="small"
            primary label="search" />
          </Box>
          <Box
            margin={{ top: "large", right: "xlarge" }}  
            align="end"
            direction="row-responsive"
          >
            <Select
              options={[ 'Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America' ]}
              placeholder="Select a region"
              // value={value}
              // onChange={({ option }) => setValue(option)}
            />
          </Box>
        </Box>
        <Box
        pad="large"
        margin={{ left: "large" }}
      >

        <Grid columns={size !== 'small' ? 'small' : '100%'} gap="xlarge">
        {countriesData.map(({ flag, name, region, population, capital }) => (
          <CountriesListCard flag={flag} name={name} region={region} population={population} capital={capital} />
        ))}
        </Grid>
      </Box>
    </Grommet>
  );
};

export default CountriesListView;
import React, { useContext, useState } from 'react';
import { Box, Grid, Header, ResponsiveContext } from 'grommet';
import CountriesListCard from '../../components/CountriesListCard/CountriesListCard';
import SearchField from '../../components/SearchField/SearchField';
import FilterField from '../../components/FilterField/FilterField';
import useFetch from '../../hooks/useFetch/useFetch';


const CountriesListView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [optionValue, setOptionValue] = useState('');
  
  const size = useContext(ResponsiveContext);

  const { data: countriesData, isLoading } = useFetch('https://restcountries.com/v2/all')

  if (isLoading) {
    return <Box>Loading...</Box> 
  }

  const allCountries = countriesData.map(( countriesData ) => ( 
    <CountriesListCard 
      countriesData={countriesData}
    />
  ))
    
  const filteredCountry = countriesData.filter((country) => (
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))
   
  const searchCountries = filteredCountry.map((countriesData) => (
    <CountriesListCard 
      countriesData={countriesData}
    />
  ))

  const searchRegion = countriesData.map((country) => (
    country.region
  ))
  
  const filteredRegions = searchRegion.filter((region, index) => ( searchRegion.indexOf(region) === index)
  )

  const filteredRegionsMatch = countriesData.filter((country) => (
    country.region === optionValue
  ))

  const searchFilteredRegions = filteredRegionsMatch.map((countriesData) => (
    <CountriesListCard 
      countriesData={countriesData}
    />
  ))


  let display;
  if (!searchTerm && !optionValue) {
    display = allCountries
  }
  else if (optionValue && !searchTerm) {
    display = searchFilteredRegions
  }
  else {
    display = searchCountries
  }

  return (
    <Box>
      <Header>
        <SearchField  
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FilterField 
          optionValue={optionValue}
          setOptionValue={setOptionValue}
          filteredRegions={filteredRegions}
        />
      </Header>
      <Box
        pad="large"
        margin={{ left: "medium" }}
      >
        <Grid 
          columns={size !== 'small' ? 'small' : '100%'} gap="xlarge">      
          {display}
        </Grid>
      </Box>
    </Box>
  );
};

export default CountriesListView;
import React, { useContext, useState } from 'react';
import { Box, Grid, Header, ResponsiveContext } from 'grommet';
import CountriesListCard from '../../components/CountriesListCard/CountriesListCard';
import SearchField from '../../components/SearchField/SearchField';
import FilterField from '../../components/FilterField/FilterField';
import useFetch from '../../hooks/useFetch/useFetch';

const CountriesListView = () => {

  const size = useContext(ResponsiveContext);

  const { data: countriesData, isLoading } = useFetch('https://restcountries.com/v2/all')


  // const { data, isLoading } = useFetch(`https://restcountries.com/v2/all?country=${searchInput}`)

  if (isLoading) {
    return <Box>Loading...</Box> 
  }

  return (
    <Box>
      <Header>
          <SearchField 
          // setSearchTerm={setSearchTerm} 
          />
          <FilterField countriesData={countriesData}/>
        </Header>
        <Box
        pad="large"
        margin={{ left: "medium" }}
      >

        <Grid columns={size !== 'small' ? 'small' : '100%'} gap="xlarge">
          {/* {display} */}
        </Grid>
      </Box>
    </Box>
  );
};


export default CountriesListView;
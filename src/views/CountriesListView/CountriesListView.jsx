import React, { useContext, useState } from 'react';
import { Box, Grid, Header, ResponsiveContext } from 'grommet';
import CountriesListCard from '../../components/CountriesListCard/CountriesListCard';
import SearchField from '../../components/SearchField/SearchField';
import FilterField from '../../components/FilterField/FilterField';

const CountriesListView = ({ countriesData }) => {

  const [searchValue, setSearchValue] = useState('');
  const size = useContext(ResponsiveContext);

  return (
    <Box>
      <Header>
          <SearchField 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          />
          <FilterField />
        </Header>
        <Box
        pad="large"
        margin={{ left: "medium" }}
      >

        <Grid columns={size !== 'small' ? 'small' : '100%'} gap="xlarge">
        {countriesData.map(( countriesData ) => ( 
          <CountriesListCard 
          countriesData={countriesData}
          />
        ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CountriesListView;
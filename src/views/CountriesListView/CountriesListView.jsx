import React, { useContext, useState } from 'react';
import { Box, Grid, Header, ResponsiveContext, Select } from 'grommet';
import CountriesListCard from '../../components/CountriesListCard/CountriesListCard';
import SearchField from '../../components/SearchField/SearchField';

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
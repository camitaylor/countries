import React, { useContext } from 'react';
import { Box, Button, Grid, Header, ResponsiveContext, Select, TextInput } from 'grommet';
import CountriesListCard from '../../components/CountriesListCard/CountriesListCard';
import { Search } from 'grommet-icons';

const CountriesListView = ({ countriesData }) => {

  const size = useContext(ResponsiveContext);

  return (
    <Box>
      <Header>
        <Box
          margin={{ top: "large", right: "xlarge", left: "xlarge" }}  
          align="start"
          direction="row-responsive"
          gap="small"
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
import React from 'react';
import { Box, Grid } from 'grommet';
import CountriesCard from '../CountriesCard/CountriesCard';

const CountriesList = () => {
  return (
    // <Box>
    //   <CountriesCard />
    //   <CountriesCard />
    //   <CountriesCard />
    //   <CountriesCard />
    //   <CountriesCard />
    //   <CountriesCard />
    // </Box>

    <Grid
      rows={['small', 'small', 'small']}
      columns={['small', 'small', 'small', 'small']}
      gap="large"
      // areas={[
      //   { name: 'header', start: [0, 0], end: [1, 0] },
      //   { name: 'nav', start: [0, 1], end: [0, 1] },
      //   { name: 'main', start: [1, 1], end: [1, 1] },
      // ]}
    >
      <Box> 
        <CountriesCard />
      </Box>
      <Box> 
        <CountriesCard />
      </Box>
      <Box> 
        <CountriesCard />
      </Box>
      <Box> 
        <CountriesCard />
      </Box>
      <Box> 
        <CountriesCard />
      </Box>
    </Grid>
  )
}

export default CountriesList
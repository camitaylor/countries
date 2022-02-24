import React from 'react';
import { Grid, Box, Card, Image, Text, Button } from 'grommet';
import CountriesDetailsCard from '../../components/CountriesDetailsCard/CountriesDetailsCard';
import DetailsFlagCard from '../../components/DetailsFlagCard/DetailsFlagCard';



const CountriesDetailsView = () => {

  
  return (
    <Box 
      align='center' 
      justify='center' 
      direction='row' 
      gap='medium' 
      background='white' 
      fill='vertical'
    >
        {/* <Grid columns={size !== 'large' ? 'large' : '100%'}> */}
        {/* <Grid columns={'large'} justify="center"        align="center"> */}
          {/* {countriesArray[0]} */}
          <Box 
          justify="center"
          align="center"
          >
            <DetailsFlagCard />
          </Box>
          <Box 
          justify="center"
          align="center" 
          >
            <CountriesDetailsCard />
          </Box>
        {/* </Grid> */}
      </Box>
  );
}

export default CountriesDetailsView;
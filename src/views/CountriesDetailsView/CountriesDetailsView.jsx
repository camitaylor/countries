import React from 'react';
import { Box } from 'grommet';
import CountriesDetailsCard from '../../components/CountriesDetailsCard/CountriesDetailsCard';
import DetailsFlagCard from '../../components/DetailsFlagCard/DetailsFlagCard';



const CountriesDetailsView = ({countriesData}) => {
console.log(countriesData)

  return (
    <Box 
      align='center' 
      justify='center' 
      direction='row-responsive' 
      gap='medium' 
      background='white' 
      fill='vertical'
    >
      <Box 
        justify="center"
        align="center"
      >
        <DetailsFlagCard countriesData={countriesData} /> 
      </Box>
      <Box 
        justify="center"
        align="center" 
      >
        <CountriesDetailsCard countriesData={countriesData} />
      </Box>
    </Box>
  );
}

export default CountriesDetailsView;
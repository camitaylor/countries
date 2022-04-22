import React from 'react';
import {useLocation} from 'react-router-dom';
import { Box } from 'grommet';
import CountriesDetailsCard from '../../components/CountriesDetailsCard/CountriesDetailsCard';
import DetailsFlagCard from '../../components/DetailsFlagCard/DetailsFlagCard';
import useFetch from '../../hooks/useFetch/useFetch';


const CountriesDetailsView = () => {

  const location = useLocation();

  const paramsString = location.search;
  const searchParams = new URLSearchParams(paramsString);
  const country = searchParams.get('country')
  const border = searchParams.get('border');

  const getFetchUrl = () => {
    const baseURL = "https:restcountries.com/v3.1/"
    if(country){
      return `${baseURL}name/${country}`
    }
    return `${baseURL}alpha/${border}`
  }
  
  const { data: countryData, isLoading } = useFetch(getFetchUrl());

  if (isLoading) {
    return <Box>Loading...</Box> 
  }

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
        <DetailsFlagCard 
        countryData={countryData} />
      </Box>
      <Box 
        justify="center"
        align="center" 
      >
        <CountriesDetailsCard 
        countryData={countryData} 
        />
      </Box>
    </Box>
  );
};

export default CountriesDetailsView;
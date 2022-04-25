import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button } from 'grommet';
import { FormPrevious } from 'grommet-icons';
import CountriesDetailsCard from '../../components/CountriesDetailsCard/CountriesDetailsCard';
import DetailsFlagCard from '../../components/DetailsFlagCard/DetailsFlagCard';
import useFetch from '../../hooks/useFetch/useFetch';


const CountriesDetailsView = () => {
  const history = useHistory();
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

  const onBackButtonClick = () => {
      history.push("/");
  };

  return (
    <Box  
      background='white' 
    >
      <Box direction="row" margin={{ top: "large", left: "large" }}>
        <Button plain={false} icon={<FormPrevious />} size="large" onClick={onBackButtonClick} default />
      </Box>
      <Box 
        align='center' 
        justify='center' 
        direction='row-responsive' 
        pad={{ top: "xlarge"}}
        gap='medium' 
        background='white' 
        fill='vertical'
      >
        <DetailsFlagCard 
          countryData={countryData} />
        <CountriesDetailsCard 
          countryData={countryData} />
      </Box>
    </Box>
  );
};

export default CountriesDetailsView;
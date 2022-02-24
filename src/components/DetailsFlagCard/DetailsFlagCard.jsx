import React, { useEffect, useState } from 'react';
import { Card, Image } from 'grommet';
import useFetch from '../../hooks/useFetch/useFetch';

const FlagCard = () => {

  const [flag, setFlag] = useState('');

  const res = useFetch('https://restcountries.com/v2/all')

  const countriesListData = res.response
    
    useEffect(() => {
      if(countriesListData) {
      setFlag(countriesListData[16].flag)  
      }
    }, [countriesListData]);

  return (
    <Card 
      height="500px" 
      width="500px"
      elevation="large" 
    >
      <Image
        fit="cover"
        src={flag}
      />
    </Card> 
  )
};

export default FlagCard;
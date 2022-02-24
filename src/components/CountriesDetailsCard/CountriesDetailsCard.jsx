import React, { useEffect, useState, useContext } from 'react';
import { 
  Box,
  Button, 
  Card, 
  Grid, 
  Image, 
  ResponsiveContext, 
  Text 
} from 'grommet';
import useFetch from '../../hooks/useFetch/useFetch';
  // import countriesDetailsData from '../CountriesDetails/countriesDetailsData';

const CountriesDetailsCard = () => {
  //  const size = useContext(ResponsiveContext);

    const [name, setName] = useState('');
    const [region, setRegion] = useState('');
    const [population, setPopulation] = useState('');
    const [capital, setCapital] = useState('');
    const [nativeName, setNativeName] = useState('');
    const [subregion, setSubregion] = useState('');
    const [topLevelDomain, setTopLevelDomain] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [borders, setBorders] = useState([]);
    // const [flag, setFlag] = useState('');

  const res = useFetch('https://restcountries.com/v2/all')
  // const res = useFetch(`https://restcountries.com/v2/all?country=${searchValue}`)
  
    
  const countriesListData = res.response
    
    useEffect(() => {
      if(countriesListData) {
      
      setName(countriesListData[22].name)
      setNativeName(countriesListData[22].nativeName)
      setRegion(countriesListData[22].region)
      setPopulation(countriesListData[22].population)
      setCapital(countriesListData[22].capital)
      setSubregion(countriesListData[22].subregion)
      setTopLevelDomain(countriesListData[22].topLevelDomain)
      setCurrencies(countriesListData[22].currencies[0].name)
      setLanguages(countriesListData[22].languages[0].name)
      setBorders(countriesListData[22].borders)
      // setFlag(countriesListData[1].flag)
    
      }
    }, [countriesListData]);

    console.log(countriesListData)

    // if (!res.response) {
    //   console.log(searchValue)
      
    //   return <div>Loading...</div> 
    // }

    return ( 
      <Card
        height="500px" 
        width="500px"
        elevation="large"
      >
        <Box 
          pad={{ top: "large", left: "xsmall" }}
          margin={{ left: "medium"}}
        >
          <Text size='xlarge' weight='bold'>{name}</Text>
        </Box>
        <Box
          direction="row-responsive"
        >
          <Box 
            pad={{ top: "large", left: "xsmall" }}
            margin={{ left: "small"}}
          >
            <Text size="large" weight='bold'>Native Name: {nativeName}</Text>
            <Text size="large" weight='bold'>Region: {region}</Text>
            <Text size="large" weight='bold'>Subregion: {subregion}</Text>
            <Text size="large" weight='bold'>Population: {population}</Text>
            <Text size="large" weight='bold'>Capital: {capital}</Text>
          </Box>
          <Box
            pad={{ top: "large", right: 'large' }}
            // margin={{ left: "xsmall"}}
          >
            <Text size="large" weight='bold'>Top Level Domain: {topLevelDomain}</Text>
            <Text size="large" weight='bold'>Currencies: {currencies}</Text>
            <Text size="large" weight='bold'>Languages: {languages}</Text>
          </Box>
        </Box>
        <Box  
          gap="medium"
          direction="row-responsive"
          pad={{ top: "large", left: "xsmall" }}
          margin={{ left: "medium"}}
        >
          <Text size="large" weight='bold'>Border Countries: </Text>
          <Button 
            primary 
            label={borders} 
          />
          <Button 
            primary 
            label={borders} 
          />
        </Box>
      </Card>
    )
}
  

export default CountriesDetailsCard
import React, {useEffect, useState } from 'react';
import { Box } from 'grommet';
import CountriesDetailsCard from '../../components/CountriesDetailsCard/CountriesDetailsCard';
import DetailsFlagCard from '../../components/DetailsFlagCard/DetailsFlagCard';
import useFetch from '../../hooks/useFetch/useFetch';


const CountriesDetailsView = () => {

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
  const [flag, setFlag] = useState('');

  const res = useFetch('https://restcountries.com/v2/all')
  // const res = useFetch(`https://restcountries.com/v2/all?country=${searchValue}`)
  
    
  const countriesData = res.response
    
    useEffect(() => {
      if(countriesData) {
      
      setName(countriesData[22].name)
      setNativeName(countriesData[22].nativeName)
      setRegion(countriesData[22].region)
      setPopulation(countriesData[22].population)
      setCapital(countriesData[22].capital)
      setSubregion(countriesData[22].subregion)
      setTopLevelDomain(countriesData[22].topLevelDomain)
      setCurrencies(countriesData[22].currencies[0].name)
      setLanguages(countriesData[22].languages[0].name)
      setBorders(countriesData[22].borders)
      setFlag(countriesData[1].flag)
    
      }
    }, [countriesData]);


    if (!countriesData) {
      return <div>Loading...</div> 
    }

  return (
    <Box 
      align='center' 
      justify='center' 
      direction='row' 
      gap='medium' 
      background='white' 
      fill='vertical'
    >
      <Box 
        justify="center"
        align="center"
      >
        <DetailsFlagCard flag={flag} />
      </Box>
      <Box 
        justify="center"
        align="center" 
      >
        <CountriesDetailsCard name={name} nativeName={nativeName} region={region} population={population} capital={capital} subregion={subregion} topLevelDomain={topLevelDomain} currencies={currencies} languages={languages} borders={borders}  />
      </Box>
    </Box>
  );
}

export default CountriesDetailsView;
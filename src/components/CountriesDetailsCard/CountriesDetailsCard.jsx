import React from 'react';
import { 
  Box,
  Button, 
  Card, 
  Text 
} from 'grommet';
import {Link} from 'react-router-dom';

const CountriesDetailsCard = ({countryData}) => {

  const {name, currencies, region, subregion, population, capital, languages, tld, borders} = countryData[0];

  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages)[0];

  return (    
    <Card
      height="450px" 
      width="675px"
      elevation="large"
      key={name.common}
    >
      <Box 
        pad={{ top: "large", left: "xsmall" }}
        margin={{ left: "medium"}}
      >
        <Text size='xlarge' weight='bold'>{name.common}</Text>
      </Box>
      <Box
        direction="row-responsive"
      >
        <Box 
          pad={{ top: "large", left: "xsmall" }}
          margin={{ left: "medium"}}
        >
          <Text size="large" weight='bold'>Native Name: {name.official}</Text>
          <Text size="large" weight='bold'>Region: {region}</Text>
          <Text size="large" weight='bold'>Subregion: {subregion}</Text>
          <Text size="large" weight='bold'>Population: {population}</Text>
          <Text size="large" weight='bold'>Capital: {capital[0]}</Text>
        </Box>
        <Box
          pad={{ top: "large", right: 'large' }}
          margin={{ left: "medium"}}
        >
          <Text size="large" weight='bold'>Top Level Domain: {tld[0]}</Text>
          <Text size="large" weight='bold'>Currencies: {currency}</Text>
          <Text size="large" weight='bold'>Languages: {language}</Text>
        </Box>
      </Box>
      <Box  
        gap="small"
        direction="row-responsive"
        pad={{ top: "large", left: "xsmall" }}
        margin={{ left: "medium"}}
      >
        <Text size="large" weight='bold'>Border Countries: </Text>
          {borders ? (borders.map(( border ) => (
            <Link to={`/details?country=${border}`}>
              <Button 
                key={border}
                label={border}
                value={border}
              />
            </Link>
          ))) : (
            <Text size="large" weight='bold'>None</Text>
            )
          } 
      </Box>
    </Card>
  )
};
  

export default CountriesDetailsCard;


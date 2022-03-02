import React from 'react';
import { 
  Box,
  Button, 
  Card, 
  Text 
} from 'grommet';


const CountriesDetailsCard = ({ countriesData }) => {

    return ( 
      <Card
        height="450px" 
        width="600px"
        elevation="large"
        key={countriesData[5].name}
      >
        <Box 
          pad={{ top: "large", left: "xsmall" }}
          margin={{ left: "medium"}}
        >
          <Text size='xlarge' weight='bold'>{countriesData[5].name}</Text>
        </Box>
        <Box
          direction="row-responsive"
        >
          <Box 
            pad={{ top: "large", left: "xsmall" }}
            margin={{ left: "medium"}}
          >
            <Text size="large" weight='bold'>Native Name: {countriesData[5].nativeName}</Text>
            <Text size="large" weight='bold'>Region: {countriesData[5].region}</Text>
            <Text size="large" weight='bold'>Subregion: {countriesData[5].subregion}</Text>
            <Text size="large" weight='bold'>Population: {countriesData[5].population}</Text>
            <Text size="large" weight='bold'>Capital: {countriesData[5].capital}</Text>
          </Box>
          <Box
            pad={{ top: "large", right: 'large' }}
            margin={{ left: "medium"}}
          >
            <Text size="large" weight='bold'>Top Level Domain: {countriesData[5].topLevelDomain[0]}</Text>
            <Text size="large" weight='bold'>Currencies: {countriesData[5].currencies[0].name}</Text>
            <Text size="large" weight='bold'>Languages: {countriesData[5].languages[0].name}</Text>
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
            label={countriesData[5].borders[0]} 
          />
          <Button 
            primary 
            label={countriesData[5].borders[1]} 
          />
        </Box>
      </Card>
    )
};
  

export default CountriesDetailsCard;
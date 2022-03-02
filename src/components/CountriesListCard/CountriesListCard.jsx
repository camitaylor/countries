import React from 'react';
import { 
  Box, 
  Card, 
  CardHeader, 
  CardBody, 
  Image, 
  Text } from 'grommet';

const CountriesListCard =  ({ countriesData }) => {


  return (
      <Box>
          <Card 
            key={countriesData.name}
            elevation="medium"
            height="225px" 
            width="300px" 
            background="light-1"
          >
            <CardHeader>
              <Box height="125px" width="medium">
                <Image
                  fit="cover"
                  src={countriesData.flag}
                />
              </Box>
            </CardHeader>
            <CardBody pad="small">
              <Box
                margin={{ left: "small" }}
                pad={{ bottom: 'xsmall'}}
              >
                <Text size='small' weight='bold'>{countriesData.name}</Text>
              </Box>
              <Box
                margin={{ left: "small" }}
                pad={{ bottom: 'xsmall'}}
                >
                <Text size='xsmall'>Region: {countriesData.region}</Text>
                <Text size='xsmall'>Population: {countriesData.population}</Text>
                <Text size='xsmall'>Capital: {countriesData.capital}</Text>
              </Box>
            </CardBody>
          </Card>
        </Box>
  );
};

export default CountriesListCard;

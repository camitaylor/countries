import React from 'react';
import { 
  Box, 
  Card, 
  CardHeader, 
  CardBody, 
  Image, 
  Text } from 'grommet';

const CountriesListCard =  ({ flag, name, region, population, capital }) => (
      <Box>
          <Card 
            // key={id}
            elevation="medium"
            height="small" 
            width="small" 
            background="light-1">
            <CardHeader>
              <Box height="xsmall" width="medium">
                <Image
                  fit="cover"
                  src={flag}
                />
              </Box>
            </CardHeader>
            <CardBody pad="small">
              <Box
                margin={{ left: "small" }}
                pad={{ bottom: 'xsmall'}}
              >
                <Text size='small' weight='bold'>{name}</Text>
              </Box>
              <Box
                margin={{ left: "small" }}
                pad={{ bottom: 'xsmall'}}
                >
                <Text size='xsmall'>Region: {region}</Text>
                <Text size='xsmall'>Population: {population}</Text>
                <Text size='xsmall'>Capital: {capital}</Text>
              </Box>
            </CardBody>
          </Card>
        </Box>
);

export default CountriesListCard;

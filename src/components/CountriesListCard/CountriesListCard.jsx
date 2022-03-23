import React from 'react';
import { 
  Box, 
  Card, 
  CardHeader, 
  CardBody, 
  Image, 
  Text } from 'grommet';
  import { useHistory } from 'react-router-dom';

const CountriesListCard =  ({ countriesData }) => {

  const history = useHistory();
  
  const handleClick = () => {
    history.push({
      pathname: '/details',
      state: countriesData
    });
  };

  return (
      <Box>
          <Card 
            key={countriesData.name}
            height="225px" 
            width="300px" 
            background="light-1"
            hoverIndicator={{
              background: {
               color: 'background-contrast',
              },
              elevation: 'large',
            }}
            onClick={ handleClick }
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

// Clickable.parameters = {
//   chromatic: { disable: true },
// };


export default CountriesListCard;

import React, { useContext } from 'react';
import { 
  Box, 
  Card, 
  CardHeader, 
  CardBody, 
  Grid, 
  Image, 
  ResponsiveContext, 
  Text } from 'grommet';
import countriesListData from '../CountriesList/countriesListData';


const CountriesCard =  () => {
  const size = useContext(ResponsiveContext);

  const countriesArray = countriesListData.map(({id, name, region, population, capital}) => (
        <Grid key={id} columns={size !== 'small' ? 'small' : '100%'} gap="medium">
          <Card  
            elevation="small"
            height="small" 
            width="small" 
            background="light-1">
            <CardHeader>
              <Box height="xsmall" width="small">
                <Image
                  fit="cover"
                  src="https://www.90daykorean.com/wp-content/uploads/2020/07/Countries-of-the-World.jpg"
                />
              </Box>
            </CardHeader>
            <CardBody pad="small">
              <Box pad={{ bottom: 'xsmall'}}>
                <Text size='small' weight='bold'>{name}</Text>
              </Box>
              <Box>
                <Text size='xsmall'>Region: {region}</Text>
                <Text size='xsmall'>Population: {population}</Text>
                <Text size='xsmall'>Capital: {capital}</Text>
              </Box>
            </CardBody>
          </Card>
        </Grid>
    ))
  
    return (
      <Box>
        {countriesArray}
      </Box>
    );
  };

export default CountriesCard;

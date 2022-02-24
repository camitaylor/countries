import React, { useContext } from 'react';
import { 
  Box, 
  Card, 
  CardHeader, 
  CardBody, 
  Grid,
  grommet,
  Grommet, 
  Image, 
  ResponsiveContext, 
  Text } from 'grommet';

const CountriesListCard =  (countriesListData) => {
  const size = useContext(ResponsiveContext);

  const countriesArray = (
    <Grid columns={size !== 'small' ? 'small' : '100%'} gap="xlarge">
      {/* {countriesListData.map((flag, name, region, population, capital) => ( */}
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
                  // src={flag}
                />
              </Box>
            </CardHeader>
            <CardBody pad="small">
              <Box
                margin={{ left: "small" }}
                pad={{ bottom: 'xsmall'}}
              >
                {/* <Text size='small' weight='bold'>{name}</Text> */}
              </Box>
              <Box
                margin={{ left: "small" }}
                pad={{ bottom: 'xsmall'}}
                >
                {/* <Text size='xsmall'>Region: {region}</Text> */}
                {/* <Text size='xsmall'>Population: {population}</Text> */}
                {/* <Text size='xsmall'>Capital: {capital}</Text> */}
              </Box>
            </CardBody>
          </Card>
      {/* ))} */}
    </Grid>
  )
  
  return (
    <Grommet theme={grommet}>
      <Box
        pad="large"
        margin={{ left: "large" }}
      >
        {countriesArray}

        {/* <Grid columns={size !== 'small' ? 'small' : '100%'} gap="xlarge">
        {countriesListData.map((flag, name, region, population, capital) => (
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
        ))} 
        </Grid> */}
      </Box>
    </Grommet>  
  )
};

export default CountriesListCard;

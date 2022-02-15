import React from 'react';
import { Box, Card, CardHeader, CardBody, Image, Text } from 'grommet';

const CountriesCard = () => {
  return (
    <Card  height="small" width="small" background="light-1">
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
          <Text size='small' weight='bold'>United States</Text>
        </Box>
        <Box>
          <Text size='xsmall'>Region: North America</Text>
          <Text size='xsmall'>Population: A LOT</Text>
          <Text size='xsmall'>Capital: Washington DC</Text>
        </Box>
      </CardBody>
    </Card>
  )
}

export default CountriesCard;
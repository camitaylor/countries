import React from 'react';
import { Card, Image } from 'grommet';


const DetailsFlagCard = ({ countryData }) => {
  const {flags} = countryData[0];

  return (
    <Card 
      height="450px" 
      width="675px"
      elevation="large" 
    >
      <Image
        fit="cover"
        src={flags.svg}
      />
    </Card> 
  );
};

export default DetailsFlagCard;
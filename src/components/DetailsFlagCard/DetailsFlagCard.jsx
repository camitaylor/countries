import React from 'react';
import { Card, Image } from 'grommet';


const DetailsFlagCard = ({ countriesData }) => (
    <Card 
      height="450px" 
      width="600px"
      elevation="large" 
    >
      <Image
        fit="cover"
        src={countriesData[5].flag}
      />
    </Card> 
);

export default DetailsFlagCard;
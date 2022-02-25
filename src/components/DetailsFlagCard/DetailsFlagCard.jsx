import React from 'react';
import { Card, Image } from 'grommet';


const DetailsFlagCard = ({ flag }) => (
    <Card 
      height="500px" 
      width="500px"
      elevation="large" 
    >
      <Image
        fit="cover"
        src={flag}
      />
    </Card> 
);

export default DetailsFlagCard;
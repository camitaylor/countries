import React from 'react';
import { Box, Button, Grid, Select, TextInput } from 'grommet';
import CountriesCard from '../CountriesCard/CountriesCard';
import AppBar from '../AppBar/AppBar';

const CountriesList = () => {
  return (
    // <Box width="xlarge" height='xlarge' background='green'>
    //   <Box flex="true"><CountriesCard /></Box>
    //   <Box flex="true"><CountriesCard /></Box>
    //   <Box flex="true"><CountriesCard /></Box>
    //   <CountriesCard />
    //   <CountriesCard />
    //   <CountriesCard />
    // </Box>
//   )
// }

    // <Grid
    //   margin='large'
    //   // height="large"
    //   rows={['xsmall', 'medium', 'medium']}
    //   columns={['small', 'small', 'small', 'small']}
    //   gap={{
    //     row: "large",
    //     column: "large"
    //   }}
    //   areas={[
    //     { name: 'appBar', start: [0, 0], end: [5, 0] },
    //     { name: 'textInput', start: [0, 1], end: [0, 1] },
    //     { name: 'button', start: [0, 1], end: [0, 1] },
    //     { name: 'select', start: [1, 1], end: [1, 1] },
    //     { name: 'card', start: [0, 2], end: [1, 2] }
    //   ]}
    //  >
      
       <Box 
        fill
        // justify='center' 
        // align='center'>
        >
          <Box 
            direction='row' 
            gap='xlarge' 
            justify='between' 
            margin={{ right: 'xlarge', left: 'xlarge', top: 'large', bottom: 'medium' }} >
            <Box direction='row'
            gap='small'>
         <TextInput
        //  gridArea="textInput"
         placeholder="type here"
        //  justify='start'
       // value={value}
       // onChange={event => setValue(event.target.value)}
       />
        <Button 
          //  gridArea='button'
          size="small"
           primary label="search" />
       </Box> 
       <Box
      //  direction='row'
       gap='xlarge' 
       justify='between' 
      >
        <Select
        //  gridArea='select'
        //  justify='end'
          options={[ 'Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America' ]}
          placeholder="Select a region"
       // value={value}
       // onChange={({ option }) => setValue(option)}
     />
       </Box>
      </Box>
       <br />
        <Box 
          fill 
          direction='row'
          margin={{ right: 'xlarge', left: 'xlarge', top: 'medium', bottom: 'medium'}}
          gap='xlarge'
          // justify='center' 
          // align='center'>
          //  gridArea='card'> 
          // justify='start'>  
          // margin='xsmall'>
          >
          <Box> 
            {/* direction='row'> */}
            <CountriesCard />
          </Box>
          <Box> 
            <CountriesCard />
          </Box>
          <Box> 
            <CountriesCard />
          </Box>
          <Box> 
            <CountriesCard />
          </Box>
        </Box>
        <Box 
          fill 
          direction='row'
          margin={{ right: 'xlarge', left: 'xlarge', top: 'medium', bottom: 'medium'}}
          gap='xlarge'>
          <Box> 
            <CountriesCard />
          </Box>
          <Box> 
            <CountriesCard />
          </Box>
          <Box> 
            <CountriesCard />
          </Box>
          <Box> 
            <CountriesCard />
          </Box>
        </Box>
     </Box>
   )
} 

export default CountriesList;
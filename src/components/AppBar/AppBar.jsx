import React from 'react';
import { Box, Button, Heading, Image } from 'grommet';

const AppBar = ({darkMode, setDarkMode}) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
    >
      <Box 
        height='xxsmall' 
        width='small'
        direction='row'
        align='start'
        gap='xsmall'
        justify='between'
        pad={{ left: 'small', top: 'xxsmall'}} >
          <Box
            height='xxsmall'
            width='xxsmall'>
              <Image
                fit="cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWmzh-BtnUhJJ_LvBCzINrGJA4IKJm5Hojg&usqp=CAU"
                />
          </Box>
          <Heading 
            level='3' 
            margin='none' 
            pad={{ top: 'small'}}
          >
            Countries
          </Heading>
        </Box>
        <Button 
          primary 
          label="mode"
          onClick={() => setDarkMode(!darkMode)}
        />
    </Box>
);

export default AppBar;
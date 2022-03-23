import React from 'react';
import { Box, Select } from 'grommet';

const FilterField = () => {
  return (
    <Box
      margin={{ top: "large", right: "xlarge" }}  
      align="end"
      direction="row-responsive"
    >
      <Select
        options={[ 'Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America' ]}
        placeholder="Select a region"
        // value={value}
         // onChange={({ option }) => setValue(option)}
      />
    </Box>
  )
}

export default FilterField;
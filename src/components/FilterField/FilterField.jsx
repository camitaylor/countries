import React from 'react';
import { Box, Select } from 'grommet';

const FilterField = ({optionValue, setOptionValue, filteredRegions}) => {

  const handleRegionFilterChange = (e) => {
    setOptionValue(e.target.value);    
  }

  const regionOptions = filteredRegions.map((region) => (
      region
    ))

  return (
    <Box
      margin={{ top: "large", right: "xlarge" }}  
      align="end"
      direction="row-responsive"
    >
      <Select
        options={regionOptions}
        placeholder="Select a region"
        value={optionValue}
        onChange={handleRegionFilterChange}
      />
    </Box>
  )
};

export default FilterField;
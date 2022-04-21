import React from 'react';
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';


const SearchField = ({searchTerm, setSearchTerm}) => {

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);   
  }

  return (
    <Box>
      <Box
        margin={{ top: "large", right: "xlarge", left: "xlarge" }}  
        align="start"
        direction="row-responsive"
        gap="small"
      >
        <TextInput 
          icon={<Search />} 
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </Box>   
    </Box>
  )
};

export default SearchField;
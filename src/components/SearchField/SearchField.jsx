import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import CountriesListCard  from '../CountriesListCard/CountriesListCard';

const SearchField = ({countriesData, searchValue, setSearchValue}) => {
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState(searchValue);
  

  const handleSearchInputChange = (e) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    const results = countriesData.filter(country =>
      country.toLowerCase().includes(searchValue)
    );
    setSearchValue(results);
  }, [searchValue]);

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
        value={value}
        onChange={handleSearchInputChange}
      />
      <Button
        margin={{ top: "xsmall"}}
        size="small"
        primary label="search"
        onClick={onFormSubmit}
      />
    </Box>
     {searchValue.map(item => (
          <li>{item}</li>
     ))}
    </Box>
  )
}

export default SearchField;
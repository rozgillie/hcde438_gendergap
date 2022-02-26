import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


// referred to MUI website for search bar code with autocomplete (https://mui.com/components/autocomplete/)

function FreeSolo() {
    return (
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="company-search"
          freeSolo
          options={companies.map((option) => option.name)}
          renderInput={(params) => <TextField {...params} label="Search for a Company..." />}
        />
      </Stack>
    );
  }

  // list of company options for search bar
  const companies = [
      {name: "A"},
      {name: "B"}
  ]
 

  
export default FreeSolo;
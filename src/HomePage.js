import Button from '@mui/material/Button';
import {useState} from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';





function HomePage({afterMainPage}){
  const [text, setText] = useState("");
  console.log(text);

  function send() {
    afterMainPage(2);
  }

    return(
    <div className="App">
        <header className="header">
          <div className="logo"/>
          <span className="title">Gender Gap Analysis</span> 
        </header>
          <h1>Creating Gender Gap Transparency</h1>
          <section className="search">
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="company-search"
              options={companies.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} id = "textInput" label="Search for a Company..."/>}
              inputValue={text}
              onChange={(event, text) => {
                setText(text);
              }}
            />
          </Stack>
            <Button onClick={send} variant="contained" className="button">Search</Button>
          </section>
        <div className="footer">
          <h4>HCDE 438: Web Technologies</h4>
        </div>
      </div>
    )
}

const companies = [
  {name: "REA Group Ltd"},
  {name: "L'Oreal SA"},
  {name: "Moneysupermarket.Com Group PLC"},
  {name: "General Motors Co"},
  {name: "Dnb ASA"}
]

export default HomePage;


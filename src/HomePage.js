import SearchBar from './SearchBar';
import Button from '@mui/material/Button';

export default function HomePage(){
    return(
<div className="App">
    <header className="header">
      <div className="logo"/>
      <span className="title">Gender Gap Analysis</span> 
    </header>
      <h1>Creating Gender Gap Transparency</h1>
      <section className="search">
        <SearchBar className="searchbar"/>
        <Button variant="contained" className="button">Search</Button>
      </section>
    <div className="footer">
      <h4>HCDE 438: Web Technologies</h4>
    </div>
  </div>
    )
}
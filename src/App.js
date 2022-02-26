'use strict';
import './App.css';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes> {/* the collection of routes to match */}
          {/* if currentUrlPath === "home" */}
          <Route path="/" element={<App />} />

      </Routes>
      </BrowserRouter>
  );
}

function App(){
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
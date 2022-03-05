import './App.css';
import HomePage from './HomePage.js';
import Company from './Company.js';
import {useState} from 'react';


function App(){
  const [page, setPage] = useState(1);
  function pageSet(){
    if (page === 1){
      return <HomePage afterMainPage = {setPage}/>
    }
    else if(page === 2){
      return <Company afterMainPage = {setPage}/>
    }
  }
  return(
    pageSet()
  )
}

export default App;
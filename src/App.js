import React, { useState } from 'react'
import Nav from './Nav';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult'

function App() {
  const [searchText,setSearch]=useState('');
  const[supData,setSupData]=useState([]);
 async function searchSup(){
   const response=await fetch(`https://www.superheroapi.com/api.php/4018121308412863/search/${searchText}`)
   const data=await response.json();
   console.log(data)
   setSupData(data.results);
  }
  function change(e){
    const searchHero=e.target.value;

setSearch(searchHero)
if(searchHero.length===0){
  setSupData([]);
}
    if(searchHero.length>3){
searchSup();
    }
  }
  return (
    <div className='App'>
      <Nav/> 
       <div className='main'>
      <SearchBar searchText={searchText}  change={change}/>
     <SearchResult supData={supData} />
    
     </div>
     
    </div>
  );
}

export default App

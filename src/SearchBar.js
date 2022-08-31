import React from 'react'

function SearchBar(props) {
  const{change,searchText}=props;
  return (
    <div>
    <input id="searchbar" type="search" placeholder='Hunt superhero here......'
    onChange={change}  value={searchText}></input>
   
    </div>
  );
}

export default SearchBar;
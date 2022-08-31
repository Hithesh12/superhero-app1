import React from 'react'
import Searchreslist from './Searchreslist';

function SearchResult(props) {
  const {supData=[]}=props;
  console.log('supData',supData);
  return (
    <div>
     {supData.map(sup =><Searchreslist data={sup}/>
     )}  
    </div>
  );
}

export default SearchResult
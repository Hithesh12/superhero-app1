import React from 'react'

function Searchreslist(props) {
  const{data}=props;
  console.log(data);
  return (
    <div className='searchresult'>
    <div className='left'>
      <img src={data.image.url} alt="super"></img>
    </div>
    <div className='right'>
      <h1>{data.name}</h1>
    <span style={{color:'red',marginBottom:6}}>{data.biography['full-name']}</span>
    <div className='stats'>
    <div>strength:{data.powerstats.strength}</div>
    <div>speed:{data.powerstats.speed}</div>
    <div>power:{data.powerstats.power}</div>
    </div>
    </div>
    </div>
  );
}

export default Searchreslist
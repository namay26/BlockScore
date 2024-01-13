import React, { Component } from 'react';
import Navbar from './Navbar';
import Flag from './Flag';
import data from './schedule';

function Home(){
//const word=[0];

  return (<>

<Navbar />
<div className='container my-3' style={{paddingBottom:'1px'}}>
<center><h1>Upcoming Match</h1></center> 
</div> 
{
data.map((data,i) => (
<Flag value1={`${data.Teama}`} value2={`${data.Teamb}`} day={`${data.day}`} />
)) 
}
</>
  );
};

export default Home;

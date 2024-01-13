import React, { useState } from 'react'
import Navbar from './Navbar';
import Flag from './Flag';
import { useLocation } from 'react-router-dom';

export default function BuyTicket(props) {
    const searchParams = new URLSearchParams(useLocation().search);
    const val1 = searchParams.get('a');
    const val2 = searchParams.get('b');
    const day = searchParams.get('c');

    const styles = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',  
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#eeeeee', borderRadius:"15px"
    }

    const [count, setCount] = useState(0);
      
    const price = (e) => {
        setCount(0.005*e.target.value);
      };

    
return (
<>
<Navbar/>
<div  className='container my-3'  style={styles}>
<div id="Match">
  <table align="center" width="95%">
    <thead>
    <tr width="100%" align="center">
      <td width="25%">{val1}</td>
      <td width="50%" align="center">
      <div className='container my-3'>Date - {day}/03/2024 || Time - 08:45 GMT</div>
      <div className='container my-3'>Loacation : {val1}'s Home Stadium </div>
      </td> 
      <td width="25%">{val2}</td>
    </tr>
    </thead>  
  </table>
</div>
<div>
    <center>
    <table width="30%">
    <thead>
    <tr width="100%">
      <td width="25%" align="right"><input type="number" onChange={price} placeholder='Number of Tickets' required /></td>
      <td width="50%" align="center">
      <div className='container my-3' id="price">{count}Eth </div>
      </td>
      <td width="25%"> <input class="btn btn-primary" type="button" value="Pay Now" /></td>
    </tr>
    </thead>  
  </table>
  </center> 
</div>
</div>  
</>
)
}


//<Flag value1={`${val1}`} value2={`${val2}`} />
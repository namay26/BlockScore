import React from 'react'
import { Link } from 'react-router-dom';

export default function Flag(props) {
  const styles = {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',  
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#eeeeee', borderRadius:"15px"
  }
    

return (
<div  className='container my-3' >
<div id="Match" style={styles}>
  <table align="center" width="95%">
    <thead>
    <tr width="100%" align="center">
      <td width="25%">{props.value1}</td>
      <td width="50%" align="center">
      <div className='container my-3'>Date - {props.day}/03/2024 || Time - 08:45 GMT</div>
      <Link to={`/buytkt?a=${props.value1}&b=${props.value2}&c=${props.day}`}><input className="btn btn-primary my-1" type="button" value="Buy Ticket" /></Link>
      </td>
      <td width="25%">{props.value2}</td>
    </tr>
    </thead>  
  </table>
</div>
</div>  
)
}

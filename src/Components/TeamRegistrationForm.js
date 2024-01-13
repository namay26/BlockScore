import React, { useState } from 'react';
import Navbar from './Navbar';
import { SHA256 } from 'crypto-js';

const TeamRegistrationForm = () => {
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [players, setPlayers] = useState([{ name: '', jerseyNumber: '' }]);

  const handlePlayerChange = (index, field, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index][field] = value;
    setPlayers(updatedPlayers);
  };

  const handleAddPlayer = () => {
    setPlayers([...players, { name: '', jerseyNumber: '' }]);
  };

  const handleRemovePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };

  const handleDownload = () => {
    const formData = {
      teamName,
      password,
      players,
    };

    // Convert the form data to a JSON string
    const jsonData = JSON.stringify(formData);

    // Create a Blob from the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'team_registration_data.json';

    // Simulate a click to trigger the download
    downloadLink.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ teamName, password, players });
  };

  const styles = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',  
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#e1e1e1', borderRadius:"15px"
}

const hash = (e) => {
  const hashed = SHA256(e.target.value).toString();
  setPassword(hashed);
};

  return (
    <>
    <Navbar />
    <br />
    <div style={styles} className='container my-3'>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Enter Team Name</label>
        <input type="text" className="form-control" id="teamName" onChange={(e) => setTeamName(e.target.value)} aria-describedby="emailHelp" placeholder="Enter your Team Name" />
      </div>

      <div className="form-group">
        <label htlmFor="exampleInputEmail1">Enter Password</label>
        <input type="password" id="password" onBlur={hash} className="form-control" aria-describedby="emailHelp" placeholder="Enter your Password" />
      </div>
        
        
        <table className="table table-striped">
  <thead>
    <tr>
      <th colSpan="4">
      <center><h3>Players</h3></center>
      </th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Player Name</th>
      <th scope="col">Jersey No.</th>
    </tr>
  </thead>
  <tbody>
  {players.map((player, index) => (
      <>
    <tr key={index}>
    
    
      <th scope="row">{index+1}</th>
      <td><input
              type="text"
              id={`playerName${index}`}
              value={player.name}
              onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
            /></td>
      <td><input
              type="text"
              id={`jerseyNumber${index}`}
              value={player.jerseyNumber}
              onChange={(e) => handlePlayerChange(index, 'jerseyNumber', e.target.value)
              }/></td>
      <td><button type="button" onClick={() => handleRemovePlayer(index)}  className="btn btn-primary my-1">Remove Player</button></td>
      
    </tr>
    </>
    ))}
  </tbody>
</table>
       
     
<table className="table">
  <tbody>
    <tr width="100%" align="center">
      <td width="33%">
        <button type="button" onClick={handleAddPlayer}  className="btn btn-primary my-1">
          Add Player
        </button>
      </td>
      <td width="30%">
      <button type="submit"  className="btn btn-primary my-1">Submit</button>
      </td>
      <td width="37%">
      <button type="button" onClick={handleDownload}  className="btn btn-primary my-1">
        Download Team Data
      </button>
      </td>
      </tr>
    </tbody>
    </table>
    </form>
    </div>
</>
  );
};

export default TeamRegistrationForm;

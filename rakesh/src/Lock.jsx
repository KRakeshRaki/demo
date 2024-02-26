import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';



const Lock = () => {

  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyPassword = () => {
    if (password === 'raki') {
      setVerified(true);
    } else {
      setVerified(false);alert('Enter correct password')
    }
  };

  return (
    <div>
  
      <form className='wallpaper'>o
        <br /><br />
        
        {!verified ? (
      <p>
       
        <br /><br /><br /><br /><br />
        
        <input
          type="text"
          placeholder="Enter Correct password"
          value={password}
          onChange={handleChange}
         
        />
        <br /><br />
        <button onClick={verifyPassword}>Verify</button><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </p>) : ( 
        <Link to='/home'><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Press<button>Ok</button>to continue <br /><br /><br /><br /><br /><br /><br /></Link>)}
        
        <br /><br /><br /><br />
      
      
      </form>
  </div>
  )
}

export default Lock

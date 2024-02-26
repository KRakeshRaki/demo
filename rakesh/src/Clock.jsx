import React from 'react'
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
const Clock = () => {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every second

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div>
      

      <form className='camhole'>o
         <br /><br /><br /><br />
         <h2>Date and Current Time:</h2>
      <p>{Time.toLocaleDateString()}</p>
      <p>{Time.toLocaleTimeString()}</p>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <footer><pre ><button className='button0'>  ...  </button>
      <Link to='/home'>
      <button className='button0'>Home</button>
      </Link>
      <Link to='/home'>
      <button className='button0'>   ~   </button>
      </Link>
      </pre></footer>
      </form>
    </div>
  );
};

export default Clock

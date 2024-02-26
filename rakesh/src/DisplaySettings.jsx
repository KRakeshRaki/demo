import React from 'react'
import {Link} from 'react-router-dom';

const DisplaySettings = () => {
  return (
    <div>
       <br /><br />
         <form className='camhole'>o
        <br /><br /><br /><br /><br />
        
        <h1>this is display settings</h1>
      
      <footer><pre ><button className='button0'>  ...  </button>
      <Link to='/home'>
      <button className='button0'>Home</button>
      </Link>
      <Link to='/settings'>
      <button className='button0'>   ~   </button>
      </Link>
      </pre></footer>
      </form>
    </div>
  )
}

export default DisplaySettings

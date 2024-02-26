import React from 'react'
import {Link} from 'react-router-dom';
import Calender from 'react-calendar';

const Calenders = () => {
  return (
    <div>
     
    <form className='camhole'>o
   <br /><br /><br />
   <Calender/>
   
   <br />
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
  )
}

export default Calenders


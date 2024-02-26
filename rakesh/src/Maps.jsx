import React from 'react'
import {Link} from 'react-router-dom';

const Maps = () => {
  return (
    <div>
         <form className='camhole'>o
        <br /><br />
        
        
        <iframe className='GoogleMaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30499770.63756756!2d82.75252934999999!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1708081082252!5m2!1sen!2sin"></iframe>
      
       
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

export default Maps

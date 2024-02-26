import React from 'react'
import {Link} from 'react-router-dom';
import Webcam from 'webcam-react';
import gphotos from './images/gphotos.png'


const Camera = () => {
  return (
    <div>
     
         <form className='camhole'>o
        <br /><br />
        <p ><Webcam width={240} height={400}/></p>
        <h>&#160;</h><h>&#160;</h>
        <Link to='/photos'><h className='icons'><img src={gphotos} alt="photos" width={50} /></h></Link><h>&#160;</h>
        <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h>
        <Link to='/photos'><button >ok</button></Link><h>&#160;</h>
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

export default Camera

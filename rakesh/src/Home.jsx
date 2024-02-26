import React from 'react'
import {Link} from 'react-router-dom';
import './Disp.css'
import YT from './images/YT.jpg'
import googlemaps from './images/googlemaps.png'
import gphotos from './images/gphotos.png'
import calculator from './images/calculator.png'

const Home = () => {
  return (
    <div>
        <form className='wallpaper'>o
   <div>
       br
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br />
        <br />
        <br />
        <br />
        <Link to='/maps'><h className='icons'><img src={googlemaps} alt="Google maps" width={50}/></h></Link><h>&#160;</h>
        <Link to='/youtube'><h className='icons'><img src={YT} alt="YouTube" width={60}/></h></Link><h>&#160;</h>
        <br />
        <Link to='/calculator'><h className='icons'><img src={calculator} alt="calculator" width={50} /></h></Link><h>&#160;</h>
        <Link to='/clock'><h className='icons'>&#9200;</h></Link><h>&#160;</h>
        <Link to='/camera'><h className='icons'>&#128248;</h></Link><h>&#160;</h>
        <Link to='/photos'><h className='icons'><img src={gphotos} alt="photos" width={50} /></h></Link><h>&#160;</h>
        <br />
        <Link to='/contacts'><h className='icons'>&#128222;</h></Link><h>&#160;</h>
        <Link to='/messages'><h className='icons'> &#128233;</h></Link><h>&#160;</h>
        <Link to='/settings'><h className='icons'>&#9881;</h></Link><h>&#160;</h>
        <Link to='/calenders'><h className='icons'>&#128197;</h></Link><h>&#160;</h>
        <br />
     <br />
      <footer><pre ><button className='button0'>  ...  </button>
      <Link to='/home'>
      <button className='button0'>Home</button>
      </Link>
      <Link to='/home'>
      <button className='button0'>   ~   </button>
      </Link>

      </pre>
      </footer>
      </div>
      </form>
    </div>
  )
}

export default Home

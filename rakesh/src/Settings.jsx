import React from 'react'
import {Link} from 'react-router-dom';

const Settings = () => {
  return (
    <div>
       <br /><br />
         <form className='camhole'>o
        <br /><br />
        <section >
      
        <Link to='/displaysettings'>
           <h4 className='se'>Display settings</h4>
        </Link>
        <Link to='/security'>
           <h4 className='se'>Security</h4>
        </Link>
        <Link to='/addsettings'>
           <h4 className='se'>Additional settings</h4>
        </Link>
        <Link to='/aboutdevice'>
           <h4 className='se'>About divice</h4>
        </Link><br /><br /><br /><br /><br /><br /><br /><br />
        <br />

        </section>
      
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

export default Settings

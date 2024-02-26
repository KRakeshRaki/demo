import React from 'react'
import './Disp.css'
import Camera from './Camera';
import Clock from './Clock';
import YouTube from './YouTube';
import Calenders from './Calenders';
import Maps from './Maps';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import Nav from './Nav';
import Off from './Off';
import Settings from './Settings';
import DisplaySettings from './DisplaySettings';
import Security from './Security';
import AboutDevice from './AboutDevice';
import AddSettings from './AddSettings';
import Messages from './Messages';
import Calculator from './Calculator';
import Contacts from './Contacts';
import Photos from './Photos';
import Lock from './Lock';
import Temp from './Temp';


    
const App = () => {
  return (
    <div>
      <Off/>
  {/* <Temp/> */}
      <Routes>
        <Route path='/nav' element = {<Nav/>}/>
        <Route path='/lock' element = {<Lock/>}/>
        <Route path='/camera' element = {<Camera/>}/>
        <Route path='/clock' element = {<Clock/>}/>
        <Route path='/youtube' element = {<YouTube/>}/>
        <Route path='/calenders' element = {<Calenders/>}/>
        <Route path='/maps' element = {<Maps/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/settings' element = {<Settings/>}/>
        <Route path='/displaysettings' element = {<DisplaySettings/>}/>
        <Route path='/security' element = {<Security/>}/>
        <Route path='/addsettings' element = {<AddSettings/>}/>
        <Route path='/aboutdevice' element = {<AboutDevice/>}/>
        <Route path='/contacts' element = {<Contacts/>}/>
        <Route path='/photos' element = {<Photos/>}/>
        <Route path='/messages' element = {<Messages/>}/>
        <Route path='/calculator' element = {<Calculator/>}/>
    

      </Routes> 
   
 
      <br /><br /><br /><br /><br /><br />
    </div>
  )}


export default App


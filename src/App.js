import './App.css';
import Navbar from './Component/Navbar/navbar';
import Home from './Pages/Home/home';
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';

function App() {
  const [sideNavbar , setSideNavbar]= useState(true);

  const setSideNavbarFunc = (value)=>{
    setSideNavbar(value)
  }

  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar}/>
      <Routes>
        <Route path='/' element ={<Home sideNavbar={sideNavbar}/>}/>
      </Routes>
    </div>
  );
}

export default App;

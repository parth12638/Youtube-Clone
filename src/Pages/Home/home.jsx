import React from 'react'
import SideNavbar from '../../Component/SideNavbar/sideNavbar'
import HomePage from '../../Component/Homepage/homePage'
import './home.css'
const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
      <SideNavbar sideNavbar={sideNavbar}/>
      <HomePage/>
    </div>
  )
}

export default Home

import React,{useState} from 'react'
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SideNavbar from '../SideNavbar/sideNavbar';
const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
    const [userPic,setUserPic]= useState("https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png");

    const [navbarModel,setNavbarModel] = useState(false);
    const handleClickModel =()=>{
        setNavbarModel(prev => !prev);
    }
    const sideNavbarFunc = ()=>{
        setSideNavbarFunc(!sideNavbar)
    }
  return (
    <div className='navbar'>


      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
            <MenuIcon sx={{color:"white"}} />
        </div>
        <div className="navbar_youtubeImg">
            <YouTubeIcon sx={{fontSize:"34px"}}  className='navbar_youtubeImage'/>
            <div className="navbar_utubeTitle">YouTube</div>
        </div>
      </div>


        <div className="navbar-middle">
            <div className="navbar_searchBox">
                <input className='navbar_searchBoxInput' type='text'  placeholder='Search'/>
                <div className="navbar_searchIconBox">
                <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
                </div>
            </div>
            <div className="navbar_mic">
                <MicIcon sx={{ color: "white" }} />
            </div>
        </div>



        <div className="navbar-right">
            <VideoCallRoundedIcon sx={{fontSize:"30px", cursor:"pointer", color: "white" }}/>
            <NotificationsRoundedIcon sx={{fontSize:"30px", cursor:"pointer", color: "white" }}/>
            <img onClick={handleClickModel} src={userPic} alt="logo" className="navbar-right-logo" />

            
            {   navbarModel &&
                <div className="navbar-model">
                <div className="navbar-model-option">Profile</div>
                <div className="navbar-model-option">Log-Out</div>
                <div className="navbar-model-option">Log-In</div>
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar


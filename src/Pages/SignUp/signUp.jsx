import React from 'react'
import './signup.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className='signUp'>
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon sx={{fontSize:"54px"}} className='login_youtubeImage'/>
          Sign-Up
        </div>
        <div className="signUp_Inputs">
          <input type="text" className='signUp_inputs_inp' placeholder='Channel Name' />
          <input type="text" className='signUp_inputs_inp' placeholder='User Name' />
          <input type="password" className='signUp_inputs_inp' placeholder='Password' />
          <input type="text" className='signUp_inputs_inp' placeholder='About Your Channel' />
          <div className="image_upload_signup">
            <input type="file" />
            <div className="image_upload_signup_div">
              <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"} className='image_default_signUp' alt="" />
            </div>
          </div>
          <div className="signUpBtns">
            <div className="signUpBtn">Sign Up</div>
            <Link to={'/'} className="signUpBtn">Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
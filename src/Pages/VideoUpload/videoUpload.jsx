import React from 'react'
import './videoUpload.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const VideoUpload = () => {
  return (
    <div className='videoUpload'> 
        <div className="uploadBox">
            <div className="uploadVideoTitle">
                <YouTubeIcon sx={{fontSize:"54px",color:"red" }}/>
                UPLOAD VIDEO
            </div>

            <div className="uploadForm">
                <input className='uploadFormInputs' type="text" placeholder='Title of Video' />
                <input className='uploadFormInputs' type="text" placeholder='Description of Video' />
                <input className='uploadFormInputs' type="text" placeholder='Category' />
                <div>Thumbnail <input type="file" accept='image/*' /></div>
                <div>Video <input type="file" accept='video/mp4, video/webm, video/*' /></div>

            </div>
            <div className="uploadBtns">
                <div className="uploadBtns-form">
                    Upload
                </div>
                <Link to={'/'} className="uploadBtns-form">
                    Home
                </Link>
            </div>
        </div> 
    </div>
  )
}

export default VideoUpload
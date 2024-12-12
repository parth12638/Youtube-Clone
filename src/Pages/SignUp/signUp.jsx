import React ,{useState} from 'react'
import './signup.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import axios from 'axios'



const SignUp = () => {
  const [uploadedImageUrl,setUploadedImageUrl]= useState("https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg")

  const [signUpField,setSignUpField]=useState({"userName":"","password":"","channelName":"","about":"","profilePic":uploadedImageUrl});

  const handleInputFields =(event,name)=>{
    setSignUpField({
      ...signUpField,[name]:event.target.value
  })
  }
console.log(signUpField)


  const uploadImage= async (e)=>{
    console.log("uploading");
    const files= e.target.files;
    const data = new FormData();
    data.append('file', files[0]);

    
    data.append('upload_preset', 'youtube-clone');
    try{
      // cloudName ='ds8t5hb7h'
        const response = await axios.post("https://api.cloudinary.com/v1_1/ds8t5hb7h/image/upload", data)
        const imageUrl = response.data.url;
        setUploadedImageUrl(imageUrl);
        setSignUpField({
          ...signUpField,"profilePic":imageUrl
      })
    }catch(err){
      console.log(err);
    }
    // youtube-clone

  }

  return (
    <div className='signUp'>
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon sx={{fontSize:"54px"}} className='login_youtubeImage'/>
          Sign-Up
        </div>


        <div className="signUp_Inputs">
          <input type="text" value={signUpField.channelName} onChange={(e)=>{handleInputFields(e,"channelName")}} className='signUp_inputs_inp' placeholder='Channel Name' /> 
          <input type="text" value={signUpField.userName} onChange={(e)=>{handleInputFields(e,"userName")}} className='signUp_inputs_inp' placeholder='User Name' />
          <input type="password" value={signUpField.password} onChange={(e)=>{handleInputFields(e,"password")}}  className='signUp_inputs_inp' placeholder='Password' />
          <input type="text" value={signUpField.about} onChange={(e)=>{handleInputFields(e,"about")}}  className='signUp_inputs_inp' placeholder='About Your Channel' />



          <div className="image_upload_signup">
            <input type='file' onChange={(e)=>uploadImage(e)} />
            <div className="image_upload_signup_div">
              <img src={uploadedImageUrl} className='image_default_signUp' alt="" />
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
import React, { useState } from "react";
import "./videoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const VideoUpload = () => {
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videoType: "",
    videoLink: "",
    thumbnail: "",
  });

  const [loader,setLoader]=useState(false);


  const handleOnChangeInput = (event, name) => {
    setInputField({
      ...inputField,
      [name]: event.target.value,
    });
  };

  const uploadImage = async (e, type) => {
    setLoader(true)
    console.log("uploading");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);

    data.append("upload_preset", "youtube-clone");
    try {
      // cloudName ='ds8t5hb7h'

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/ds8t5hb7h/${type}/upload`,
        data
      );
      const url = response.data.url;
      setLoader(false)

      let val = type === "image" ? "thumbnail" : "videoLink";
      setInputField({
        ...inputField,
        [val]: url,
      });
    } catch (err) {
        setLoader(false)

      console.log(err);
    }
    // youtube-clone
  };

  console.log(inputField);
  return (
    <div className="videoUpload">
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          UPLOAD VIDEO
        </div>

        <div className="uploadForm">
          <input
            value={inputField.title}
            onChange={(e) => handleOnChangeInput(e, "title")}
            className="uploadFormInputs"
            type="text"
            placeholder="Title of Video"
          />

          <input
            value={inputField.description}
            onChange={(e) => handleOnChangeInput(e, "description")}
            className="uploadFormInputs"
            type="text"
            placeholder="Description of Video"
          />

          <input
            value={inputField.videoType}
            onChange={(e) => handleOnChangeInput(e, "videoType")}
            className="uploadFormInputs"
            type="text"
            placeholder="Category"
          />

          <div>
            Thumbnail{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e, "image")}
            />
          </div>
          <div>
            Video{" "}
            <input
              type="file"
              accept="video/mp4, video/webm, video/*"
              onChange={(e) => uploadImage(e, "video")}
            />
          </div>
          {
                loader && <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                          </Box>
            }
        </div>
            
        

        <div className="uploadBtns">
          <div className="uploadBtns-form">Upload</div>
          <Link to={"/"} className="uploadBtns-form">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;

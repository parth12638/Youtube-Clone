import React from "react";
import "./video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
const Video = () => {
  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          <video width="400" controls autoPlay className="video_youtube_video">
            <source
              src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
              type="video/mp4"
            />
            Your Browser doesn't support the video tag
          </video>
        </div>

        <div className="video_youtubeAbout">
          <div className="video_utubeTitle">{"Javascript For Beginners"}</div>
          <div className="youtube_videoProfileBlock">
            <div className="youtube_videoProfileBlock_left">
              <div className="youtube_videoProfileBlock_left_img">
                <img
                  className="youtube_videoProfileBlock_left_image"
                  src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw"
                  alt=""
                />
              </div>
              <div className="youtubevideo_subsView">
                <div className="youtubePostProfileName">{"User1"}</div>
                <div className="youtubePostProfilesubs">{"20000"}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_like">
                <ThumbUpOutlinedIcon />
                <div className="youtube_video_likeBlock_NoOfLikes">{22}</div>
              </div>
              <div className="youtubeVideoDivider"></div>
              <div className="youtube_video_likeBlock_like">
                <ThumbDownAltOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="youtube_video_About">
            <div>2024-09-30</div>
            <div>Cool and interesting videoooo</div>
          </div>
        </div>

        <div className="youtubeCommentSection">
          <div className="youtubeCommentSectionTitle">2 Comments</div>
          <div className="youtubeSelfComment">
            <img
              className="video_youtubeSelfCommentProfile"
              src="https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw"
              alt=""
            />
            <div className="addAComment">
              <input
                type="text"
                className="addACommentInput"
                placeholder="Add a comment"
              />
              <div className="cancelSubmitComment">
                <div className="cancelComment">Cancel</div>
                <div className="cancelComment">Comment</div>
              </div>
            </div>
          </div>
          <div className="youtubeOthersComment">
            <div className="youtubeSelfComment">
              <img
                className="video_youtubeSelfCommentProfile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0KiT7nptAWb_C1JjKcjrZDUZC3iHz60h6UotB2nrDI_kR9k1Hir9OLZa0UTDlkP3p5Q&usqp=CAU"
                alt=""
              />
              <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">UserName</div>
                  <div className="commentTimingOthers">1 day ago</div>
                </div>

                <div className="otherCommentSectionComment">Interesting</div>
              </div>
            </div>
            <div className="youtubeSelfComment">
              <img
                className="video_youtubeSelfCommentProfile"
                src="https://play-lh.googleusercontent.com/urA9eBT4RU3aM8XO9ygAZMBgD-8FHFsCJw9FxGTMZP4NT_CWFLfOM8RQmLQWWxxhTXQ=w526-h296-rw"
                alt=""
              />
              <div className="others_commentSection">
                <div className="others_commentSectionHeader">
                  <div className="channelName_comment">UserName</div>
                  <div className="commentTimingOthers">1 day ago</div>
                </div>

                <div className="otherCommentSectionComment">
                  This is a good video
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggestionBlock">
          <div className="video_suggestion_thumbnail">
            <img
              className="video_suggestion_thumbnail_img"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125927767/original/dbf885c2b644cdd8e2e916f28583b32c6448d2af/make-the-perfect-csgo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_About_title">CSGO ??? moment</div>
            <div className="video_suggestion_About_Profile">UserName</div>
            <div className="video_suggestion_About_Profile">
              200k views , 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionBlock">
          <div className="video_suggestion_thumbnail">
            <img
              className="video_suggestion_thumbnail_img"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125927767/original/dbf885c2b644cdd8e2e916f28583b32c6448d2af/make-the-perfect-csgo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_About_title">CSGO ??? moment</div>
            <div className="video_suggestion_About_Profile">UserName</div>
            <div className="video_suggestion_About_Profile">
              200k views , 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionBlock">
          <div className="video_suggestion_thumbnail">
            <img
              className="video_suggestion_thumbnail_img"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125927767/original/dbf885c2b644cdd8e2e916f28583b32c6448d2af/make-the-perfect-csgo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_About_title">CSGO ??? moment</div>
            <div className="video_suggestion_About_Profile">UserName</div>
            <div className="video_suggestion_About_Profile">
              200k views , 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionBlock">
          <div className="video_suggestion_thumbnail">
            <img
              className="video_suggestion_thumbnail_img"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125927767/original/dbf885c2b644cdd8e2e916f28583b32c6448d2af/make-the-perfect-csgo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_About_title">CSGO ??? moment</div>
            <div className="video_suggestion_About_Profile">UserName</div>
            <div className="video_suggestion_About_Profile">
              200k views , 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggestionBlock">
          <div className="video_suggestion_thumbnail">
            <img
              className="video_suggestion_thumbnail_img"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125927767/original/dbf885c2b644cdd8e2e916f28583b32c6448d2af/make-the-perfect-csgo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="video_suggestion_about">
            <div className="video_suggestion_About_title">CSGO ??? moment</div>
            <div className="video_suggestion_About_Profile">UserName</div>
            <div className="video_suggestion_About_Profile">
              200k views , 1 day ago
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Video;

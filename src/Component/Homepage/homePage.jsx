import React from 'react'
import './homePage.css'
const HomePage = ({sideNavbar}) => {
  const options = [
    'Technology',
    'Music',
    'Gaming',
    'Vlogs',
    'Travel',
    'Cooking',
    'Fitness',
    'Education',
    'Comedy',
    'DIY',
    'Fashion',
    'Sports',
    'Health & Wellness',
    'Movies & TV Shows',
    'Art & Design',
    'Science & Nature',
    'Animals & Pets',
    'Photography',
    'Tech Reviews',
    'Tutorials',
    'News & Politics',
    'Documentaries',
    'ASMR',
    'Live Streams',
    'Motivational',
    'Unboxing & Reviews',
    'Food & Drink',
    'Language Learning',
    'Finance & Investing',
    'Productivity',
    'Hobbies & Interests',
    'Parenting',
    'History',
    'Environment & Sustainability',
    'Lifestyle',
    'Cars & Motorcycles',
    'Celebrities',
    'Tech Talks & Conferences'
  ];
  

  return (
    <div className={sideNavbar?'homePage':'fullHomePage'}>
      <div className="homePage_options">
        {
          options.map((item,index)=>{
            return(
              <div key={index} className="homePage_option">
              {item}
            </div>
            );
          })
        }
        
      </div>

        <div className={sideNavbar?"home_mainPage":"home_mainPageWithoutlink"}>
          <div className="youtube_Video">
            <div className="youtube_thumbnailBox">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/248477535/original/573502547a5ae519a76f92a10f4b73c742d762ca/design-very-attractive-eye-catching-csgo-thumbnail.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
              <div className="youtube_timingThumbnail">
                10:05
              </div>
            </div>

            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw" alt="" className="youtube_thumbnail_Profile" />
              </div>
              <div className="youtubeTitlebox_Title">
                <div className="youtube_videoTitle">
                  Csgo montage
                </div>  
                <div className="youtube_channelName">
                  @User1
                </div>
                <div className="youtubeVideo_views">
                  3.8k views
                </div>
              </div>
            </div>

          </div>
          <div className="youtube_Video">
            <div className="youtube_thumbnailBox">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/248477535/original/573502547a5ae519a76f92a10f4b73c742d762ca/design-very-attractive-eye-catching-csgo-thumbnail.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
              <div className="youtube_timingThumbnail">
                10:05
              </div>
            </div>

            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw" alt="" className="youtube_thumbnail_Profile" />
              </div>
              <div className="youtubeTitlebox_Title">
                <div className="youtube_videoTitle">
                  Csgo montage
                </div>  
                <div className="youtube_channelName">
                  @User1
                </div>
                <div className="youtubeVideo_views">
                  3.8k views
                </div>
              </div>
            </div>

          </div>
          <div className="youtube_Video">
            <div className="youtube_thumbnailBox">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/248477535/original/573502547a5ae519a76f92a10f4b73c742d762ca/design-very-attractive-eye-catching-csgo-thumbnail.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
              <div className="youtube_timingThumbnail">
                10:05
              </div>
            </div>

            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw" alt="" className="youtube_thumbnail_Profile" />
              </div>
              <div className="youtubeTitlebox_Title">
                <div className="youtube_videoTitle">
                  Csgo montage
                </div>  
                <div className="youtube_channelName">
                  @User1
                </div>
                <div className="youtubeVideo_views">
                  3.8k views
                </div>
              </div>
            </div>

          </div>
          <div className="youtube_Video">
            <div className="youtube_thumbnailBox">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/248477535/original/573502547a5ae519a76f92a10f4b73c742d762ca/design-very-attractive-eye-catching-csgo-thumbnail.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
              <div className="youtube_timingThumbnail">
                10:05
              </div>
            </div>

            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw" alt="" className="youtube_thumbnail_Profile" />
              </div>
              <div className="youtubeTitlebox_Title">
                <div className="youtube_videoTitle">
                  Csgo montage
                </div>  
                <div className="youtube_channelName">
                  @User1
                </div>
                <div className="youtubeVideo_views">
                  3.8k views
                </div>
              </div>
            </div>

          </div>
          <div className="youtube_Video">
            <div className="youtube_thumbnailBox">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/248477535/original/573502547a5ae519a76f92a10f4b73c742d762ca/design-very-attractive-eye-catching-csgo-thumbnail.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
              <div className="youtube_timingThumbnail">
                10:05
              </div>
            </div>

            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw" alt="" className="youtube_thumbnail_Profile" />
              </div>
              <div className="youtubeTitlebox_Title">
                <div className="youtube_videoTitle">
                  Csgo montage
                </div>  
                <div className="youtube_channelName">
                  @User1
                </div>
                <div className="youtubeVideo_views">
                  3.8k views
                </div>
              </div>
            </div>

          </div>
          <div className="youtube_Video">
            <div className="youtube_thumbnailBox">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/248477535/original/573502547a5ae519a76f92a10f4b73c742d762ca/design-very-attractive-eye-catching-csgo-thumbnail.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
              <div className="youtube_timingThumbnail">
                10:05
              </div>
            </div>

            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw" alt="" className="youtube_thumbnail_Profile" />
              </div>
              <div className="youtubeTitlebox_Title">
                <div className="youtube_videoTitle">
                  Csgo montage
                </div>  
                <div className="youtube_channelName">
                  @User1
                </div>
                <div className="youtubeVideo_views">
                  3.8k views
                </div>
              </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default HomePage
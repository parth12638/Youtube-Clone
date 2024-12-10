import React from 'react'
import'./profile.css'
import SideNavbar from '../../Component/SideNavbar/sideNavbar'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
        <SideNavbar sideNavbar={sideNavbar}/>

        <div className="profile_page">

            <div className="profile_top_section">
                <div className="profile_top_section_profile">
                    <img className="profile_top_section_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzs5EdaRGlnpG8rPaXMUIANl5McnwG-HPksA&s" alt="" />
                </div>
                <div className="profile_top_section_About">
                    <div className="profile_top_section_About_Name">
                        Minho Codm

                    </div>
                    <div className="profile_top_section_info">@UserName , 4 Videos</div>
                    <div className="profile_top_section_info">About Section of Channel</div>
                </div>
            </div>
            <div className="profile_videos">
                    <div className="profile_videos_title">
                        Videos &nbsp; <PlayArrowIcon/>
                    </div>
                    <div className="profileVideos">

                        {/* video section */}
                        <Link to={'/watch/12'}className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className='profileVideo_block_thumbnail_img' src="https://pbs.twimg.com/media/FPHXTd_XIA0KtgM?format=jpg&name=large" alt="" />
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">
                                    COD Rebirth Island
                                </div>
                                <div className="profileVideo_block_detail_about">
                                    Create at 2024-12-3
                                </div>
                            </div>
                        </Link>
                        <Link to={'/watch/12'}className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className='profileVideo_block_thumbnail_img' src="https://pbs.twimg.com/media/FPHXTd_XIA0KtgM?format=jpg&name=large" alt="" />
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">
                                    COD Rebirth Island
                                </div>
                                <div className="profileVideo_block_detail_about">
                                    Create at 2024-12-3
                                </div>
                            </div>
                        </Link>
                        <Link to={'/watch/12'}className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className='profileVideo_block_thumbnail_img' src="https://pbs.twimg.com/media/FPHXTd_XIA0KtgM?format=jpg&name=large" alt="" />
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">
                                    COD Rebirth Island
                                </div>
                                <div className="profileVideo_block_detail_about">
                                    Create at 2024-12-3
                                </div>
                            </div>
                        </Link>
                        <Link to={'/watch/12'}className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className='profileVideo_block_thumbnail_img' src="https://pbs.twimg.com/media/FPHXTd_XIA0KtgM?format=jpg&name=large" alt="" />
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">
                                    COD Rebirth Island
                                </div>
                                <div className="profileVideo_block_detail_about">
                                    Create at 2024-12-3
                                </div>
                            </div>
                        </Link>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
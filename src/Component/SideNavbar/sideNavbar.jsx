import React from "react";
import "./sideNavbar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import RecentActorsRoundedIcon from "@mui/icons-material/RecentActorsRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>
      <div className="home_sideNavbarTop">
        <div className={"home_sideNavbarTopOption"}>
          <HomeRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <VideoCallRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <SubscriptionsRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>

      <div className="home_sideNavbarMiddle">
        <div className={"home_sideNavbarTopOption"}>
          <div className="home_sideNavbarTopOptionTitle">You</div>
          <ChevronRightRoundedIcon />
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <RecentActorsRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <HistoryRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <VideoLibraryRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Videos</div>
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <QueryBuilderRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">Watch Later </div>
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <PlaylistAddRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">Playlist </div>
        </div>

        <div className={"home_sideNavbarTopOption"}>
          <ThumbUpAltRoundedIcon />
          <div className="home_sideNavbarTopOptionTitle">liked </div>
        </div>
      </div>

      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitleHeader">
            Subscription
          </div>
        </div>

        <div className="home_sideNavbarTopOption">
            <img className="home_sideNavbar_Imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPlwRZDNX0zTUYc5O7-SuRRSqVK75azGENg&s" alt="" />
            <div className="home_sideNavbarTopOptionTitleHeader">
            PewdiePie
            </div>
        </div>
        
        <div className="home_sideNavbarTopOption">
            <img className="home_sideNavbar_Imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JHypbLf3Pe2m_xreK3XpFp7890bK4fnESw&s" alt="" />
            <div className="home_sideNavbarTopOptionTitleHeader">
            CoryxKenshin
            </div>
        </div>
        <div className="home_sideNavbarTopOption">
            <img className="home_sideNavbar_Imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpsf-c1ekMdTKhwKdrdUnIXRNYzbdaVZmuQ&s" alt="" />
            <div className="home_sideNavbarTopOptionTitleHeader">
            XqC
            </div>
        </div>

      </div>
    </div>
  );
};

export default SideNavbar;

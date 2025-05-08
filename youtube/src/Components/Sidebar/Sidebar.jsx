import React from "react";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import tv9 from "../../assets/tv9.jpg";
import game from '../../assets/game.jpeg';

import indolike from '../../assets/indolike.jpeg';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sortcut-links">
        <div className="side-link">
          <div className="link-item">
            <FaHome />
            <p>Home</p>
          </div>
          <div className="link-item">
            <SiYoutubeshorts />
            <p>Shorts</p>
          </div>
          <div className="link-item">
            <MdSubscriptions />
            <p>Subscription</p>
          </div>
        </div>

        <div className="you">
          <div className="link-item">
            <MdHistory />
            <p>History</p>
          </div>
          <div className="link-item">
            <MdPlaylistPlay />
            <p>Playlists</p>
          </div>
          <div className="link-item">
            <GoVideo />
            <p>Your videos</p>
          </div>
          <div className="link-item">
            <FaGraduationCap />
            <p>Your courses</p>
          </div>
          <div className="link-item">
            <MdOutlineWatchLater />
            <p>Watch later</p>
          </div>
          <div className="link-item">
            <BiLike />
            <p>Liked videos</p>
          </div>
          <div className="link-item">
            <TfiDownload />
            <p>Download</p>
          </div>
        </div>

        <div className="subcription">
          <h4>Subscriptions</h4>
          </div>
          <div className="channel-item">
          <img className="channel" src={indolike} alt="indolike" /><p>Lean with indolike</p>
          </div>
          <div className="channel-item">
          <img className="channel" src={game} alt='game'/> <p>Gopal Gamming</p>
          </div>
          <div className="channel-item">
          <img className="channel" src={tv9} alt="News" /><p>TV9 Marathi</p>
          </div>
         
        </div>
        <div className="explore">
          <h4> Explore</h4>
        </div>
      </div>
    
  );
};

export default Sidebar;

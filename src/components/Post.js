import React from "react";
import "./Post.css";
import Checkmark from "../img/checkmark.png";
import Earth from "../img/earth.png";
import Like from "../img/like.png";
import Share from "../img/share.png";

const Post = ({ photo, name, content, image }) => (
  <div className="post">
    <div className="header">
      <div className="header_icon">
        <img src={photo} alt="" />
      </div>
      <div className="header_content">
        <div className="header_content_top">
          <span>{name}</span>
          <img src={Checkmark} alt=""></img>
        </div>
        <div className="header_content_bottom">
          <span>2h &#183;</span>
          <img src={Earth} alt=""></img>
        </div>
      </div>
      <div className="header_burger_menu">
        <span>&#8230;</span>
      </div>
    </div>
    <div className="main">
      <span>{content}</span>
      <img src={image} alt=""></img>
    </div>
    <div className="footer">
      <div className="fotter_like">
        <img src={Like} alt=""></img>
        <span>Like</span>
      </div>
      <div className="fotter_share">
        <img src={Share} alt=""></img>
        <span>Share</span>
      </div>
    </div>
  </div>
);

export default Post;

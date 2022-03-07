import React from "react";
import "../../styles/Post.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ShareIcon from "@mui/icons-material/Share";

function Post({ imgSrc }) {
  return (
    <div id="post">
      {/* info, settings */}
      <div className="post-info">
        <div className="section-info">
          <img
            src="http://localhost:3000/static/media/KEKW.c85349384101d8eafa4b.png"
            alt="section-ico"
            className="section-ico"
          />
          <p className="section-name">Funny</p>
          <span>-</span>
          <p className="time-info">1h</p>
        </div>

        <div className="post-settings">
          <div className="hoverCircle settingsHover">
            <BookmarkBorderIcon />
          </div>
          <div className="hoverCircle  settingsHover">
            <MoreVertIcon />
          </div>
        </div>
      </div>

      {/* title, content */}
      <h2 className="post-title">Might as well give it a try</h2>
      <div className="post-content">
        <img src={imgSrc} alt="post img" />
      </div>

      {/* vote, comment, share */}
      <div className="post-social">
        <div className="vote-comment">
          <button className="btn-upvote">
            <ArrowUpwardIcon />
            <p className="upvote-count">696</p>
          </button>
          <button className="btn-downvote">
            <ArrowDownwardIcon /> <p className="downvote-count">39</p>
          </button>
          <button className="btn-comment">
            <ChatBubbleIcon />
            <p className="comment-count">25</p>
          </button>
        </div>

        <div className="share">
          <button className="fb-share">
            <FacebookIcon /> Facebook
          </button>
          <button className="pin-share">
            <PinterestIcon /> Pinterest
          </button>
          <button className="other-share">
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;

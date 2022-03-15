import React, { useEffect, useState } from "react";
import "../../styles/Post.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ShareIcon from "@mui/icons-material/Share";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function Post({
  section,
  title,
  imgSrc,
  upvotes,
  downvotes,
  comments,
  gifSrc,
}) {
  const [sectionIco, setSectionIco] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "sections"), (snapshot) =>
        setSectionIco(
          snapshot.docs.map((snap) => ({
            section: snap.data().section,
            imgSrc: snap.data().imgSrc,
          }))
        )
      ),
    []
  );

  return (
    <div className="post">
      {/* info, settings */}
      <div className="post-info">
        <div className="section-info">
          <img
            src={
              sectionIco &&
              sectionIco.filter(
                (ico) => ico.section === section && ico.imgSrc
              )[0].imgSrc
            }
            alt="section-ico"
            className="section-ico"
          />
          <p className="section-name">{section}</p>
          <span>-</span>
          <p className="time-info">~1h</p>
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
      <h2 className="post-title">{title}</h2>
      <div className="post-content">
        {imgSrc ? (
          <img src={imgSrc} alt="post img" />
        ) : (
          <video controls preload="auto">
            <source src={gifSrc} type="video/mp4" />
          </video>
        )}
      </div>

      {/* vote, comment, share */}
      <div className="post-social">
        <div className="vote-comment">
          <button className="btn-upvote">
            <ArrowUpwardIcon />
            <p className="upvote-count">{upvotes}</p>
          </button>
          <button className="btn-downvote">
            <ArrowDownwardIcon /> <p className="downvote-count">{downvotes}</p>
          </button>
          <button className="btn-comment">
            <ChatBubbleIcon />
            <p className="comment-count">{comments}</p>
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

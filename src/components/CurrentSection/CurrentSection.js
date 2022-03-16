import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import "../../styles/CurrentSection.css";
import Post from "../Post/Post";
import ShortMenu from "./ShortMenu";

function CurrentSection() {
  const [hot, setHot] = useState();
  const currSection = useSelector((state) => state.section.value);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) =>
        setHot(
          snapshot.docs
            .filter((doc) =>
              // (doc.data().upvotes > currSection.min &&
              //   doc.data().upvotes < currSection.max) ||
              // doc.data().section === currSection.section
              {
                if (doc.data().upvotes > currSection.min) {
                  if (doc.data().upvotes < currSection.max) {
                    if (doc.data().section === currSection.section) return doc;
                    else if (currSection.section === null) return doc;
                  }
                }
              }
            )
            .map((post) => (
              <Post
                key={post.id}
                section={post.data().section}
                title={post.data().title}
                imgSrc={post.data().imgSrc}
                upvotes={post.data().upvotes}
                downvotes={post.data().downvotes}
                comments={post.data().comments}
                gifSrc={post.data().gifSrc}
              />
            ))
        )
      ),
    [currSection]
  );

  return (
    <div id="current-section">
      <ShortMenu />
      {hot && hot}
    </div>
  );
}

export default CurrentSection;

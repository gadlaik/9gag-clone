import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import "../../styles/CurrentSection.css";
import Post from "../Post/Post";

function CurrentSection() {
  const [hot, setHot] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) =>
        setHot(
          snapshot.docs
            .filter((doc) => doc.data().upvotes > 99)
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
    []
  );

  return <div id="current-section">{hot && hot}</div>;
}

export default CurrentSection;

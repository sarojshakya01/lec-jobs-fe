import { useEffect, useState } from "react";
import Post from "./Post";
import { postsAPI } from "../../config";

const PostSection = (props) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch(postsAPI)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div className="posts-section">
      {props.posts.map((post, idx) => (
        <Post post={post} user={props.user} key={idx} />
      ))}
    </div>
  );
};

export default PostSection;

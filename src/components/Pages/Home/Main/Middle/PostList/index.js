import { useEffect, useState } from "react";
import Post from "./Post";
import { POSTS_API } from "../../../../../../config";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(POSTS_API)
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          setPosts(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="posts-section">
      {posts.map((post, idx) => (
        <Post post={post} user={props.user} key={idx} />
      ))}
    </div>
  );
};

export default PostList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      {posts.map((post: any) => (
        <PostCard key={post._id} title={post.title} description={post.description} creator={post.creator.name} />
      ))}
    </div>
  );
};

export default PostList;

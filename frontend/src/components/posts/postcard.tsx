import React from "react";

type Props = {
  title: string;
  description: string;
  creator: string;
};

const PostCard = ({ title, description, creator }: Props) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <small>By: {creator}</small>
    </div>
  );
};

export default PostCard;

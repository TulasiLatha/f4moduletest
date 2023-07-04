import React from 'react';

const Post = ({ post }) => {
  const imageUrl = `https://picsum.photos/200?random=${post.id}`;

  return (
    <div className="post">
      <img src={imageUrl} alt={`Post ${post.id}`} />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

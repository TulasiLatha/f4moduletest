import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



function ItemDetail() {
  const { id } = useParams();
  const items = useSelector((state) => state.items);
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-item2">
      <h1>Social Media App</h1>
      <h3>Details Page for Post with ID ${item.id}</h3>
      <img
        src={`https://picsum.photos/200?random=${item.id}`}
                  
                  alt="Post"/>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <p>User ID: {item.userId}</p>
    </div>
  );
}

export default ItemDetail;

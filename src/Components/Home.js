import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './Post';
import "./Home.css";
import { fetchItems } from '../actions/Actions';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    // Fetch items from the API
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1>Social Media App</h1>
      <div className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="grid-item">
            <Link to={`/item/${item.id}`}>
            <img src={`https://picsum.photos/200?random=${item.id}&userId=${item.userId}`}
              alt="Post"/>
            <p>User ID: {item.userId}</p>
            {/* <Link to={`/item/${item.id}`}> */}
              <h3>
                {item.title.length > 30
                  ? `${item.title.slice(0, 30)}...`
                  : item.title}
              </h3>
            </Link>
            {/* <p>User ID: {item.userId}</p> */}
            <p>
              {item.body.length > 100
                ? `${item.body.slice(0, 100)}...`
                : item.body}
              {item.body.length > 100 && (
                <Link to={`/item/${item.id}`}>Read More...</Link>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

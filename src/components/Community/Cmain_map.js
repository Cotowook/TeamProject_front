import './Cmain_map.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loone from '../img/loone.png';

const Cmain_map = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/community/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      {posts.map(post => (
        <div className="crud_first" key={post.id}>
          <h3 className="content_c">{post.title}</h3>
          <div className="content_thumbnail">
            <img src={loone} alt="content_thumbnail" />
          </div>
          <div className="crud_title">{post.body}</div>
          <div className="crud_writer">
            작성자: {post.author}
            <button className="btn_view_post">
              <Link to={`/Community/${post.id}`} style={{ textDecoration: "none", color: "black" }}>
                더보기
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cmain_map;

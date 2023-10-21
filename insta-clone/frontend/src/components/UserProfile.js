import React, { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import './Profile.css';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const { userid } = useParams();
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${userid}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
        setPosts(result.post);
      });
  }, []);

  return (
    <div className="profile">
      {/* profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
          <img src={require('../img/profile.jpg')} alt="" />
        </div>
        {/* profile-data */}
        <div className="profile-data">
          <h1>{user.name}</h1>
          <div className="profile-info" style={{ display: 'flex' }}>
            <p style={{ marginRight: '10px' }}>
              {posts ? posts.length : 0} posts {/* Check if posts is defined */}
            </p>
            <p style={{ marginRight: '10px' }}>40 followers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: '90px',
          opacity: '0.8',
          margin: '25px auto',
        }}
      />
      {/* Gallery */}
      <div className="gallery">
        {posts && posts.length > 0 ? (
          posts.map((pics) => (
            <img key={pics._id} src={pics.photo} alt="" className="item" />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      {/* {show &&
        <PostDetail item={posts} toggleDetails={toggleDetails} />
      } */}
    </div>
  );
}

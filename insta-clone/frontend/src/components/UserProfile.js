import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import "./Profile.css";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userid } = useParams();
  const [isFollow, setIsFollow] = useState(false);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  //to follow user
  const followUser=(userId)=>{
fetch("http://localhost:5000/follow",{
  method:"put",
  headers: {
    "content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  },
  body:JSON.stringify({
    followId:userId
  })
})
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  setIsFollow(true)
})
  }

  //to unfollow user
  const unfollowUser=(userId)=>{
    fetch("http://localhost:5000/unfollow",{
      method:"put",
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body:JSON.stringify({
        followId:userId
      })
    })
    .then((res)=>{res.json()})
    .then((data)=>{
      console.log(data)
      setIsFollow(false)
    });
      };
  useEffect(() => {
    fetch(`http://localhost:5000/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
        setPosts(result.post);
        if(result.user.followers.includes(JSON.parse(localStorage.getItem("user"))._id)){
          setIsFollow(true)
        }
      });
  }, [isFollow]);

  return (
    <div className="profile">
      {/* profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
          <img src={require("../img/profile.jpg")} alt="" />
        </div>
        {/* profile-data */}
        <div className="profile-data">
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h1>{user.name}</h1>
            <button className="followBtn"
            onClick={()=>{
              if(isFollow){
                unfollowUser(user._id)
              }else{

                followUser(user._id);
              }
            }}
            >
             {isFollow ? "Unfollow" : "Follow"}
              </button>
          </div>
          <div className="profile-info" style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>
              {posts ? posts.length : 0} posts {/* Check if posts is defined */}
            </p>
            <p style={{ marginRight: "10px" }}> {user.followers ? user.followers.length:"0"} followers</p>
            <p>{user.following ? user.following.length:"0"} following</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "90px",
          opacity: "0.8",
          margin: "25px auto",
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

import React,{useEffect,useState} from 'react'
import PostDetail from "./PostDetail";
import "./Profile.css";

export default function Profile() {
const [pic, setPic] = useState([])
const [show, setShow] = useState(false)
const [posts, setPosts] = useState([])

const toggleDetails = (posts) => {
  if (show) {
    setShow(false);
    
  } else {
    setShow(true);
    setPosts(posts);
  
  }
};
  useEffect(() => {
  fetch("http://localhost:5000/myposts",{
    headers:{
      Authorization: "Bearer " + localStorage.getItem("jwt")
    }
  })
  .then(res=>res.json())
  .then((result)=>{
    setPic(result)
    console.log(pic)
  })
}, [])
  
  return (
    <div className="profile">
     {/* profile frame */}
     <div className="profile-frame">
      {/* profile-pic */}
      <div className="profile-pic">
      <img src={require('../img/profile.jpg')} alt=""/>
      </div>
      {/* profile-data */}
      <div className="profile-data">
    <h1>{JSON.parse(localStorage.getItem("user")).name}</h1>
    <div className="profile-info" style={{display:"flex"}}>
      <p style={{ marginRight: "10px" }}>40 posts </p>
      <p style={{ marginRight: "10px" }}> 40 followers </p>
      <p> 40 following</p>
       </div>
      </div>
     </div>
     <hr style={{
      width:"90",
     
      opacity:"0.8",
      margin: "25px auto"
     }}/>
    {/*Gallery*/}
     <div className="gallery">
     {pic.map((pics)=>{
      return <img key={pics._id}src={pics.photo} alt="" 
      onClick= {()=>{
        toggleDetails(pics)
      }}
      className="item"/>

     })}
    


     </div>
     {
      show &&
     <PostDetail item={posts} toggleDetails={toggleDetails}/>
     }
    </div>
  );
}



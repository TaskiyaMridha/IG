import React,{useEffect,useState} from 'react'
import "./Profile.css";

export default function Profile() {
const [pic, setPic] = useState([])
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
    <h1>Aqsa Mridha</h1>
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
      return <img key={pics._id}src={pics.photo} alt="" className="item"/>

     })}
     {/* <img src={require('../img/T.jpg')}alt=""/>
     <img src={require('../img/G.jpg')}alt=""/>
     <img src={require('../img/s.jpg')}alt=""/>
     <img src={require('../img/H.jpg')}alt=""/>
     <img src={require('../img/profile.jpg')}alt=""/>
     <img src={require('../img/grp.jpg')}alt=""/>
     <img src={require('../img/X.jpg')}alt=""/>
     <img src={require('../img/flower.jpg')}alt=""/>
     <img src={require('../img/li.jpg')}alt=""/>
     <img src={require('../img/iny.jpg')}alt=""/> */}



     </div>
     
    </div>
  );
}



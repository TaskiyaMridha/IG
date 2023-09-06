import React from 'react'
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
     {/* profile frame */}
     <div className="profile-frame">
      {/* profile-pic */}
      <div className="profile-pic">
      <img src={require('../img/profile.jpg')}/>
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
     <img src={require('../img/T.jpg')}/>
     <img src={require('../img/G.jpg')}/>
     <img src={require('../img/s.jpg')}/>
     <img src={require('../img/H.jpg')}/>
     <img src={require('../img/profile.jpg')}/>
     <img src={require('../img/grp.jpg')}/>
     <img src={require('../img/X.jpg')}/>
     <img src={require('../img/flower.jpg')}/>
     <img src={require('../img/li.jpg')}/>
     <img src={require('../img/iny.jpg')}/>



     </div>
     
    </div>
  )
}



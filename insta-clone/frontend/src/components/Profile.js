import React from 'react'
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
     {/* profile frame */}
     <div className="profile-frame">
      {/* profile-pic */}
      <div className="profile-pic">
      <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
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
     <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
     <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
     <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
     <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
     <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
     <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
     </div>
     
    </div>
  )
}



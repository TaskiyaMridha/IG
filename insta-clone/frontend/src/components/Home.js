import React from 'react';
import "./Home.css";

export default function Home() {
  return<div className="home">
    {/*cards*/}
   
      <div className="card">
   {/* card header */}
   <div className="card-header">
    <div className="card-pic">
      <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
    </div>
    <h5>Aqsa Mridha</h5> 
     
     </div>
     <div className="card-image">
    <img src="https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt=""/>

    </div>
    {/* card content */}
    <div className="card-content">
    <span className="material-symbols-outlined">
favorite
</span>
<p>1 Like</p>
<p>This is amazing</p>
    </div>
    {/* add comment */}
<div className="add-comment">
<span className="material-symbols-outlined">
sentiment_very_satisfied
</span>

<input type="text" placeholder="Add a comment"/>
<button className="comment">Post</button>

</div>
      </div>
    </div>
 
}

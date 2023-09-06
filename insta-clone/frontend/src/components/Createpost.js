import React from 'react'
import "./Createpost.css";
export default function Createpost(){
    const loadfile= (event)=>{
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
    };
};
    return(
        <div className='createPost'>
            {/* header */}
        <div className='post-header'>
<h4 style={{margin:"3px auto"}}> Create New Post</h4>
<button id="post-btn">Share</button>
        </div>
        {/* image preview */}
        <div className="main-div">
            <img id="output" src="https://cdn4.iconfinder.com/data/icons/complete-common-version-6-3/1024/picture-256.png"/>
          <input type="file" accept="image/*" onChange={(event)=>{loadfile(event)}}/>  
        </div>
        {/* Details */}
        <div className="details">
            <div className="card-header">
                <div className="card-pic">
                <img src={require('../img/profile.jpg')}/>
                </div>
                <h5>Aqsa Mridha</h5>
            </div>
            <textarea  type="text" placeholder="Write a caption....">

            </textarea>
        </div>
       </div>
    );
}
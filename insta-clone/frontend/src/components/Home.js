import React,{useEffect,useState} from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

export default function Home() {
const navigate=useNavigate();
const[data,setData]=useState([])
  useEffect(()=>{
const token= localStorage.getItem("jwt");
if(!token){
navigate("./signup");
}

//fetching all posts
fetch("http://localhost:5000/allposts",{
  headers:{
    "Authorization": "Bearer " +localStorage.getItem("jwt")

  },
}).then(res=>res.json())
.then(result=>setData(result))
.catch(err=>console.log(err))
  },[])
  return(
  <div className="home">
    {/*cards*/}
   {data.map((posts)=>{
    return(
      <div className="card">
      {/* card header */}
      <div className="card-header">
       <div className="card-pic">
         <img src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=1024x1024&w=is&k=20&c=C772iuu-JdrSc1ficwNVDaSLQp3-II9OEpDpxPgmXPg=" alt=""/>
       </div>
       <h5>{posts.postedBy.name}</h5> 
        {/* card Image */}
        </div>
        <div className="card-image">
       <img src={posts.photo}
       />
   
       </div>
       {/* card content */}
       <div className="card-content">
       <span className="material-symbols-outlined">
   favorite
   </span>
   <p>1 Like</p>
   <p>{posts.body}</p>
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
    )
   })}
  
    </div>
 );
}


import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.css'; 

    
const SubmitComment= (props) => {
    const [comment, setNewComment]=useState("");

function handle(e){
    setNewComment(e.target.value)
    console.log(comment)
}

  

const submitHandler = e => {
e.preventDefault();
const newComment ={
  text: comment,
  videoId: "5635"
}
axios.post(`http://localhost:5000/api/comments/`, newComment)
    .then(response => console.log(response.data))
    .catch(error => {
      console.log(error)
    })
}

        return (
          <div>
            <form>
            <input onChange={(e)=>handle(e)} id="text"/>
            <button onClick={submitHandler} id='btn'> Submit </button> 
            </form>
          </div>
        );
      }




export default SubmitComment; 
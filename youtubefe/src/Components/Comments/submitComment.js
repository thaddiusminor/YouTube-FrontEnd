
import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.css'; 

    
const SubmitComment= (props) => {
    const [comment, setNewComment]=useState({
      text: "", 
      videoId: "", 

    })

    
function handle(e){
    const newcomment={}
    newcomment[e.target.id]= e.target.value
    setNewComment(newcomment)
    console.log(newcomment)
}
  

// function submit(e){
//   e.preventDefault();
//   axios.post(`http://localhost:5000/api/comments/5635`{
//   .then(response => setNewComment(response.data) 
// }
// }
      
        return (
          <div>
            <form>
            <input onChange={(e)=>handle(e)} id="text"/>
            <button />
            </form>
          </div>
        );
      }



export default SubmitComment; 
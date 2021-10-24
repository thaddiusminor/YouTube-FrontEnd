
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
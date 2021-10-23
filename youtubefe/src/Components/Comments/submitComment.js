
import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.css'; 

    
const SubmitComment= (props) => {
    const newComment= ""

    
const handleChange = (event) => {
    console.log(newComment)
}
    
      
        return (
            <form>
            <label>
              Comment:
              <input type="text" placeholder="name" onChange={handleChange}/>
            </label>
            <input type="submit" placeholder="Submit" />
          </form>
        );
      }



export default SubmitComment; 
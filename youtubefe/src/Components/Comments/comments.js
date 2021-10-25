
import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 



    const Comment= (props) => {
    const[comments, setComments] = useState([]); 



    useEffect(() => { 
        axios.get(`http://localhost:5000/api/comments/5635`)
        .then(response => setComments(response.data)
        )}, [props.id]);
     return (
        <div>
           {comments.map( (comment) => {
               return(
                <div class="container">
                {comment.text}
              </div>
               )
           })} 
        </div>
    );
}



export default Comment; 
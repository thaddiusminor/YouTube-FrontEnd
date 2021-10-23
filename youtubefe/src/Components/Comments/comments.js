
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
                   <p>{comment.text}</p>
               )
           })} 
        </div>
    );
}



export default Comment; 
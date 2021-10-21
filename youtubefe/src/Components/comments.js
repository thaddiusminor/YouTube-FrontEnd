
import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 

    const Comment= (props) => {
    const[comments, setComments] = useState({}); 

    useEffect(() => { 
        axios.get('https://localhost:5000/api/comments')
        .then(response => setComments(props.data[props.index])
        )}, [comments, props.data, props.index]);
    
    
     return (
        <div>
           {comments.text} 
        </div>
    );
}


export default Comment; 
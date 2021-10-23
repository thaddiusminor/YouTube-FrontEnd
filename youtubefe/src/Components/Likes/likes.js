import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

const Like= (props) => {
    const[likes, setLikes] = useState([]); 

    // useEffect(() => { 
    //     axios.get(`http://localhost:5000/api/comments/5635`)
    //     .then(response => setComments(response.data)
    //     )}, [props.id]);
    
    
     return (
        <div>
          <button>Like</button> <button>Dislike</button>
        </div>
     );
        }
        export default Like; 
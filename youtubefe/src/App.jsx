import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import DisplayVideo from './Components/iframe';
import Comment from './Components/comments';
import DisplaySearch from './Components/searchbar';

const App = (props) => {
  const [videoId, setVideoId] = useState({});

  // useEffect(() => {
  //   axios.get('https://www.youtube.com/results?search_query=how+to+code+java');
  //     .then(response => )


  

  return (
    <div> 
     <h1> Hello World </h1>
     <DisplaySearch /> 
       <DisplayVideo/> 
       <Comment />
        
    </div>
  );
}

  


export default App;
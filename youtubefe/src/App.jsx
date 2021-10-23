import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import DisplayVideo from './Components/iframe/iframe';
import Comment from './Components/Comments/comments';
import DisplaySearch from './Components/SearchBar/searchBar';
import Like from './Components/Likes/likes';
import SubmitComment from './Components/Comments/submitComment';




const App = (props) => {
  const [videoId, setVideoId] = useState({});

 
        
  return (
    <div> 
     <h1> Hello World </h1>
     <DisplaySearch /> 
       <DisplayVideo/> 
       <Comment /> 
       <Like />
       <SubmitComment /> 
        
    </div>
  );
}

  


export default App;
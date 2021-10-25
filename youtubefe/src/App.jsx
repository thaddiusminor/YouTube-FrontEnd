import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import DisplayVideo from './Components/iframe/iframe';
import Comment from './Components/Comments/comments';
import DisplaySearch from './Components/SearchBar/searchBar';
import Like from './Components/Likes/likes';
import SubmitComment from './Components/Comments/submitComment';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid } from '@material-ui/core';
import youtube from './Components/Youtube/youtube';
import VideoItem from './Components/VideoItem/videoItem';
import VideoDetails from './Components/VideoDetails/videoDetails';
import VideoList from './Components/VideoItem/videoList';
import { Search } from '@mui/icons-material';
import RelatedVid from "./Components/RelatedVideos/relatedVideos"


 

const App = (props) => {
  const {videos, setVideos}= useState([]);
  const [ selectedVideo, setSelectedVideo ] = useState("eIrMbAQSU34")

  let api_key ="AIzaSyBF8e9Uzq6fE2zMK0YrnfaEvNNI8AqJ_f8";
  let video_http = "https://www.googleapis.com/youtube/v3/videos";
  let channel_http= "https://www.googleapis.com/youtube/v3/channels?";
  
  const handleSubmit = async (search) => {
const response = await youtube.get('search', { 
params: {
  part:'snippet',
  maxResults: 5, 
  key: 'AIzaSyBF8e9Uzq6fE2zMK0YrnfaEvNNI8AqJ_f8', 
  q: search,
}
  }); 
  console.log(response)
}
 


return(  

  <div className="App">
  <Grid justify = "center" container spacing={10}> 
   <Grid item xs={12}>
     <Grid container spacing={16}> 
     <Grid item xs={12}> 
     <DisplaySearch autocompleteVideoSelected={(videoId) => {
       console.log(videoId)
       if (videoId.kind === "youtube#playlist") {
         setSelectedVideo(videoId.playlistId)
       } else if (videoId.kind === "youtube#video") {
         setSelectedVideo(videoId.videoId)
       }
     }}onFormSubmit={handleSubmit}/>
     </Grid>
     <Grid item xs={8}> 
     <DisplayVideo videoId={selectedVideo} />
     </Grid>
     <Grid item xs={8}> 
     <Comment/>
     </Grid>
     <Grid item xs={8}> 
     <SubmitComment />
     </Grid>
     <Grid item xs={4}>
       {/* <VideoList videos={videos} onVideoSelect={onVideoSelect}/> */}
       <Grid/>
     </Grid>
     </Grid>  
     </Grid> 
     </Grid> 
     <RelatedVid videoId={selectedVideo} />
   </div> 
);
}




export default App; 



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
 

const App = (props) => {
  const {videos, setVideos}= useState([]);

  // useEffect(); {
  //   handleSubmit('')
  // }

  const onVideoSelect = (videos) => {
      setVideos({selectedVideo: videos});
  }
  

  const handleSubmit = async (search) => {
  const response = await youtube.search("ramtoo", 5);
  console.log(response)
  //   params: { 
  //     part:'snippet', 
  //     maxResults: 5, 
  //     key: 'AIzaSyBF8e9Uzq6fE2zMK0YrnfaEvNNI8AqJ_f8',
  //     q: search
  //   }
  // });

  setVideos({videos:response.data.items, vidoes:response.data.items[0] });
  }
if(!props){
  return null; 

}



return(  

  <div className="App">
  <Grid justify = "center" container spacing={10}> 
   <Grid item xs={12}>
     <Grid container spacing={16}> 
     <Grid item xs={12}> 
     <DisplaySearch onFormSubmit={handleSubmit}/>
     </Grid>
     <Grid item xs={8}> 
     <DisplayVideo video={setVideos}/>
     </Grid>
     <Grid item xs={8}> 
     <Comment/>
     </Grid>
     <Grid item xs={8}> 
     <SubmitComment/>
     </Grid>
     <Grid item xs={4}>
       {/* <VideoList videos={videos} onVideoSelect={onVideoSelect}/> */}
       <Grid/>
     </Grid>
     </Grid>  
     </Grid> 
     </Grid> 
   </div> 
);
}




export default App; 
//   return(
            
//     <div> 
//      <YouTubeIcon />
//      <DisplaySearch/> 
//        <DisplayVideo/> 
//        <Comment /> 
//        <Like />
//        <SubmitComment /> 
        
//     </div>
//   );
// }


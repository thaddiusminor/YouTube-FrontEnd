import React, {useState, useEffect} from 'react';
import {Grid} from "@material-ui/core"
import VideoItem from './videoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const relatedVideos = videos.map((video, id) => <VideoItem  onVideoSelect={onVideoSelect}key={id} video={video}/> )

    return (

        <Grid container={10}>

        {relatedVideos}
        </Grid>
    )
}
       
  
export default VideoList;

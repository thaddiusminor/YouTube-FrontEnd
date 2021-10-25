import React, {useState, useEffect} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core'

const VideoDetails = ({video}) => {
if(!video) return <div> Loading....</div>

const videoSrc = `https//www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: `70%`}}>
            <iframe id="ytplayer" type="text/html" title="frame" width="640px" height="360px"
             src={videoSrc}
             frameborder="0"></iframe>
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant= "subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails;

import React, {useState} from 'react'

const DisplayVideo = (props) => {
    console.log(props.videoId)
    return (
        <div>
    <iframe id="ytplayer" type="text/html" title="frame" width="640px" height="360px"
  src={`https://www.youtube.com/embed/${props.videoId}`}
  frameborder="0"></iframe>
        </div>
    )
}

export default DisplayVideo;
import React, {useState} from 'react'

const DisplayVideo = (props) => {
    return (
        <div>
    <iframe id="ytplayer" type="text/html" title="frame" width="640px" height="360px"
  src="https://www.youtube.com/embed/eIrMbAQSU34"
  frameborder="0"></iframe>
        </div>
    )
}

export default DisplayVideo;
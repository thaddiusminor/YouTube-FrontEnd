
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';  
import youtube from '../Youtube/youtube';


const RelatedVid= (props) => {

    const[ relatedVideos, setRelatedVideo] = useState([]);

    useEffect( () => {

        async function getRelatedVideos() {
            const response = await youtube.get('search', { 
                params: {
                    part:'snippet',
                    type: 'video',
                    key: 'AIzaSyBF8e9Uzq6fE2zMK0YrnfaEvNNI8AqJ_f8', 
                    relatedToVideoId: props.videoId
                }
                }); 
                //setRelatedVideo(response.data.items)
                console.log(response)
        }

        getRelatedVideos()
        console.log("Test")
        
    }, [])






        return (
        <div>
            relatedVid
        </div>
);
}


export default RelatedVid
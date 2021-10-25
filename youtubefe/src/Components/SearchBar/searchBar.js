import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import {Paper, TextField} from '@material-ui/core';
import { AutoFixOffSharp } from '@mui/icons-material';
import axios from 'axios'
import youtube from '../Youtube/youtube';


function DisplaySearch(props) {

       const [search, setSearch] =useState("")
       const [results, setResults] = useState([])
       const [videoId, setVideo]=useState("")
        
    
    
function handle(e){
    setSearch(e.target.value)
    console.log(search)
    handleSubmit(e)
}

function autoCompleteVideoSelected(videoId) {

   props.autocompleteVideoSelected(videoId)
}
        
const handleSubmit = async (e) => {
    const response = await youtube.get('search', { 
        params: {
            part:'snippet',
            maxResults: 5, 
            key: 'AIzaSyBF8e9Uzq6fE2zMK0YrnfaEvNNI8AqJ_f8', 
            q: e.target.value,
        }
        }); 
        setResults(response.data.items)
        console.log(response)
        
    }
             
        


        return (
            <Paper elevation={6} style={{padding: '25px'}}> 
            <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Search..." onChange={(e)=>handle(e)}/>
            <div className="results-wrapper">
                {results.map((res, i) => {
                    return (<div key={i} onClick={() => {
                        setResults([])
                        autoCompleteVideoSelected(res.id) 
                    }}>{res.snippet.title}</div>)
                })}
            </div>
            </form>
            </Paper>
     
        )
}
    

export default DisplaySearch; 
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import {Paper, TextField} from '@material-ui/core';


function DisplaySearch(props) {

       const [search, setSearch] =useState({
           search: ""
       })
        
    
    
function handle(e){
    const newsearch={}
    newsearch[e.target.id]= e.target.value
    setSearch(newsearch)
    console.log(newsearch)
}
        
    //    const handleSubmit = (event) => {
            
       
    //         const onFormSubmit = (props)
            
    //         onFormSubmit(search);
    //         event.preventDefault();
    //     }


        return (
            <Paper elevation={6} style={{padding: '25px'}}> 
            <form>
            <TextField fullWidth label="Serach..."  input onChange={(e)=>handle(e)} id="text"/>
                </form>
                </Paper>
     
        )
    }
    

export default DisplaySearch; 
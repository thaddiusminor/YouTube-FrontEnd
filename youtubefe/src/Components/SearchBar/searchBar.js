import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import {Paper, TextField} from '@material-ui/core';


function DisplaySearch(props) {

       const [search, setSearch] =useState({search:""} )
        
        
        
      const handleChange = (event) => {
          setSearch(event.target.value)
      }
        
    //    const handleSubmit = (event) => {
            
       
    //         const onFormSubmit = (props)
            
    //         onFormSubmit(search);
    //         event.preventDefault();
    //     }


        return (
            <Paper elevation={6} style={{padding: '25px'}}> 
            <form>
            <TextField fullWidth label="Serach..."  onChange={handleChange} />
                </form>
                </Paper>
     
        )
    }
    

export default DisplaySearch; 
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 

function DisplaySearch(props) {
    


    return (
        <div class="topnav">
        <a class="active" href="https://google.com">Home</a>
        <center>
        <input type="text" placeholder='search'> 
        </input>
        <button id='btn'>Submit</button>
        </center>
        </div>
    )
}

export default DisplaySearch; 
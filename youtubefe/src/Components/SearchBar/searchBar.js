import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 

function DisplaySearch(props) {
    


    return (
        <div class="topnav">
        <center>
        <input type="text" placeholder='search' onChange= {() =>{} }/> {/*onChange event handler to save input as state*/}
        <button id='btn'>Submit</button>
        </center>
        </div>
    )
}

export default DisplaySearch; 
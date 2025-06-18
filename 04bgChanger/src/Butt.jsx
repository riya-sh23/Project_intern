import { useState } from "react";

function Butt({username="lavender"}){
    function setColor(){
        console.log("changing bg to: ",username);
        document.body.style.backgroundColor = username;
        
    }
    return(
        <button onClick={setColor} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: username}}> {username} </button>
    )
}

export default Butt
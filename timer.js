import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function Timer(){
    const [time,settime]=useState(0);
    const reference=useRef(null);

    function start(){
       if(reference.current!=null){
        return;
       }
       reference.current=setInterval(()=>{
        settime(currtime=>currtime+1);
       },1000)
}
    function stop(){
       
        clearInterval(reference.current);
        reference.current=null;
    }
    
    function reset(){
        clearInterval(reference.current);
        reference.current=null;
        settime(0);
    }
    return(
        <>
        <h1>Timer:{time}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </>

    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer/>)
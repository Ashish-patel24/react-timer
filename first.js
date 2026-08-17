import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

function App(){
    let [count,setcount]=useState(0);
    let [fib,setfib]=useState("");

    function fibbonaci(n){
        if(n<=1){
            return n;
        }
        return fibbonaci(n-1)+fibbonaci(n-2);
    }

    let result=useMemo(()=>{
       return fibbonaci(fib);
    },[fib]);
    return(
        <>
        <h1>{count}</h1>
        <div>
        <button onClick={()=>setcount(count+1)}>increment</button>
        <button onClick={()=>setcount(count-1)}>decrement</button>
        </div>

        <div>
            <input placeholder="enter number" type="text" value={fib} onChange={(e)=>setfib(Number(e.target.value))}></input>
            <h1>fibbo is {result}</h1>
        </div>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
import { useState,useEffect } from "react";
import React from 'react';
function Useffect(){
    
    const [count,setCount]=useState(0);
 
    useEffect(()=>{
    let timer=setTimeout(()=>{
    setCount((count)=>count+1)
    },1000);
    return ()=>clearTimeout(timer)
    // ()=>`your count${count}`;
}
   )
   return <h3>Here is counting:{count}</h3>   


};

export default Useffect;

/*
function name=()=> 
settimout((),1000)
usefect((),[],[])


*/
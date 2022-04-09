import React from 'react';
import { useState,useRef,useEffect } from 'react';

function Useref () {
   const [inputvales,setinput]=useState('');
   const previousvalue=useRef("");
   const inputElement = useRef("");
  useEffect(()=>
  {
      previousvalue.current=inputvales;
  },[inputvales]
  )

  const focusInput = () => {
    inputElement.current.focus();
  };

    return (
        <div>
        <input type='text' 
        value={inputvales} 
        onChange={(e)=>setinput(e.target.value)}/>
         
        <h2>Current Value: {inputvales}</h2>
        <h2>Previous Value: {previousvalue.current}</h2>
        
        <input type="text" ref={inputElement} />
        {console.log(inputElement)}
        <button onClick={focusInput}>Focus Input</button>
        </div>
        
    )

};

export default Useref;
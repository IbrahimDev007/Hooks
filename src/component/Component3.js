import React,{useContext} from "react";
import Component4 from './Componenet4';
import { UseContext } from "./usecontex";
function Component3  ()  {
  const {value1,user} =useContext(UseContext)
    return (
        <div>
          component3 {value1}<br/>
          hello<h1>{user}</h1>
        <Component4/>
        </div>
    );
}
export default Component3;
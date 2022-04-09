import React,{useReducer} from "react";

const init={
    increment:'this is increment',
    decrement :"this is decrement"
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return{
                ...state,
                todo:'hello peter'
            }
            break;  
         case 'decrement':  
         return console.log('ibrahim')
        default:
            break;
    }

}
const Reducerpro = () => {
  
    const [state,dispatch]=useReducer(reducer,init)
    const dispatch3=()=>dispatch({type:"increment"})
    const dispatch2=()=>dispatch({type:"decrement"})

    return (
        
        <div>
            <button onClick={dispatch3}>dispatch</button>
            <br/>
            <button style={{color:'red',size:'100%'}} onClick={dispatch2}>dispatch002</button>
            {console.log(state)}
        </div>
    );
};

export default Reducerpro;

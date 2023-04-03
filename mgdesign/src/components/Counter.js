import React from 'react';
import "../styles/counter.css";

function Counter(){

   const [count,setCount] = React.useState(0);

   function add(){
        setCount(count + 1)                      
   }

   function subtract(){
        setCount(count - 1)                        
   }

   function reset(){
        setCount(0)                       
   }

   return(
       <div className="counter">
          <h1 className="counter--title">Counter</h1>
          <button className="counter--minus" onClick={subtract}> - </button>
          <div className="counter-count">
              <h1>{count}</h1>                 
          </div>
          <button className="counter--plus" onClick={add}> + </button>
          <button className="counter--reset" onClick={reset}>Reset</button>
       </div>                       
   )
}

export default Counter;
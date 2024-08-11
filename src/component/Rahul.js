import { useState } from "react";

export function Rahul() {
     
    const [count,setCount] = useState(0);
    // const handleIncrese = ()=>{
    //     setCount(count+1); 
    // }
    // // hw 1. handle the -ve values
    // const handleDecrease = ()=>{
    //     // if(count>0){
    //     //     setCount(count-1)
    //     // } else{
    //     //     setCount(0);
    //     // }
    //     count > 0 ? setCount(count-1) : setCount(0);
    // }
    // const initialState = ()=>{
    //     setCount(0); 
    // }

    
    // hw 2. make single function which perform all the task;

    const handleCount = (action)=>{
        console.log(action);
        if(action === 'increase'){
            setCount(count+1);
        }else if(action === 'decrease'){
            count > 0 ? setCount(count-1) : setCount(0);
        }else if(action === 'initial'){
            setCount(0);
        }
    }
  return(
    <div className="container">
        <h1>hi baby how are you doing</h1>
        <h2>{count}</h2>
        <button onClick={() => handleCount('increase')}>increase</button>
        <button onClick={() => handleCount('initial')}>initial</button>    
        <button onClick={() => handleCount('decrease')}>decrease</button>
        {/* <button onClick={handleIncrese}>increase</button>
        <button onClick={initialState}>initial</button>    
        <button onClick={handleDecrease}>decrease</button> */}
    </div>
  ) 
}

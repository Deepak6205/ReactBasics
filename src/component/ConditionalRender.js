import { useState } from "react"

export const ConditionalRender = () =>{
    const [show,setShow] = useState(false);
    const display = ()=>{
        setShow((previous)=>!previous);
    }
    return(
        <div>
            <h1>ConditionalRendering</h1>
            {show ? <h3>banglore</h3> : <h2>mugma</h2>}
            {console.log(show)}
            <button onClick={display}>changeLocation</button>
        </div>
        
    )
}
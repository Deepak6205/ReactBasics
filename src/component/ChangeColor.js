
import { useState } from "react"

export const ChangeColor = () =>{
    const[color,setColor] = useState(true);
    const green = () =>{
        setColor(false);
        
    }
    const yellow = () =>{
        setColor(false);
        
    }
    return(
        <>
        <div className={`${color ? 'clr' : 'green'}`} >
        </div>
        <button onClick={green}>green</button>
        <button onClick={yellow}>yellow</button>
        </>
    )
}
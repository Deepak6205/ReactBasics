import { data } from "../utils"


export const User = ({count,setCount,name}) =>{
    const increase = ()=>{
        setCount(count+1);
    }
    return(
        <>
            <p>{data.map((data)=>{
                return(
                    <div>
                        <p>{data.name},{data.id}</p>
                    </div>
                )
            })}</p>
            <button onClick={increase}>Increase</button>
            <p>{name}</p>
        </>
    )
}
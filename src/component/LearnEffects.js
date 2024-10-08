import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
const LearnEffects = () => {
  const [api, setApi] = useState([]);
  const[loader,setLoader] = useState(false);
 const navigate = useNavigate();
  const fetching = async () => {
    setLoader(true);
    try{
      const getApiData = await fetch("https://fakestoreapi.com/products");
      const getData = await getApiData.json();
      setApi(getData);
      console.log(getData);
    }catch(err){
      console.log(err);
    } 
    
  };
  useEffect(() => {
    fetching();
    console.log("hello");
  }, []);
  if(loader){
    return <Shimmer/>
  }
  return (
    <div className="parent">
    <div>{<Navbar/>}</div>
    <div className="center">
      <input type="search" placeholder="Search"></input>
    </div>
    
    <div className="containerCard">
      
       {api.map((data) => {
        return (
          <div className="card" key={data.id}>
            
            <img alt="abc"
              src={data.image}
              style={{ height: "150px", width: "150px" }}
            />
            <h3>{data.title.slice(0,5)+'...'}</h3>
            <p>{data.description.slice
                (0,5)+'...'}</p>
            <p>{data.price}</p>
            <button className="btn" onClick={()=>{
              navigate(`productDetails/${data.id}`)
            }}>view Details</button>
          </div>
        );
      })}
    </div>
    </div>
    // logic no. 1
    // Logic no.2 try catch wala part hai uper mai 
    // <>
    // {
    //   api.length === 0 ? <Shimmer/> :<div className="containerCard">
    //   {api.map((data) => {
    //     return (
    //       <div className="card">
    //         <img alt="abc"
    //           src={data.image}
    //           style={{ height: "150px", width: "150px" }}
    //         />
    //         <h3>{data.title.slice(0,5)+'...'}</h3>
    //         <p>{data.description.slice
    //             (0,5)+'...'}</p>
    //         <p>{data.price}</p>
    //       </div>
    //     );
    //   })}
    // </div>
    // }

    
    // </>
  );
};
export default LearnEffects;

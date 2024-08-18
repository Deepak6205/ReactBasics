import React, { useState,useEffect } from 'react'
import {  useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const[details,setDetails] = useState({});
  let  userId  = useParams();
  console.log(userId.id)
  const fetching = async () => {
    
    try{
      const getApiData = await fetch(`https://fakestoreapi.com/products/${userId.id}`);
       const getData = await getApiData.json();
       setDetails(getData);
      console.log(getData);
    }catch(err){
      console.log(err);
    } 
    
  };
  useEffect(() => {
    fetching();
    console.log("hello");
  }, []);
  return (
    <div className='containerDetails'>
      <div className='childDiv'>
        
        <div>
        <img alt='abc' src={details.image} style={{width:"250px"}}/>
      </div>
      <div>
        <h3>{details.title}</h3>
        <p>{details.description}</p>
        <p>{details.price}</p>
        <button>buy now</button>
      </div>
      </div>  
    </div>
  )
}

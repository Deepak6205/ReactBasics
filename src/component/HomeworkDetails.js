import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';

export const HomeworkDetails = () => {
    const[product,setProduct] = useState({});
    const  userId  = useParams();
    console.log(userId.id)
    const fetching = async () => {
      
      try{
        const getApiData = await fetch(`https://fakestoreapi.com/products/${userId.id}`);
         const getData = await getApiData.json();
         setProduct(getData);
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
        <div>
            <Navbar/>
        
      <div className='containerDetails'>
        <div className='childDiv'>
          
          <div>
          <img alt='abc' src={product.image} style={{width:"250px"}}/>
        </div>
        <div className='text'>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button className='btn'>buy now</button>
        </div>
        </div>  
      </div>
      </div>
    )
  }
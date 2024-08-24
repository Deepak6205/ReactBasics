import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar';
import { Shimmer } from './Shimmer';
import { useNavigate } from 'react-router';
import { SelectMenu } from './SelectMenu';

export const Homework = () => {
    const[api,setApi] = useState([]);
    const [loader,setLoader] = useState(false);
    const[select,setSelect] = useState("");
    const[filtervalue,setFiltervalue] = useState("");
    const navigate = useNavigate();
    const fetching = async () =>{
        setLoader(true);
        try{
            const getApiData = await fetch(`https://fakestoreapi.com/products?sort=${filtervalue}`);
            const getData = await getApiData.json();
            setApi(getData);
            console.log(getData);

        }catch(error){
            console.log(error);
        }finally{setLoader(false)}
    };
    const categoryFetching = async () =>{
        setLoader(true);
        try{
            const getApiData = await fetch(`https://fakestoreapi.com/products/category/${select}`);
            const getData = await getApiData.json();
            setApi(getData);
            console.log(getData);

        }catch(error){
            console.log(error);
        }finally{setLoader(false)}
    };
    const handleFilter = (action)=>{
        setFiltervalue(action);
        // if(action === 'asc'){
            
        //     setFiltervalue(action);
        // }else{
        //     setFiltervalue(action);
        // }
    }
    useEffect(()=>{
        !select ? fetching() : categoryFetching()
    },[filtervalue,select]);
    if(loader){
       return <Shimmer/>       
    }
  return (
    <div className='Parent'>
        <div>
            <Navbar/>
            
        </div>
        <div className="center">
            <div></div>
            <div>
                <div className='flex-center'>
                    <input type="search" placeholder="Search"></input>
                    <img alt='g' src='https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png'/>
                </div>
            </div>
            
            <div className='sideBtn'>
                <SelectMenu api={api} setSelect = {setSelect}/>
                <button className='btn'onClick={()=>handleFilter('asc')}>Ascending</button>
                <button className='btn' onClick={()=>handleFilter('desc')}>Descending</button>    
            </div>
            
            
        </div>
            {/* <div className='sideBtn'>
                <button className='btn'onClick={()=>handleFilter('asc')}>Ascending</button>
                <button className='btn' onClick={()=>handleFilter('desc')}>Descending</button>
            </div> */}
    <div className='cardParent'>
        {api.map((data) => {
            return(
        <div className='child' key={data.id}>
            <img alt='abc' src={data.image}/>
            <h3>{data.title.slice(0,25)}</h3>
            <p>{data.price} rs.</p>
            <p>{data.description.slice(0,50)}</p>
            <p>Rating = {data.rating.rate}</p>
            <button onClick={()=>{
                navigate(`HomeworkDetails/${data.id}`)
            }}>Add to Cart</button>
        </div> 
            )
        })}
        
    </div>
    </div>
  )
}

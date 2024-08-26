import React from 'react'

import { Homework } from './Homework';
import { useNavigate } from "react-router-dom";
export const Navbar = ({fetching}) => {
  const navigate = useNavigate();
  return (
    <div className='nav'>
        <div className='childOne'>
            <h2>YourShop</h2>
            <p onClick={()=>{
              navigate(`/`);
              fetching();
            }}>Home</p>
            {/* <Link to="/"> helllo</Link> */}
        </div>
        <div className='childTwo'>
            <img alt='c' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX_j2HFD4MwAWl5_IZxdFZrVjjxvWRhovI3UdXbsTAa7azcDe4kIf74XFuEfATjIh4HI&usqp=CAU'/>
        </div>
    </div>
  )
}

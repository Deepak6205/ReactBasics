import React from 'react'
import { Navigate } from 'react-router'
import { Homework } from './Homework';
export const Navbar = () => {
  return (
    <div className='nav'>
        <div className='childOne'>
            <h2>YourShop</h2>
            <p onClick={()=>{
              Navigate(`/${<Homework/>}`);
            }}>Home</p>
        </div>
        <div className='childTwo'>
            <img alt='c' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX_j2HFD4MwAWl5_IZxdFZrVjjxvWRhovI3UdXbsTAa7azcDe4kIf74XFuEfATjIh4HI&usqp=CAU'/>
        </div>
    </div>
  )
}

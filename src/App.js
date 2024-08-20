import logo from './logo.svg';
import './App.css';
import { Route , Routes} from "react-router-dom";
//import {Switch} from "react-router-dom"
//import {Rahul} from './component/Rahul';

import { ConditionalRender } from './component/ConditionalRender';
import { ChangeColor } from './component/ChangeColor';
import { Accordian } from './component/Accordian';
import { User } from './component/User';
import { useState } from 'react';
import LearnEffects from './component/LearnEffects';
import { ProductDetails } from './component/ProductDetails';
import { Navbar } from './component/Navbar';
import { Homework } from './component/Homework';


function App() {
  const[count,setCount] = useState(0);
  const[name,setName] = useState("Deepak");
  return (
    <div className="App">
        {/* <h1>hello world!{count}</h1> */}
        {/* <Rahul/> */}
        {/* <ConditionalRender/>
        <ChangeColor/> */}
        {/* <Accordian/>  */}
        {/* <User count={count} setCount={setCount} name={name}/>   */}
        {/* <LearnEffects/> */}
        {/* <Navbar/> */}
        {/* <Homework/> */}
    </div>
  );
}

export default App;

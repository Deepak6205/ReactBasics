import logo from './logo.svg';
import './App.css';
//import {Rahul} from './component/Rahul';

import { ConditionalRender } from './component/ConditionalRender';
import { ChangeColor } from './component/ChangeColor';
import { Accordian } from './component/Accordian';
import { User } from './component/User';
import { useState } from 'react';
import LearnEffects from './component/LearnEffects';


function App() {
  const[count,setCount] = useState(0);
  const[name,setName] = useState("Deepak");
  return (
    <div className="App">
        <h1>hello world!{count}</h1>
        {/* <Rahul/> */}
        {/* <ConditionalRender/>
        <ChangeColor/> */}
        {/* <Accordian/> */}
        {/* <User count={count} setCount={setCount} name={name}/> */}
        <LearnEffects/>
    </div>
  );
}

export default App;

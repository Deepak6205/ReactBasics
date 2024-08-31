import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//import {Switch} from "react-router-dom"
//import {Rahul} from './component/Rahul';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConditionalRender } from "./component/ConditionalRender";
import { ChangeColor } from "./component/ChangeColor";
import { Accordian } from "./component/Accordian";
import { User } from "./component/User";
import { useState } from "react";
import LearnEffects from "./component/LearnEffects";
import { ProductDetails } from "./component/ProductDetails";
import { Navbar } from "./component/Navbar";
import { Homework } from "./component/Homework";
import { HomeworkDetails } from "./component/HomeworkDetails";
import { Login } from "./component/Login";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Deepak");
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
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/homework" element={<Homework />} />
        <Route
          exact
          path="/homework/homeworkDetails/:id"
          element={<HomeworkDetails />}
        />
        {/* <Route exact path="/" element={<LearnEffects />} />
            <Route exact path="/productDetails/:id" element={<ProductDetails/>} /> */}
        {/* // <Route exact path="/user" element={ <User count={count} setCount={setCount} name={name}/>}/>  */}
      </Routes>
    </div>
  );
}

export default App;

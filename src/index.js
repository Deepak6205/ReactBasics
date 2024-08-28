import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LearnEffects from './component/LearnEffects';
import { ProductDetails } from './component/ProductDetails';
import { Navbar } from './component/Navbar';
import { Homework } from './component/Homework';
import { HomeworkDetails } from './component/HomeworkDetails';
import { Login } from './component/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<App/>
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Homework />} />
        <Route exact path="/homeworkDetails/:id" element={<HomeworkDetails/>} />
            {/* <Route exact path="/" element={<LearnEffects />} />
            <Route exact path="/productDetails/:id" element={<ProductDetails/>} /> */}
            {/* // <Route exact path="/user" element={ <User count={count} setCount={setCount} name={name}/>}/>  */}       
        </Routes>
    </BrowserRouter>  
  
);


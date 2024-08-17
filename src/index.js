import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LearnEffects from './component/LearnEffects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<LearnEffects />} />
    {/* <Route exact path="/productDetails" element={<ProductDetails/>} />
    <Route exact path="/user" element={ <User count={count} setCount={setCount} name={name}/>}/> */}

    </Routes>
    </BrowserRouter>  
  
);


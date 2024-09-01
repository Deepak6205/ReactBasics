import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { LoaderNew } from "./LoaderNew";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [visibility,setvisibility] = useState(true);
  const[loader,setLoader] = useState(false);
  const navigate = useNavigate();
  const fetchinglogin = async () => {
    setLoader(true);
    try {
      let myHeaders = new Headers();
      myHeaders.set("Content-Type", "application/json");
      const loginData = await fetch("https://fakestoreapi.com/auth/login", {

        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          username: input,
          password: password,
        }),
      })
        // const jsonData = await loginData.json();
        // console.log(jsonData);
        .then((res) => {
          if(res.status === 200){
            navigate("/homework");
            toast.success("Congratulations baby you are in")
          }
          if(res.status === 401){
            toast.error("Invalid username and password");
          }
        })
        
        .then((json) => {
          
        });
    } catch (error) {
      console.log(error);
    }finally{
      setLoader(false);
    }
  };
  return (
    <div className="login-Container">
      <div className="form-section">
        <div className="text">
          <h1>Login</h1>
          <p>login to get into the Yourshop.com</p>
        </div>
        <div>
          <form className="input-section" onSubmit={(e)=>{
            e.preventDefault()
            fetchinglogin()
          }}>
            <div className="user">
              <PersonOutlineOutlinedIcon/>
              <input type="text" id="userName" placeholder="Username" required onChange={(e)=>{
                setInput(e.target.value);
                
              }}/>
            </div>

            <div className="password">
            <HttpsOutlinedIcon/>
              <input type={!visibility ? "text" : "password"} id="password" placeholder="Password" required onChange={(e)=>{
                setPassword(e.target.value);
                
              }}/>
               {visibility ? <RemoveRedEyeIcon onClick={()=>setvisibility(false)}/>
                : <VisibilityOffIcon onClick={()=>setvisibility(true)}/>}
            </div>
            <div className="login-btn">
            <Button variant="contained" type="submit" >{!loader ? "Login now" : <LoaderNew/>}</Button>
            </div>
          </form>
        </div>
        
        <div className="login-links">
          <div>
            
            <p>Login with others </p>
          </div>  
          <div className="google">
            <img alt="google" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style={{width:"30px", height:"30px"}}/>
            <button className="g-btn">Login with google</button>
          </div>
          <div className="facebook">
            <img alt="facebook" src="https://img.icons8.com/?size=64&id=msQ6HdxpqUmi&format=png" style={{width:"30px", height:"30px"}}/>
            <button className="f-btn">Login with facebook</button>
          </div>
        </div>
      </div>



      <div className="img-section">
        <div className="bg-img">
          <img  alt="bg" src="https://png.pngtree.com/png-vector/20240415/ourmid/pngtree-creased-paper-texture-in-black-and-white-captivating-transparent-background-image-png-image_11931106.png"/> 
        </div>
      
        <div className="w-png"> 
          <div className="small-img">
          <div className="spark">
            <img alt="spark" src="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-lightning-thunderbolt-electricity-logo-design-template-spark-flash-arrow-vector-png-image_38438620.png"/>
          </div>
            <div className="htext">
              <h2>waiting for you Login Now!!!</h2>
            </div>
          <img alt="png" src="https://www.bmc.com/content/dam/bmc/solutions/personas/pn-next-gen-practictioner-female.png" style={{width:"200px"}}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

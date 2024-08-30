import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LoaderNew } from "./LoaderNew";
import Button from '@mui/material/Button';
export const Login = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [visibility,setvisibility] = useState(true);
  const[loader,setLoader] = useState(false);

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
        .then((res) => res.json())
        .then((json) => console.log(json));
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
              <img alt="usericon" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" style={{width:"24px", height:"24px"}}/>
              <input type="text" id="userName" placeholder="username" required onChange={(e)=>{
                setInput(e.target.value);
                
              }}/>
            </div>

            <div className="password">
              <img alt="usericon" src="https://w7.pngwing.com/pngs/975/821/png-transparent-password-manager-computer-icons-password-strength-password-safe-chang-miscellaneous-password-strength-password-safe-thumbnail.png" style={{width:"24px", height:"24px"}}/>
              <input type={!visibility ? "text" : "password"} id="password" placeholder="password" required onChange={(e)=>{
                setPassword(e.target.value);
                
              }}/>
               {visibility ? <RemoveRedEyeIcon onClick={()=>setvisibility(false)}/>
                : <VisibilityOffIcon onClick={()=>setvisibility(true)}/>}
            </div>
            <div className="login-btn">
            <Button variant="contained" type="submit" >{!loader ? "Login" : <LoaderNew/>}</Button>
            </div>
          </form>
        </div>
        
        <div className="login-links">
          <div>
            <hr/>
            <p>Login with others</p>
          </div>  
          <div className="google">
            <img alt="google" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style={{width:"30px", height:"30px"}}/>
            <button className="g-btn">Login with google</button>
          </div>
          <div className="facebook">
            <img alt="facebook" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwD0GVoucdBDsZvP6GDwB700bReUXpsEKA7A&s" style={{width:"30px", height:"30px"}}/>
            <button className="f-btn">Login with facebook</button>
          </div>
        </div>
      </div>



      <div className="img-section"></div>
    </div>
  );
};

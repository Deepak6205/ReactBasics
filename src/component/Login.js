import React, { useState } from "react";

export const Login = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const fetchinglogin = async () => {
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
    }
  };
  return (
    <div className="login">
      <div className="login-card">
        <form>
          <label for="fname">Username:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <br />
          <label for="lname">Password:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              fetchinglogin();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";


const Signup = () => {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const [username,setUserName]=useState("")
  const history = useHistory();


  const signup = (e) => {
    e.preventDefault();
   
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((authUser) => {
        history.push("/");
        alert("welcome");
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="col">
        <div className="account__login register">
          <div className="account__login--header mb-25">
            <h2 className="account__login--header__title h3 mb-10">
              Create an Account
            </h2>
            <p className="account__login--header__desc">
              Register here if you are a new customer
            </p>
          </div>
          <div className="account__login--inner">
            <label>
              <input
                className="account__login--input"
                placeholder="Username"
                type="text"
                onChange={(e)=>setUserName(e.target.value)}
                value={username}
                required
              />
            </label>
            <label>
              <input
                className="account__login--input"
                placeholder="Email Addres"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
              />
            </label>
            <label>
              <input
                className="account__login--input"
                placeholder="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
              />
            </label>
            <label>
              <input
                className="account__login--input"
                placeholder="Confirm Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
              />
            </label>
            <label>
              <button
                className="account__login--btn primary__btn mb-10"
                onClick={signup}
              >
                <Link to="/"> Submit &amp; Register</Link>
              </button>
              </label>
              <span>Already have an account?<Link to="/login"><u>Go to Login</u></Link></span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

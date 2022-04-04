import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Signup = () => {
  const emairef = useRef(null);
  const passwordref = useRef(null);
  const username = useRef("");
  const history = useHistory();
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emairef.current.value,
        passwordref.current.value
      )
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
                ref={username.current.value}
                required
              />
            </label>
            <label>
              <input
                className="account__login--input"
                placeholder="Email Addres"
                type="email"
                ref={emairef}
                required
              />
            </label>
            <label>
              <input
                className="account__login--input"
                placeholder="Password"
                type="password"
                ref={passwordref}
                required
              />
            </label>
            <label>
              <input
                className="account__login--input"
                placeholder="Confirm Password"
                type="password"
                ref={passwordref}
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
              <span>Already have an account?<Link to="/login"><u>Go to Login</u></Link></span>
            </label>
            <div className="account__login--remember position__relative">
              <input
                className="checkout__checkbox--input"
                id="check2"
                type="checkbox"
              />
              <span className="checkout__checkbox--checkmark" />
              <label
                className="checkout__checkbox--label login__remember--label"
                htmlFor="check2"
              >
                I have read and agree to the terms &amp; conditions
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

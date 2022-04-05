import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../features/userSlice";
import { auth, googleProvider } from "../firebase";


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history=useHistory()
  const dispatch=useDispatch()


  const signin=(e)=>{
e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
      .then((userAuth)=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        }))
        history.push('/')
        console.log(userAuth)
      }).catch((error)=>{
        alert(error.message)
      })
  }


  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleProvider)
    .then((result) => {
        dispatch(login({
            email: result.user.email,
            uid: result.user.uid,
            displayName: result.user.displayName,
            profileUrl: result.user.photoURL,
            }))
            console.log(result)
            history.push('/')
        }).catch((error) => alert(error.message));
};
  return (
    <div>
      {/* Start breadcrumb section */}
      <section className="breadcrumb__section breadcrumb__bg">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__content--title mb-10">Login Page</h1>
                <ul className="breadcrumb__content--menu d-flex">
                  <li className="breadcrumb__content--menu__items">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb__content--menu__items">
                    <span className="text__secondary">Login Page</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End breadcrumb section */}
      {/* Start login section  */}
      <div className="login__section section--padding">
        <div className="container">
          <form>
            <div className="login__section--inner">
              <div className="row row-cols-md-2 row-cols-1">
                <div className="col">
                  <div className="account__login">
                    <div className="account__login--header mb-25">
                      <h2 className="account__login--header__title h3 mb-10">
                        Login
                      </h2>
                      <p className="account__login--header__desc">
                        Login if you area a returning customer.
                      </p>
                    </div>
                    <div className="account__login--inner">
                      <label>
                        <input
                          className="account__login--input"
                          placeholder="Email Addres"
                          type="email"
                          onChange={(e)=>setEmail(e.target.value)}
                         value={email}
                       
                        />
                      </label>
                      <label>
                        <input
                          className="account__login--input"
                          placeholder="Password"
                          type="password"
                          onChange={(e)=>{setPassword(e.target.value)}}
                         value={password}
                         
                        />
                      </label>
                      <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                        <div className="account__login--remember position__relative">
                          <input
                            className="checkout__checkbox--input"
                            id="check1"
                            type="checkbox"
                          />
                          <span className="checkout__checkbox--checkmark" />
                          <label
                            className="checkout__checkbox--label login__remember--label"
                            htmlFor="check1"
                          >
                            Remember me
                          </label>
                        </div>
                        <button
                          className="account__login--forgot"
                          type="submit"
                        >
                          Forgot Your Password?
                        </button>
                      </div>
                      <button
                        className="account__login--btn primary__btn"
                        type="submit"
                        onClick={signin}
                      >
                     Login
                      </button>                   
                      <div className="account__login--divide">
                        <span className="account__login--divide__text">OR</span>
                      </div>
                      <div className="account__social d-flex justify-content-center mb-15">
                        <a
                          className="account__social--link facebook"
                          target="_blank"
                          href="https://www.facebook.com/"
                        >
                          Facebook
                        </a>
                        <a
                          className="account__social--link google"
                          target="_blank"
                          href="https://www.google.com/"
                          onClick={signInWithGoogle}
                        >
                          Google
                        </a>
                        <a
                          className="account__social--link twitter"
                          target="_blank"
                          href="https://twitter.com/"
                        >
                          Twitter
                        </a>
                      </div>
                      <p className="account__login--signup__text">
                        Don,t Have an Account?
                        <button type="submit" onClick={()=>{history.push('/signup')}}>Sign up now</button>
                      </p>
                    </div>
                  </div>
                </div>
                           </div>
            </div>
          </form>
        </div>
      </div>
      {/* End login section  */}
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
    <main className="main__content_wrapper">
    {/* Start breadcrumb section */}
    <section className="breadcrumb__section breadcrumb__bg">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div className="breadcrumb__content">
              <h1 className="breadcrumb__content--title mb-10">Error Page</h1>
              <ul className="breadcrumb__content--menu d-flex">
                <li className="breadcrumb__content--menu__items">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb__content--menu__items">
                  <span className="text__secondary">Error Page</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End breadcrumb section */}
    {/* Start error section */}
    <section className="error__section section--padding">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div className="error__content text-center">
              <img className="error__content--img mb-50" src="assets/img/other/404-thumb.webp" alt="error-img" />
              <h2 className="error__content--title">
                Opps ! We're not found this page
              </h2>
              <p className="error__content--desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi animi aliquid minima assumenda.
              </p>
              <a className="error__content--btn primary__btn" href="index.html">Back To Home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End error section */}
    {/* Start newsletter section */}
    <section className="newsletter__section newsletter__bg">
      <div className="container">
        <div className="row row-cols-md-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="newsletter__content position__relative">
              <h2 className="newsletter__content--title text-white">
                We Best To Immediately Do Subscribe Newsleter.
              </h2>
            </div>
          </div>
          <div className="col">
            <div className="newsletter__subscribe">
              <form className="newsletter__subscribe position__relative" action="#">
                <label>
                  <input className="newsletter__subscribe--input style2" placeholder="Enter Your Email" type="email" />
                </label>
                <button className="newsletter__subscribe--button style2 primary__btn" type="submit">
                  Subscribe
                  <svg className="newsletter__subscribe--button__icon" xmlns="http://www.w3.org/2000/svg" width="9.159" height="7.85" viewBox="0 0 9.159 7.85">
                    <path data-name="Icon material-send" d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z" transform="translate(-3 -4.5)" fill="currentColor" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End newsletter section */}
  </main>
    </div>
  );
};

export default ErrorPage;

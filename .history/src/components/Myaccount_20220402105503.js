import React from 'react'

const Myaccount = () => {
  return (
    <div>{/* Start breadcrumb section */}
    <section className="breadcrumb__section breadcrumb__bg">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div className="breadcrumb__content">
              <h1 className="breadcrumb__content--title mb-10">My Account</h1>
              <ul className="breadcrumb__content--menu d-flex">
                <li className="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
                <li className="breadcrumb__content--menu__items"><span className="text__secondary">My Account</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End breadcrumb section */}
    {/* my account section start */}
    <section className="my__account--section section--padding">
      <div className="container">
        <div className="my__account--section__inner border-radius-10 d-flex">
          <div className="account__left--sidebar">
            <h2 className="account__content--title h3 mb-20">My Profile</h2>
            <ul className="account__menu">
              <li className="account__menu--list"><a href="my-account.html">Dashboard</a></li>
              <li className="account__menu--list active"><a href="my-account-2.html">Addresses</a></li>
              <li className="account__menu--list"><a href="wishlist.html">Wishlist</a></li>
              <li className="account__menu--list"><a href="login.html">Log Out</a></li>
            </ul>
          </div>
          <div className="account__wrapper">
            <div className="account__content">
              <h2 className="account__content--title h3 mb-20">Addresses</h2>
              <button className="new__address--btn primary__btn mb-25" type="button">Add a new address</button>
              <div className="account__details two">
                <h3 className="account__details--title h4">Default</h3>
                <p className="account__details--desc">Admin <br /> Dhaka <br /> Dhaka 12119 <br /> Bangladesh</p>
                <a className="account__details--link" href="my-account-2.html">View Addresses (1)</a>
              </div>
              <div className="account__details--footer d-flex">
                <button className="account__details--footer__btn" type="button">Edit</button>
                <button className="account__details--footer__btn" type="button">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* my account section end */}
    {/* Start newsletter section */}
    <section className="newsletter__section newsletter__bg">
      <div className="container">
        <div className="row row-cols-md-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="newsletter__content position__relative">
              <h2 className="newsletter__content--title text-white">We Best To Immediately Do 
                Subscribe Newsleter.</h2>
            </div>
          </div>
          <div className="col">
            <div className="newsletter__subscribe">
              <form className="newsletter__subscribe position__relative" action="#">
                <label>
                  <input className="newsletter__subscribe--input style2" placeholder="Enter Your Email" type="email" />
                </label>
                <button className="newsletter__subscribe--button style2 primary__btn" type="submit">Subscribe
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
    {/* End newsletter section */}</div>
  )
}

export default Myaccount
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Start header area */}
      <header className="header__section">
        {/* Start Header topbar */}
        <div className="header__topbar bg__primary color-primary-2">
          <div className="container">
            <div className="header__topbar--inner d-flex align-items-center justify-content-between">
              <ul className="header__contact--info d-flex align-items-center">
                <li className="header__contact--info__list text-white">
                  <svg
                    className="header__contact--info__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.797"
                    height="20.05"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                    />
                  </svg>
                  <a href="tel:+8543553004">+8543553004</a>
                </li>
                <li className="header__contact--info__list text-white">
                  <svg
                    className="header__contact--info__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.57"
                    height="13.13"
                    viewBox="0 0 31.57 31.13"
                  >
                    <path
                      d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z"
                      transform="translate(-2 -4)"
                      fill="currentColor"
                    />
                  </svg>
                  <a href="mailto:demo@example.com">analog@cloud.com</a>
                </li>
              </ul>
              <div className="language__currency d-none d-lg-block">
                <ul className="d-flex align-items-center">
                  <li className="language__currency--list">
                    <a className="language__switcher text-white" href="#">
                      <span>ENG</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="dropdown__language">
                      <ul>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            France
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Russia
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Spanish
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language__currency--list">
                    <a className="account__currency--link text-white" href="#">
                      <span>USD</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="dropdown__currency">
                      <ul>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CAD
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CNY
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            EUR
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            GBP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Start Header topbar */}
        {/* Start main header */}
        <div className="main__header position__relative header__sticky">
          <div className="container">
            <div className="main__header--inner d-flex justify-content-between align-items-center">
              <div className="offcanvas__header--menu__open ">
                <a
                  className="offcanvas__header--menu__open--btn"
                  href="javascript:void(0)"
                  data-offcanvas
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon offcanvas__header--menu__open--svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                  <span className="visually-hidden">Offcanvas Menu Open</span>
                </a>
              </div>
              <div className="main__logo">
                <Link className="main__logo--link" to="/">
                  <img
                    className="main__logo--img"
                    src="assets/img/logo/nav-logo.webp"
                    alt="logo-img"
                  />
                </Link>
              </div>
              <div className="header__menu d-none d-lg-block">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items">
                      <Link className="header__menu--link" to="/">
                        Home <span className="menu__plus--icon"></span>
                      </Link>
                    </li>
                    <li className="header__menu--items mega__menu--items">
                      <Link className="header__menu--link" to="/shop">
                        Shop <span className="menu__plus--icon">+</span>
                      </Link>
                      <ul className="header__mega--menu d-flex">
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column One
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/shop-left-sidebar"
                              >
                                Shop Left Sidebar
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/shop-right-sidebar"
                              >
                                Shop Right Sidebar
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/shop-grid"
                              >
                                Shop Grid
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/shop-grid-list"
                              >
                                Shop Grid List
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/shoplist"
                              >
                                Shop List
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column Two
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/product-details"
                              >
                                Standard Product
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/product-video"
                              >
                                Video Product
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/product-horizontal"
                              >
                                Product Horizontal
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="product-left-sidebar.html"
                              >
                                Product Left Sidebar
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="product-gallery.html"
                              >
                                Product Gallery
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column Three
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/myaccount"
                              >
                                My Account
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/my-account-2"
                              >
                                My Account 2
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="*"
                              >
                                404 Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/login"
                              >
                                Login Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/faq"
                              >
                                Faq Page
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column Four
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/compare"
                              >
                                Compare Pages
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/cart"
                              >
                                Cart Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/checkout"
                              >
                                Checkout page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/wishlist"
                              >
                                Wishlist Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/Error-404"
                              >
                                Error Page
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column Five
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/about"
                              >
                                About Us
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/contact-us"
                              >
                                Contact Us
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/privacy-policy"
                              >
                                Privacy Policy
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/faq"
                              >
                                Frequently
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                to="/login"
                              >
                                Register
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items">
                      <Link className="header__menu--link" to="/about">
                        About US
                      </Link>
                    </li>
                    <li className="header__menu--items">
                      <Link className="header__menu--link " to="#">
                        Pages <span className="menu__plus--icon">+</span>
                      </Link>
                      <ul className="header__sub--menu">
                        <li className="header__sub--menu__items">
                          <Link to="/about" className="header__sub--menu__link">
                            About Us
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            to="/contact-us"
                            className="header__sub--menu__link"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link to="/cart" className="header__sub--menu__link">
                            Cart Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            to="/portfolio"
                            className="header__sub--menu__link"
                          >
                            Portfolio Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            to="/wishlist"
                            className="header__sub--menu__link"
                          >
                            Wishlist Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link to="/login" className="header__sub--menu__link">
                            Login Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            to="/signup"
                            className="header__sub--menu__link"
                          >
                            Sign-up Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            to="Error404"
                            className="header__sub--menu__link"
                          >
                            Error Page
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items">
                      <Link className="header__menu--link" to="/contact-us">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__account">
                <ul className="d-flex">
                  <li className="header__account--items  header__account--search__items d-md-none">
                    <a
                      className="header__account--btn search__open--btn"
                      href="javascript:void(0)"
                      data-offcanvas
                    >
                      <svg
                        className="header__search--button__svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                          d="M338.29 338.29L448 448"
                        />
                      </svg>
                      <span className="visually-hidden">Search</span>
                    </a>
                  </li>
                  <li className="header__account--items">
                    <Link className="header__account--btn" to="/myaccount">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                        <path
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                        />
                      </svg>
                      <span className="visually-hidden">My Account</span>
                    </Link>
                  </li>
                  <li className="header__account--items">
                  <Link className="header__account--btn" to="/myaccount">
                   <img src="assets/img/signup.png" height={12}/>
                    <span className="visually-hidden">signUP</span>
                  </Link>
                </li>
                  <li className="header__account--items">
                    <a
                      className="header__account--btn minicart__open--btn"
                      href="javascript:void(0)"
                      data-offcanvas
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.897"
                        height="21.565"
                        viewBox="0 0 18.897 21.565"
                      >
                        <path
                          d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                          transform="translate(-2.667 -1.366)"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="items__count">02</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End main header */}
        {/* Start Offcanvas header menu */}
        <div className="offcanvas-header" tabIndex={-1}>
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <a className="offcanvas__logo_link" href="index.html">
                <img src="assets/img/logo/nav-logo.webp" alt="Rokon Logo" />
              </a>
              <button className="offcanvas__close--btn" data-offcanvas>
                close
              </button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="index.html">
                    Home
                  </a>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="#">
                    Shop
                  </a>
                  <ul className="offcanvas__sub_menu">
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Column One
                      </a>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="shop.html"
                          >
                            Shop Left Sidebar
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="shop-right-sidebar.html"
                          >
                            Shop Right Sidebar
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="shop-grid.html"
                          >
                            Shop Grid
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="shop-grid-list.html"
                          >
                            Shop Grid List
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="shop-list.html"
                          >
                            Shop List
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Column Two
                      </a>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="product-details.html"
                          >
                            Standard Product
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="product-video.html"
                          >
                            Video Product
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="product-horizontal.html"
                          >
                            Product Horizontal
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="product-left-sidebar.html"
                          >
                            Product Left Sidebar
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="product-gallery.html"
                          >
                            Product Gallery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Column Three
                      </a>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="my-account.html"
                          >
                            My Account
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="my-account-2.html"
                          >
                            My Account 2
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="404.html"
                          >
                            404 Page
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="login.html"
                          >
                            Login Page
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link className="offcanvas__sub_menu_item" to="/faq">
                            Faq Page
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Column Four
                      </a>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="compare.html"
                          >
                            Compare Pages
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="cart.html"
                          >
                            Cart Page
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="checkout.html"
                          >
                            Checkout page
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="wishlist.html"
                          >
                            Wishlist Page
                          </a>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <a
                            className="offcanvas__sub_menu_item"
                            href="404.html"
                          >
                            Error Page
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="#">
                    Pages
                  </a>
                  <ul className="offcanvas__sub_menu">
                    <li className="offcanvas__sub_menu_li">
                      <a href="about.html" className="offcanvas__sub_menu_item">
                        About Us
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a
                        href="contact.html"
                        className="offcanvas__sub_menu_item"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="cart.html" className="offcanvas__sub_menu_item">
                        Cart Page
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a
                        href="portfolio.html"
                        className="offcanvas__sub_menu_item"
                      >
                        Portfolio Page
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a
                        href="wishlist.html"
                        className="offcanvas__sub_menu_item"
                      >
                        Wishlist Page
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="login.html" className="offcanvas__sub_menu_item">
                        Login Page
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="404.html" className="offcanvas__sub_menu_item">
                        Error Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="about.html">
                    About
                  </a>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="offcanvas__account--items">
                <a
                  className="offcanvas__account--items__btn d-flex align-items-center"
                  href="login.html"
                >
                  <span className="offcanvas__account--items__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.51"
                      height="19.443"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                      />
                      <path
                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                      />
                    </svg>
                  </span>
                  <span className="offcanvas__account--items__label">
                    Login / Register
                  </span>
                </a>
              </div>
              <div className="language__currency">
                <ul className="d-flex align-items-center">
                  <li className="language__currency--list">
                    <a className="offcanvas__language--switcher" href="#">
                      <img
                        className="language__switcher--icon__img"
                        src="assets/img/icon/language-icon.webp"
                        alt="currency"
                      />
                      <span>English</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="offcanvas__dropdown--language">
                      <ul>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            France
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Russia
                          </a>
                        </li>
                        <li className="language__items">
                          <a className="language__text" href="#">
                            Spanish
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language__currency--list">
                    <a className="offcanvas__account--currency__menu" href="#">
                      <img src="assets/img/icon/usd-icon.webp" alt="currency" />
                      <span>$ US Dollar</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="offcanvas__account--currency__submenu">
                      <ul>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CAD
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            CNY
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            EUR
                          </a>
                        </li>
                        <li className="currency__items">
                          <a className="currency__text" href="#">
                            GBP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* End Offcanvas header menu */}
        {/* Start Offcanvas stikcy toolbar */}
        <div className="offcanvas__stikcy--toolbar" tabIndex={-1}>
          <ul className="d-flex justify-content-between">
            <li className="offcanvas__stikcy--toolbar__list">
              <a className="offcanvas__stikcy--toolbar__btn" href="index.html">
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="21.51"
                    height="21.443"
                    viewBox="0 0 22 17"
                  >
                    <path
                      fill="currentColor"
                      d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Home</span>
              </a>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <a className="offcanvas__stikcy--toolbar__btn" href="shop.html">
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.51"
                    height="17.443"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z" />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Shop</span>
              </a>
            </li>
            <li className="offcanvas__stikcy--toolbar__list ">
              <a
                className="offcanvas__stikcy--toolbar__btn search__open--btn"
                href="javascript:void(0)"
                data-offcanvas
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.51"
                    height="20.443"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M338.29 338.29L448 448"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">
                  Search
                </span>
              </a>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <a
                className="offcanvas__stikcy--toolbar__btn minicart__open--btn"
                href="javascript:void(0)"
                data-offcanvas
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.51"
                    height="15.443"
                    viewBox="0 0 18.51 15.443"
                  >
                    <path
                      d="M79.963,138.379l-13.358,0-.56-1.927a.871.871,0,0,0-.6-.592l-1.961-.529a.91.91,0,0,0-.226-.03.864.864,0,0,0-.226,1.7l1.491.4,3.026,10.919a1.277,1.277,0,1,0,1.844,1.144.358.358,0,0,0,0-.049h6.163c0,.017,0,.034,0,.049a1.277,1.277,0,1,0,1.434-1.267c-1.531-.247-7.783-.55-7.783-.55l-.205-.8h7.8a.9.9,0,0,0,.863-.651l1.688-5.943h.62a.936.936,0,1,0,0-1.872Zm-9.934,6.474H68.568c-.04,0-.1.008-.125-.085-.034-.118-.082-.283-.082-.283l-1.146-4.037a.061.061,0,0,1,.011-.057.064.064,0,0,1,.053-.025h1.777a.064.064,0,0,1,.063.051l.969,4.34,0,.013a.058.058,0,0,1,0,.019A.063.063,0,0,1,70.03,144.853Zm3.731-4.41-.789,4.359a.066.066,0,0,1-.063.051h-1.1a.064.064,0,0,1-.063-.051l-.789-4.357a.064.064,0,0,1,.013-.055.07.07,0,0,1,.051-.025H73.7a.06.06,0,0,1,.051.025A.064.064,0,0,1,73.76,140.443Zm3.737,0L76.26,144.8a.068.068,0,0,1-.063.049H74.684a.063.063,0,0,1-.051-.025.064.064,0,0,1-.013-.055l.973-4.357a.066.066,0,0,1,.063-.051h1.777a.071.071,0,0,1,.053.025A.076.076,0,0,1,77.5,140.448Z"
                      transform="translate(-62.393 -135.3)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Cart</span>
                <span className="items__count">3</span>
              </a>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <a
                className="offcanvas__stikcy--toolbar__btn"
                href="wishlist.html"
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.541"
                    height="15.557"
                    viewBox="0 0 18.541 15.557"
                  >
                    <path
                      d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z"
                      transform="translate(-62.498 -132.915)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">
                  Wishlist
                </span>
                <span className="items__count wishlist__count">3</span>
              </a>
            </li>
          </ul>
        </div>
        {/* End Offcanvas stikcy toolbar */}
        {/* Start offCanvas minicart */}
        <div className="offCanvas__minicart" tabIndex={-1}>
          <div className="minicart__header ">
            <div className="minicart__header--top d-flex justify-content-between align-items-center">
              <h3 className="minicart__title"> Shopping Cart</h3>
              <button
                className="minicart__close--btn"
                aria-label="minicart close btn"
                data-offcanvas
              >
                <svg
                  className="minicart__close--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M368 368L144 144M368 144L144 368"
                  />
                </svg>
              </button>
            </div>
            <p className="minicart__header--desc">
              The organic foods products are limited
            </p>
          </div>
          <div className="minicart__product">
            <div className="minicart__product--items d-flex">
              <div className="minicart__thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/img/product/small-product1.webp"
                    alt="prduct-img"
                  />
                </a>
              </div>
              <div className="minicart__text">
                <h4 className="minicart__subtitle">
                  <a href="product-details.html">TAdvanced Analytic</a>
                </h4>
                <span className="color__variant">
                  <b>Color:</b> Beige
                </span>
                <div className="minicart__price">
                  <span className="current__price">$125.00</span>
                  <span className="old__price">$140.00</span>
                </div>
                <div className="minicart__text--footer d-flex align-items-center">
                  <div className="quantity__box minicart__quantity">
                    <button
                      type="button"
                      className="quantity__value decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      -
                    </button>
                    <label>
                      <input
                        type="number"
                        className="quantity__number"
                        defaultValue={1}
                        data-counter
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="minicart__product--remove"
                    aria-label="minicart remove btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="minicart__product--items d-flex">
              <div className="minicart__thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/img/product/small-product2.webp"
                    alt="prduct-img"
                  />
                </a>
              </div>
              <div className="minicart__text">
                <h4 className="minicart__subtitle">
                  <a href="product-details.html">Warrison Samuel.</a>
                </h4>
                <span className="color__variant">
                  <b>Color:</b> Green
                </span>
                <div className="minicart__price">
                  <span className="current__price">$115.00</span>
                  <span className="old__price">$130.00</span>
                </div>
                <div className="minicart__text--footer d-flex align-items-center">
                  <div className="quantity__box minicart__quantity">
                    <button
                      type="button"
                      className="quantity__value decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      -
                    </button>
                    <label>
                      <input
                        type="number"
                        className="quantity__number"
                        defaultValue={1}
                        data-counter
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="minicart__product--remove"
                    aria-label="minicart remove btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="minicart__amount">
            <div className="minicart__amount_list d-flex justify-content-between">
              <span>Sub Total:</span>
              <span>
                <b>$240.00</b>
              </span>
            </div>
            <div className="minicart__amount_list d-flex justify-content-between">
              <span>Total:</span>
              <span>
                <b>$240.00</b>
              </span>
            </div>
          </div>
          <div className="minicart__conditions text-center">
            <input
              className="minicart__conditions--input"
              id="accept"
              type="checkbox"
            />
            <label className="minicart__conditions--label" htmlFor="accept">
              I agree with the{" "}
              <a
                className="minicart__conditions--link"
                href="privacy-policy.html"
              >
                Privacy And Policy
              </a>
            </label>
          </div>
          <div className="minicart__button d-flex justify-content-center">
            <a className="primary__btn minicart__button--link" href="cart.html">
              View cart
            </a>
            <a
              className="primary__btn minicart__button--link"
              href="checkout.html"
            >
              Checkout
            </a>
          </div>
        </div>
        {/* End offCanvas minicart */}
        {/* Start serch box area */}
        <div className="predictive__search--box " tabIndex={-1}>
          <div className="predictive__search--box__inner">
            <h2 className="predictive__search--title">Search Products</h2>
            <form className="predictive__search--form" action="#">
              <label>
                <input
                  className="predictive__search--input"
                  placeholder="Search Here"
                  type="text"
                />
              </label>
              <button
                className="predictive__search--button"
                aria-label="search button"
              >
                <svg
                  className="header__search--button__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30.51"
                  height="25.443"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              </button>
            </form>
          </div>
          <button
            className="predictive__search--close__btn"
            aria-label="search close btn"
            data-offcanvas
          >
            <svg
              className="predictive__search--close__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="40.51"
              height="30.443"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </div>
        {/* End serch box area */}
      </header>
      {/* End header area */}
    </div>
  );
};

export default Header;

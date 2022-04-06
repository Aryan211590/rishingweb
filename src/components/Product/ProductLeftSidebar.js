import React from 'react'
import ShopFooter from '../Shop/ShopFooter'

const ProductLeftSidebar = () => {
  return (
   <>
   <main className="main__content_wrapper">
  {/* Start breadcrumb section */}
  <section className="breadcrumb__section breadcrumb__bg">
    <div className="container">
      <div className="row row-cols-1">
        <div className="col">
          <div className="breadcrumb__content">
            <h1 className="breadcrumb__content--title mb-10">Product Sidebar</h1>
            <ul className="breadcrumb__content--menu d-flex">
              <li className="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
              <li className="breadcrumb__content--menu__items"><span className="text__secondary">Product Sidebar</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End breadcrumb section */}
  {/* Start product details section */}
  <section className="product__details--section  section--padding">
    <div className="container-fluid">
      <div className="row row-md-reverse">
        <div className="col-xl-3 col-lg-4">
          <div className="product__sidebar--widget widget__area">
            <div className="single__widget widget__bg">
              <h2 className="widget__title position__relative h3">Search</h2>
              <form className="widget__search--form" action="#">
                <label>
                  <input className="widget__search--form__input border-0" placeholder="Search by" type="text" />
                </label>
                <button className="widget__search--form__btn" type="submit" aria-label="search button">
                  <svg className="widget__search--form__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                </button>
              </form>
            </div>
            <div className="single__widget widget__bg">
              <h2 className="widget__title position__relative h3">Categories</h2>
              <ul className="widget__categories--menu">
                <li className="widget__categories--menu__list">
                  <label className="widget__categories--menu__label d-flex align-items-center">
                    <img className="widget__categories--menu__img" src="assets/img/product/small-product1.webp" alt="categories-img" />
                    <span className="widget__categories--menu__text">Denim Jacket</span>
                    <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                      <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                    </svg>
                  </label>
                  <ul className="widget__categories--sub__menu">
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Western denim</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="widget__categories--menu__list">
                  <label className="widget__categories--menu__label d-flex align-items-center">
                    <img className="widget__categories--menu__img" src="assets/img/product/small-product2.webp" alt="categories-img" />
                    <span className="widget__categories--menu__text">Oversize Cotton</span>
                    <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                      <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                    </svg>
                  </label>
                  <ul className="widget__categories--sub__menu">
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Western denim</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="widget__categories--menu__list">
                  <label className="widget__categories--menu__label d-flex align-items-center">
                    <img className="widget__categories--menu__img" src="assets/img/product/small-product3.webp" alt="categories-img" />
                    <span className="widget__categories--menu__text">Dairy &amp; chesse</span>
                    <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                      <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                    </svg>
                  </label>
                  <ul className="widget__categories--sub__menu">
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Western denim</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="widget__categories--menu__list">
                  <label className="widget__categories--menu__label d-flex align-items-center">
                    <img className="widget__categories--menu__img" src="assets/img/product/small-product4.webp" alt="categories-img" />
                    <span className="widget__categories--menu__text">Shoulder Bag</span>
                    <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                      <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                    </svg>
                  </label>
                  <ul className="widget__categories--sub__menu">
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Western denim</span>
                      </a>
                    </li>
                    <li className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img" />
                        <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="single__widget price__filter widget__bg">
              <h2 className="widget__title position__relative h3">Filter By Price</h2>
              <form className="price__filter--form" action="#"> 
                <div className="price__filter--form__inner mb-15 d-flex align-items-center">
                  <div className="price__filter--group">
                    <label className="price__filter--label" htmlFor="Filter-Price-GTE1">From</label>
                    <div className="price__filter--input border-radius-5 d-flex align-items-center">
                      <span className="price__filter--currency">$</span>
                      <input className="price__filter--input__field border-0" id="Filter-Price-GTE1" name="filter.v.price.gte" type="number" placeholder={0} min={0} max={250.00} />
                    </div>
                  </div>
                  <div className="price__divider">
                    <span>-</span>
                  </div>
                  <div className="price__filter--group">
                    <label className="price__filter--label" htmlFor="Filter-Price-LTE1">To</label>
                    <div className="price__filter--input border-radius-5 d-flex align-items-center">
                      <span className="price__filter--currency">$</span>
                      <input className="price__filter--input__field border-0" id="Filter-Price-LTE1" name="filter.v.price.lte" type="number" min={0} placeholder={250.00} max={250.00} /> 
                    </div>	
                  </div>
                </div>
                <button className="price__filter--btn primary__btn" type="submit">Filter</button>
              </form>
            </div>
            <div className="single__widget widget__bg">
              <h2 className="widget__title position__relative h3">Dietary Needs</h2>
              <ul className="widget__form--check">
                <li className="widget__form--check__list">
                  <label className="widget__form--check__label" htmlFor="check1">Denim shirt</label>
                  <input className="widget__form--check__input" id="check1" type="checkbox" />
                  <span className="widget__form--checkmark" />
                </li>
                <li className="widget__form--check__list">
                  <label className="widget__form--check__label" htmlFor="check2">Need Winter</label>
                  <input className="widget__form--check__input" id="check2" type="checkbox" />
                  <span className="widget__form--checkmark" />
                </li>
                <li className="widget__form--check__list">
                  <label className="widget__form--check__label" htmlFor="check3">Fashion Trends</label>
                  <input className="widget__form--check__input" id="check3" type="checkbox" />
                  <span className="widget__form--checkmark" />
                </li>
                <li className="widget__form--check__list">
                  <label className="widget__form--check__label" htmlFor="check4">Oversize Cotton</label>
                  <input className="widget__form--check__input" id="check4" type="checkbox" />
                  <span className="widget__form--checkmark" />
                </li>
              </ul>
            </div>
            <div className="single__widget widget__bg">
              <h2 className="widget__title position__relative h3">Top Rated Product</h2>
              <div className="product__sidebar">
                <div className="small__product d-flex align-items-center mb-20">
                  <div className="small__product--thumbnail position__relative">
                    <a className="small__product--link display-block" href="product-details.html">
                      <img className="small__product--img display-block" src="assets/img/product/small-product1.webp" alt="product-img" />
                    </a>
                  </div>
                  <div className="small__product--content">
                    <h3 className="small__product--title h4"><a href="product-details.html">Advanced Analytic </a></h3>
                    <div className="small__product--price">
                      <span className="current__price">$245</span>
                      <span className="price__divided" />
                      <span className="old__price"> $356</span>
                    </div>
                    <ul className="rating small__product--rating d-flex">
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                    </ul>
                  </div>
                </div>
                <div className="small__product d-flex align-items-center mb-20">
                  <div className="small__product--thumbnail position__relative">
                    <a className="small__product--link display-block" href="product-details.html">
                      <img className="small__product--img display-block" src="assets/img/product/small-product2.webp" alt="product-img" />
                    </a>
                  </div>
                  <div className="small__product--content">
                    <h3 className="small__product--title h4"><a href="product-details.html">Advanced To Watch</a></h3>
                    <div className="small__product--price">
                      <span className="current__price">$255</span>
                      <span className="price__divided" />
                      <span className="old__price"> $375</span>
                    </div>
                    <ul className="rating small__product--rating d-flex">
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                    </ul>
                  </div>
                </div>
                <div className="small__product d-flex align-items-center">
                  <div className="small__product--thumbnail position__relative">
                    <a className="small__product--link display-block" href="product-details.html">
                      <img className="small__product--img display-block" src="assets/img/product/small-product3.webp" alt="product-img" />
                    </a>
                  </div>
                  <div className="small__product--content">
                    <h3 className="small__product--title h4"><a href="product-details.html">Lorem ipsum dolor. </a></h3>
                    <div className="small__product--price">
                      <span className="current__price">$230</span>
                      <span className="price__divided" />
                      <span className="old__price"> $330</span>
                    </div>
                    <ul className="rating small__product--rating d-flex">
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__list--icon">
                          <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                            <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="single__widget widget__bg">
              <h2 className="widget__title position__relative h3">Brands</h2>
              <ul className="widget__tagcloud">
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Wooden</a></li>
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Chair</a></li>
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Modern</a></li>
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Fabric</a></li>
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Shoulder </a></li>
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Winter</a></li>
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Accessories</a></li>
                <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="shop.html">Dress </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="product__details--sidebar__wrapper">
            <div className="product__sidebar--wrapper__top section--padding pt-0">
              <div className="row row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-1">
                <div className="col">
                  <div className="product__details--media details__media--position d-flex">
                    <div className="product__media--nav sidebar__style swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img className="product__media--nav__items--img" src="assets/img/product/small-product1.webp" alt="product-nav-img" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img className="product__media--nav__items--img" src="assets/img/product/small-product2.webp" alt="product-nav-img" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img className="product__media--nav__items--img" src="assets/img/product/small-product3.webp" alt="product-nav-img" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img className="product__media--nav__items--img" src="assets/img/product/small-product4.webp" alt="product-nav-img" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img className="product__media--nav__items--img" src="assets/img/product/small-product1.webp" alt="product-nav-img" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img className="product__media--nav__items--img" src="assets/img/product/small-product2.webp" alt="product-nav-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__media--right sidebar__style">
                      <div className="product__media--preview  swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product1.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product1.webp" alt="product-media-img" /></a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <div className="product__media--view__icon">
                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product1.webp" data-gallery="product-media-preview">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={18} height={18} viewBox="0 0 18 18">
                                    <image width={18} height={18} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC" />
                                  </svg>                                                              
                                  <span className="visually-hidden">Media Gallery</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product1.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product1.webp" alt="product-media-img" /></a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <div className="product__media--view__icon">
                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product1.webp" data-gallery="product-media-preview">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={18} height={18} viewBox="0 0 18 18">
                                    <image width={18} height={18} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC" />
                                  </svg>                                                              
                                  <span className="visually-hidden">Media Gallery</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product1.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product1.webp" alt="product-media-img" /></a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <div className="product__media--view__icon">
                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product1.webp" data-gallery="product-media-preview">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={18} height={18} viewBox="0 0 18 18">
                                    <image width={18} height={18} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC" />
                                  </svg>                                                              
                                  <span className="visually-hidden">Media Gallery</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product1.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product1.webp" alt="product-media-img" /></a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <div className="product__media--view__icon">
                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product1.webp" data-gallery="product-media-preview">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={18} height={18} viewBox="0 0 18 18">
                                    <image width={18} height={18} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC" />
                                  </svg>                                                              
                                  <span className="visually-hidden">Media Gallery</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product1.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product1.webp" alt="product-media-img" /></a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <div className="product__media--view__icon">
                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product1.webp" data-gallery="product-media-preview">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={18} height={18} viewBox="0 0 18 18">
                                    <image width={18} height={18} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC" />
                                  </svg>                                                              
                                  <span className="visually-hidden">Media Gallery</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" href="assets/img/product/big-product1.webp"><img className="product__media--preview__items--img" src="assets/img/product/big-product1.webp" alt="product-media-img" /></a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <div className="product__media--view__icon">
                                <a className="product__media--view__icon--link glightbox" href="assets/img/product/big-product1.webp" data-gallery="product-media-preview">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={18} height={18} viewBox="0 0 18 18">
                                    <image width={18} height={18} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC" />
                                  </svg>                                                              
                                  <span className="visually-hidden">Media Gallery</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper__nav--btn swiper-button-next" />
                        <div className="swiper__nav--btn swiper-button-prev" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="product__details--info product__info--sidebar__style">
                    <form action="#">
                      <h3 className="product__details--info__title mb-15">BASIC MICRO DAYS MONEY BACK GUARANTEE.</h3>
                      <div className="product__details--info__rating d-flex align-items-center mb-15">
                        <ul className="rating product__list--rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="13.105" height="13.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list"><span className="rating__list--text text__secondary">( 5.0)</span></li>
                        </ul>
                      </div>
                      <div className="product__details--info__price mb-10">
                        <span className="current__price">$299.00</span>
                        <span className="old__price">$320.00</span>
                      </div> 
                      <p className="product__details--info__desc mb-15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam ullam is recusandae laborum explicabo id sequi quisquam, ab sunt deleniti quidem.</p>
                      <div className="product__variant">
                        <div className="product__variant--list mb-15">
                          <fieldset className="variant__input--fieldset">
                            <legend className="product__variant--title mb-8">Color :</legend>
                            <div className="variant__color d-flex">
                              <div className="variant__color--list">
                                <input id="color-red1" name="color" type="radio" defaultChecked />
                                <label className="variant__color--value red" htmlFor="color-red1" title="Red"><img className="variant__color--value__img" src="assets/img/product/small-product1.webp" alt="variant-color-img" /></label>
                              </div>
                              <div className="variant__color--list">
                                <input id="color-red2" name="color" type="radio" />
                                <label className="variant__color--value red" htmlFor="color-red2" title="Black"><img className="variant__color--value__img" src="assets/img/product/small-product2.webp" alt="variant-color-img" /></label>
                              </div>
                              <div className="variant__color--list">
                                <input id="color-red3" name="color" type="radio" />
                                <label className="variant__color--value red" htmlFor="color-red3" title="Pink"><img className="variant__color--value__img" src="assets/img/product/small-product3.webp" alt="variant-color-img" /></label>
                              </div>
                              <div className="variant__color--list">
                                <input id="color-red4" name="color" type="radio" />
                                <label className="variant__color--value red" htmlFor="color-red4" title="Orange"><img className="variant__color--value__img" src="assets/img/product/small-product4.webp" alt="variant-color-img" /></label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div className="product__variant--list mb-20">
                          <fieldset className="variant__input--fieldset">
                            <legend className="product__variant--title mb-8">Weight :</legend>
                            <ul className="variant__size d-flex">
                              <li className="variant__size--list">
                                <input id="weight1" name="weight" type="radio" defaultChecked />
                                <label className="variant__size--value red" htmlFor="weight1">5 kg</label>
                              </li>
                              <li className="variant__size--list">
                                <input id="weight2" name="weight" type="radio" />
                                <label className="variant__size--value red" htmlFor="weight2">3 kg</label>
                              </li>
                              <li className="variant__size--list">
                                <input id="weight3" name="weight" type="radio" />
                                <label className="variant__size--value red" htmlFor="weight3">2 kg</label>
                              </li>
                            </ul>
                          </fieldset>
                        </div>
                        <div className="product__variant--list quantity d-flex align-items-center mb-20">
                          <div className="quantity__box">
                            <button type="button" className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                            <label>
                              <input type="number" className="quantity__number quickview__value--number" defaultValue={1} data-counter />
                            </label>
                            <button type="button" className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                          </div>
                          <button className="quickview__cart--btn primary__btn" type="submit">Add To Cart</button>  
                          <a className="variant__wishlist--icon" href="wishlist.html" title="Add to wishlist">
                            <svg className="quickview__variant--wishlist__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                            Add to Wishlist
                          </a>
                        </div>
                        <div className="product__variant--list mb-15">
                          <button className="variant__buy--now__btn primary__btn" type="submit">Buy it now</button>
                        </div>
                        <div className="product__variant--list mb-15">
                          <div className="product__details--info__meta">
                            <p className="product__details--info__meta--list"><strong>Barcode:</strong>  <span>565461</span> </p>
                            <p className="product__details--info__meta--list"><strong>Sky:</strong>  <span>4420</span> </p>
                            <p className="product__details--info__meta--list"><strong>Vendor:</strong>  <span>Drone</span> </p>
                            <p className="product__details--info__meta--list"><strong>Type:</strong>  <span>Sofa</span> </p>
                          </div>
                        </div>
                      </div>
                      <div className="quickview__social d-flex align-items-center mb-15">
                        <label className="quickview__social--title">Social Share:</label>
                        <ul className="quickview__social--wrapper mt-0 d-flex">
                          <li className="quickview__social--list">
                            <a className="quickview__social--icon" target="_blank" href="https://www.facebook.com/">
                              <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                <path data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor" />
                              </svg>
                              <span className="visually-hidden">Facebook</span>
                            </a>
                          </li>
                          <li className="quickview__social--list">
                            <a className="quickview__social--icon" target="_blank" href="https://twitter.com/">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                <path data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor" />
                              </svg>
                              <span className="visually-hidden">Twitter</span>
                            </a>
                          </li>
                          <li className="quickview__social--list">
                            <a className="quickview__social--icon" target="_blank" href="https://www.skype.com/">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16.482" height="16.481" viewBox="0 0 16.482 16.481">
                                <path data-name="Path 284" d="M879,926.615a4.479,4.479,0,0,1,.622-2.317,4.666,4.666,0,0,1,1.676-1.677,4.482,4.482,0,0,1,2.317-.622,4.577,4.577,0,0,1,2.43.678,7.58,7.58,0,0,1,5.048.961,7.561,7.561,0,0,1,3.786,6.593,8,8,0,0,1-.094,1.206,4.676,4.676,0,0,1,.7,2.411,4.53,4.53,0,0,1-.622,2.326,4.62,4.62,0,0,1-1.686,1.686,4.626,4.626,0,0,1-4.756-.075,7.7,7.7,0,0,1-1.187.094,7.623,7.623,0,0,1-7.647-7.647,7.46,7.46,0,0,1,.094-1.187A4.424,4.424,0,0,1,879,926.615Zm4.107,1.714a2.473,2.473,0,0,0,.282,1.234,2.41,2.41,0,0,0,.782.829,5.091,5.091,0,0,0,1.215.565,15.981,15.981,0,0,0,1.582.424q.678.151.979.235a3.091,3.091,0,0,1,.593.235,1.388,1.388,0,0,1,.452.348.738.738,0,0,1,.16.481.91.91,0,0,1-.48.753,2.254,2.254,0,0,1-1.271.321,2.105,2.105,0,0,1-1.253-.292,2.262,2.262,0,0,1-.65-.838,2.42,2.42,0,0,0-.414-.546.853.853,0,0,0-.584-.17.893.893,0,0,0-.669.283.919.919,0,0,0-.273.659,1.654,1.654,0,0,0,.217.782,2.456,2.456,0,0,0,.678.763,3.64,3.64,0,0,0,1.158.574,5.931,5.931,0,0,0,1.639.235,5.767,5.767,0,0,0,2.072-.339,2.982,2.982,0,0,0,1.356-.961,2.306,2.306,0,0,0,.471-1.431,2.161,2.161,0,0,0-.443-1.375,3.009,3.009,0,0,0-1.2-.894,10.118,10.118,0,0,0-1.865-.575,11.2,11.2,0,0,1-1.309-.311,2.011,2.011,0,0,1-.8-.452.992.992,0,0,1-.3-.744,1.143,1.143,0,0,1,.565-.97,2.59,2.59,0,0,1,1.488-.386,2.538,2.538,0,0,1,1.074.188,1.634,1.634,0,0,1,.622.49,3.477,3.477,0,0,1,.414.753,1.568,1.568,0,0,0,.4.594.866.866,0,0,0,.574.2,1,1,0,0,0,.706-.254.828.828,0,0,0,.273-.631,2.234,2.234,0,0,0-.443-1.253,3.321,3.321,0,0,0-1.158-1.046,5.375,5.375,0,0,0-2.524-.527,5.764,5.764,0,0,0-2.213.386,3.161,3.161,0,0,0-1.422,1.083A2.738,2.738,0,0,0,883.106,928.329Z" transform="translate(-878.999 -922)" fill="currentColor" />
                              </svg>
                              <span className="visually-hidden">Skype</span>
                            </a>
                          </li>
                          <li className="quickview__social--list">
                            <a className="quickview__social--icon" target="_blank" href="https://www.youtube.com/">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                <path data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor" />
                              </svg>
                              <span className="visually-hidden">Youtube</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="guarantee__safe--checkout">
                        <h5 className="guarantee__safe--checkout__title">Guaranteed Safe Checkout</h5>
                        <img className="guarantee__safe--checkout__img" src="assets/img/other/safe-checkout.webp" alt="Payment Image" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Start product details tab section */}
            <div className="product__details--tab__section sidebar__tab--section border-radius-10">
              <ul className="product__tab--one product__details--tab d-flex mb-30">
                <li className="product__details--tab__list active" data-toggle="tab" data-target="#description">Description</li>
                <li className="product__details--tab__list" data-toggle="tab" data-target="#reviews">Product Reviews</li>
                <li className="product__details--tab__list" data-toggle="tab" data-target="#information">Additional Info</li>
              </ul>
              <div className="product__details--tab__inner border-radius-10">
                <div className="tab_content">
                  <div id="description" className="tab_pane active show">
                    <div className="product__tab--content">
                      <div className="product__tab--content__step mb-30">
                        <h2 className="product__tab--content__title h4 mb-10">Nam provident sequi</h2>
                        <p className="product__tab--content__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam provident sequi, nemo sapiente culpa nostrum rem eum perferendis quibusdam, magnam a vitae corporis! Magnam enim modi, illo harum suscipit tempore aut dolore doloribus deserunt voluptatum illum, est porro? Ducimus dolore accusamus impedit ipsum maiores, ea iusto temporibus numquam eaque mollitia fugiat laborum dolor tempora eligendi voluptatem quis necessitatibus nam ab?</p>
                      </div>
                      <div className="product__tab--content__step style2 product__sidebar--style2 d-flex align-items-center mb-30">
                        <div className="product__tab--content__banner sidebar__style">
                          <img className="product__tab--content__banner--img display-block" src="assets/img/other/drone-image2.webp" alt="banner-img" />
                        </div>
                        <div className="product__tab--content__right sidebar__style">
                          <p className="product__tab--content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi tempora quibusdam libero possimus magni impedit a, facere recusandae eos ut at quod sed praesentium!</p>
                          <div className="image__with--text__percent product__tab--percent__style">
                            <ul>
                              <li className="image__with--text__percent--list mb-20">
                                <span className="image__with--text__percent--top d-flex justify-content-between align-content-center">
                                  <span className="image__with--text__percent--content">Integrative control</span>
                                  <span className="image__with--text__percent--content">58%</span>
                                </span>
                              </li>
                              <li className="image__with--text__percent--list two mb-20">
                                <span className="image__with--text__percent--top d-flex justify-content-between align-content-center">
                                  <span className="image__with--text__percent--content">Design Device</span>
                                  <span className="image__with--text__percent--content">77%</span>
                                </span>
                              </li>
                              <li className="image__with--text__percent--list three mb-20">
                                <span className="image__with--text__percent--top d-flex justify-content-between align-content-center">
                                  <span className="image__with--text__percent--content">Service Control</span>
                                  <span className="image__with--text__percent--content">58%</span>
                                </span>
                              </li>
                              <li className="image__with--text__percent--list four">
                                <span className="image__with--text__percent--top d-flex justify-content-between align-content-center">
                                  <span className="image__with--text__percent--content">Metar Surusn</span>
                                  <span className="image__with--text__percent--content">69%</span>
                                </span>
                              </li>
                            </ul>
                          </div>  
                        </div>
                      </div>
                      <div className="product__tab--content__step">
                        <p className="product__tab--content__desc">Polor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
                          lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. 
                          Nulla facilisi. Nulla libero. Vivamus pharetra posuere.</p>
                      </div>
                    </div> 
                  </div>
                  <div id="reviews" className="tab_pane">
                    <div className="product__reviews">
                      <div className="product__reviews--header">
                        <h2 className="product__reviews--header__title h3 mb-20">Customer Reviews</h2>
                        <div className="reviews__ratting d-flex align-items-center">
                          <ul className="d-flex">
                            <li className="reviews__ratting--list">
                              <span className="reviews__ratting--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="reviews__ratting--list">
                              <span className="reviews__ratting--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="reviews__ratting--list">
                              <span className="reviews__ratting--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="reviews__ratting--list">
                              <span className="reviews__ratting--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                </svg>
                              </span>
                            </li>
                            <li className="reviews__ratting--list">
                              <span className="reviews__ratting--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                  <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2" />
                                </svg> 
                              </span>
                            </li>
                          </ul>
                          <span className="reviews__summary--caption">Based on 2 reviews</span>
                        </div>
                        <a className="actions__newreviews--btn primary__btn" href="#writereview">Write A Review</a>
                      </div>
                      <div className="reviews__comment--area">
                        <div className="reviews__comment--list d-flex">
                          <div className="reviews__comment--thumb">
                            <img src="assets/img/other/comment-thumb1.webp" alt="comment-thumb" />
                          </div>
                          <div className="reviews__comment--content">
                            <div className="reviews__comment--top d-flex justify-content-between">
                              <div className="reviews__comment--top__left">
                                <h3 className="reviews__comment--content__title h4">Jakes on</h3>
                                <ul className="reviews__ratting d-flex">
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2" />
                                      </svg> 
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <span className="reviews__comment--content__date">February 13, 2022</span>
                            </div>
                            <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                          </div>
                        </div>
                        <div className="reviews__comment--list margin__left d-flex">
                          <div className="reviews__comment--thumb">
                            <img src="assets/img/other/comment-thumb2.webp" alt="comment-thumb" />
                          </div>
                          <div className="reviews__comment--content">
                            <div className="reviews__comment--top d-flex justify-content-between">
                              <div className="reviews__comment--top__left">
                                <h3 className="reviews__comment--content__title h4">Laura John</h3>
                                <ul className="reviews__ratting d-flex">
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2" />
                                      </svg> 
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <span className="reviews__comment--content__date">February 13, 2022</span>
                            </div>
                            <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                          </div>
                        </div>
                        <div className="reviews__comment--list d-flex">
                          <div className="reviews__comment--thumb">
                            <img src="assets/img/other/comment-thumb3.webp" alt="comment-thumb" />
                          </div>
                          <div className="reviews__comment--content">
                            <div className="reviews__comment--top d-flex justify-content-between">
                              <div className="reviews__comment--top__left">
                                <h3 className="reviews__comment--content__title h4">Richard Smith</h3>
                                <ul className="reviews__ratting d-flex">
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                      </svg>
                                    </span>
                                  </li>
                                  <li className="reviews__ratting--list">
                                    <span className="reviews__ratting--icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                        <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2" />
                                      </svg> 
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <span className="reviews__comment--content__date">February 13, 2022</span>
                            </div>
                            <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                          </div>
                        </div>
                      </div>
                      <div id="writereview" className="reviews__comment--reply__area">
                        <form action="#">
                          <h3 className="reviews__comment--reply__title mb-15">Add a review </h3>
                          <div className="reviews__ratting d-flex align-items-center mb-20">
                            <ul className="d-flex">
                              <li className="reviews__ratting--list">
                                <span className="reviews__ratting--icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                  </svg>
                                </span>
                              </li>
                              <li className="reviews__ratting--list">
                                <span className="reviews__ratting--icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                  </svg>
                                </span>
                              </li>
                              <li className="reviews__ratting--list">
                                <span className="reviews__ratting--icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                  </svg>
                                </span>
                              </li>
                              <li className="reviews__ratting--list">
                                <span className="reviews__ratting--icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                  </svg>
                                </span>
                              </li>
                              <li className="reviews__ratting--list">
                                <span className="reviews__ratting--icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14.105" height="12.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="#c7c5c2" />
                                  </svg> 
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-10">
                              <textarea className="reviews__comment--reply__textarea" placeholder="Your Comments...." defaultValue={""} />
                            </div> 
                            <div className="col-lg-6 col-md-6 mb-15">
                              <label>
                                <input className="reviews__comment--reply__input" placeholder="Your Name...." type="text" />
                              </label>
                            </div>  
                            <div className="col-lg-6 col-md-6 mb-15">
                              <label>
                                <input className="reviews__comment--reply__input" placeholder="Your Email...." type="email" />
                              </label>
                            </div>  
                          </div>
                          <button className="primary__btn text-white" data-hover="Submit" type="submit">SUBMIT</button>
                        </form>   
                      </div> 
                    </div>    
                  </div>
                  <div id="information" className="tab_pane">
                    <div className="product__tab--conten">
                      <div className="product__tab--content__step mb-30">
                        <h2 className="product__tab--content__title h4 mb-10">Nam provident sequi</h2>
                        <p className="product__tab--content__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam provident sequi, nemo sapiente culpa nostrum rem eum perferendis quibusdam, magnam a vitae corporis! Magnam enim modi, illo harum suscipit tempore aut dolore doloribus deserunt voluptatum illum, est porro? Ducimus dolore accusamus impedit ipsum maiores, ea iusto temporibus numquam eaque mollitia fugiat laborum dolor tempora eligendi voluptatem quis necessitatibus nam ab?</p>
                      </div>
                    </div> 
                  </div>
                  <div id="custom" className="tab_pane">
                    <div className="product__tab--content">
                      <div className="product__tab--content__step mb-30">
                        <h2 className="product__tab--content__title h4 mb-10">Nam provident sequi</h2>
                        <p className="product__tab--content__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam provident sequi, nemo sapiente culpa nostrum rem eum perferendis quibusdam, magnam a vitae corporis! Magnam enim modi, illo harum suscipit tempore aut dolore doloribus deserunt voluptatum illum, est porro? Ducimus dolore accusamus impedit ipsum maiores, ea iusto temporibus numquam eaque mollitia fugiat laborum dolor tempora eligendi voluptatem quis necessitatibus nam ab?</p>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            {/* End product details tab section */}
            {/* Start product section */}
            <div className="product__section  section--padding pb-0">
              <div className="section__heading text-center mb-50">
                <h2 className="section__heading--maintitle text__secondary mb-10">You may also like</h2>
                <p className="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos 
                  flusterd impressive man farcrud opened.</p>
              </div>
              <div className="product__inner">
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                  <div className="col custom-col-2 mb-30">
                    <article className="product__card">
                      <div className="product__card--thumbnail">
                        <a className="product__card--thumbnail__link display-block" href="product-details.html">
                          <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product1.webp" alt="product-img" />
                          <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product2.webp" alt="product-img" />
                        </a>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Wishlist" href="wishlist.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="22.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span> 
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Quick View" data-open="modal1" href="javascript:void(0)">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                              <span className="visually-hidden">Quick View</span>  
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Compare" href="compare.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="19.51" height="18.443" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                              </svg>
                              <span className="visually-hidden">Compare</span>    
                            </a>
                          </li>
                        </ul>
                        <div className="product__badge">
                          <span className="product__badge--items sale">SALE</span>
                        </div>
                      </div>
                      <div className="product__card--content text-center">
                        <span className="product__card--meta__tag">Watch,Woman</span>
                        <h3 className="product__card--title"><a href="product-details.html">Advanced To Watch </a></h3>
                        <div className="product__card--price">
                          <span className="current__price">$245</span>
                          <span className="price__divided" />
                          <span className="old__price"> $356</span>
                        </div>
                        <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                      </div>
                    </article>
                  </div>
                  <div className="col custom-col-2 mb-30">
                    <article className="product__card">
                      <div className="product__card--thumbnail product__swiper--column1 swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a className="product__card--thumbnail__link display-block" href="product-details.html">
                              <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product3.webp" alt="product-img" />
                              <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product4.webp" alt="product-img" />
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a className="product__card--thumbnail__link display-block" href="product-details.html">
                              <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product5.webp" alt="product-img" />
                              <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product6.webp" alt="product-img" />
                            </a>
                            <div className="product__badge">
                              <span className="product__badge--items sale">SALE</span>
                            </div>
                          </div>
                        </div>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Wishlist" href="wishlist.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="22.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span> 
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Quick View" data-open="modal1" href="javascript:void(0)">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                              <span className="visually-hidden">Quick View</span>  
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Compare" href="compare.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="19.51" height="18.443" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                              </svg>
                              <span className="visually-hidden">Compare</span>    
                            </a>
                          </li>
                        </ul>
                        <div className="swiper__nav--btn swiper-button-next" />
                        <div className="swiper__nav--btn swiper-button-prev" />
                      </div>
                      <div className="product__card--content text-center">
                        <span className="product__card--meta__tag">Watch,Woman</span>
                        <h3 className="product__card--title"><a href="product-details.html">Advanced Analytic </a></h3>
                        <div className="product__card--price">
                          <span className="current__price">$245</span>
                          <span className="price__divided" />
                          <span className="old__price"> $356</span>
                        </div>
                        <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                      </div>
                    </article>
                  </div>
                  <div className="col custom-col-2 mb-30">
                    <article className="product__card">
                      <div className="product__card--thumbnail">
                        <a className="product__card--thumbnail__link display-block" href="product-details.html">
                          <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product5.webp" alt="product-img" />
                          <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product6.webp" alt="product-img" />
                        </a>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Wishlist" href="wishlist.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="22.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span> 
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Quick View" data-open="modal1" href="javascript:void(0)">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                              <span className="visually-hidden">Quick View</span>  
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Compare" href="compare.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="19.51" height="18.443" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                              </svg>
                              <span className="visually-hidden">Compare</span>    
                            </a>
                          </li>
                        </ul>
                        <div className="product__badge">
                          <span className="product__badge--items sale">SALE</span>
                        </div>
                      </div>
                      <div className="product__card--content text-center">
                        <span className="product__card--meta__tag">Watch,Woman</span>
                        <h3 className="product__card--title"><a href="product-details.html">Dolor sit consectetur. </a></h3>
                        <div className="product__card--price">
                          <span className="current__price">$245</span>
                          <span className="price__divided" />
                          <span className="old__price"> $356</span>
                        </div>
                        <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                      </div>
                    </article>
                  </div>
                  <div className="col custom-col-2 mb-30 d-none d-sm-block">
                    <article className="product__card">
                      <div className="product__card--thumbnail product__swiper--column1 swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a className="product__card--thumbnail__link display-block" href="product-details.html">
                              <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product2.webp" alt="product-img" />
                              <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product1.webp" alt="product-img" />
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a className="product__card--thumbnail__link display-block" href="product-details.html">
                              <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product4.webp" alt="product-img" />
                              <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product3.webp" alt="product-img" />
                            </a>
                            <div className="product__badge">
                              <span className="product__badge--items sale">SALE</span>
                            </div>
                          </div>
                        </div>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Wishlist" href="wishlist.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="22.443" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                              <span className="visually-hidden">Wishlist</span> 
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Quick View" data-open="modal1" href="javascript:void(0)">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.51" height="22.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                              <span className="visually-hidden">Quick View</span>  
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a className="product__card--action__btn" title="Compare" href="compare.html">
                              <svg className="product__card--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="19.51" height="18.443" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                              </svg>
                              <span className="visually-hidden">Compare</span>    
                            </a>
                          </li>
                        </ul>
                        <div className="swiper__nav--btn swiper-button-next" />
                        <div className="swiper__nav--btn swiper-button-prev" />
                      </div>
                      <div className="product__card--content text-center">
                        <span className="product__card--meta__tag">Watch,Woman</span>
                        <h3 className="product__card--title"><a href="product-details.html">Lorem ipsum dolor sit.</a></h3>
                        <div className="product__card--price">
                          <span className="current__price">$278</span>
                          <span className="price__divided" />
                          <span className="old__price"> $376</span>
                        </div>
                        <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            {/* End product section */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End product details section */}
</main>
?<ShopFooter/>
   </>
  )
}

export default ProductLeftSidebar
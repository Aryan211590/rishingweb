import React from 'react'

const ShopHeader = () => {
  return (
    <>
      <div className="offcanvas__filter--sidebar widget__area">
  <button type="button" className="offcanvas__filter--close" data-offcanvas>
    <svg className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg> <span className="offcanvas__filter--close__text">Close</span>
  </button>
  <div className="offcanvas__filter--sidebar__inner">
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
            <label className="price__filter--label" htmlFor="Filter-Price-GTE2">From</label>
            <div className="price__filter--input border-radius-5 d-flex align-items-center">
              <span className="price__filter--currency">$</span>
              <input className="price__filter--input__field border-0" id="Filter-Price-GTE2" name="filter.v.price.gte" type="number" placeholder={0} min={0} max={250.00} />
            </div>
          </div>
          <div className="price__divider">
            <span>-</span>
          </div>
          <div className="price__filter--group">
            <label className="price__filter--label" htmlFor="Filter-Price-LTE2">To</label>
            <div className="price__filter--input border-radius-5 d-flex align-items-center">
              <span className="price__filter--currency">$</span>
              <input className="price__filter--input__field border-0" id="Filter-Price-LTE2" name="filter.v.price.lte" type="number" min={0} placeholder={250.00} max={250.00} /> 
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
          <label className="widget__form--check__label" htmlFor="check5">Denim shirt</label>
          <input className="widget__form--check__input" id="check5" type="checkbox" />
          <span className="widget__form--checkmark" />
        </li>
        <li className="widget__form--check__list">
          <label className="widget__form--check__label" htmlFor="check6">Need Winter</label>
          <input className="widget__form--check__input" id="check6" type="checkbox" />
          <span className="widget__form--checkmark" />
        </li>
        <li className="widget__form--check__list">
          <label className="widget__form--check__label" htmlFor="check7">Fashion Trends</label>
          <input className="widget__form--check__input" id="check7" type="checkbox" />
          <span className="widget__form--checkmark" />
        </li>
        <li className="widget__form--check__list">
          <label className="widget__form--check__label" htmlFor="check8">Oversize Cotton</label>
          <input className="widget__form--check__input" id="check8" type="checkbox" />
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
    </>
  )
}

export default ShopHeader
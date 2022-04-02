import React from "react";

const Cart = () => {
  return (
    <>
      <div>
        {/* Mirrored from risingtheme.com/html/rokon-demo/rokon/cart.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 01 Apr 2022 06:13:41 GMT */}
        {/* End preloader */}
        {/* Start header area */}

        {/* End header area */}
        <main className="main__content_wrapper">
          {/* Start breadcrumb section */}
          <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
              <div className="row row-cols-1">
                <div className="col">
                  <div className="breadcrumb__content">
                    <h1 className="breadcrumb__content--title mb-10">
                      Shopping Cart
                    </h1>
                    <ul className="breadcrumb__content--menu d-flex">
                      <li className="breadcrumb__content--menu__items">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb__content--menu__items">
                        <span className="text__secondary">Shopping Cart</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End breadcrumb section */}
          {/* cart section start */}
          <section className="cart__section section--padding">
            <div className="container-fluid">
              <div className="cart__section--inner">
                <form action="#">
                  <h2 className="cart__title mb-40">Shopping Cart</h2>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="cart__table">
                        <table className="cart__table--inner">
                          <thead className="cart__table--header">
                            <tr className="cart__table--header__items">
                              <th className="cart__table--header__list">
                                Product
                              </th>
                              <th className="cart__table--header__list">
                                Price
                              </th>
                              <th className="cart__table--header__list">
                                Quantity
                              </th>
                              <th className="cart__table--header__list">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="cart__table--body">
                            <tr className="cart__table--body__items">
                              <td className="cart__table--body__list">
                                <div className="cart__product d-flex align-items-center">
                                  <button
                                    className="cart__remove--btn"
                                    aria-label="search button"
                                    type="button"
                                  >
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="16px"
                                      height="16px"
                                    >
                                      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                    </svg>
                                  </button>
                                  <div className="cart__thumbnail">
                                    <a href="product-details.html">
                                      <img
                                        className="border-radius-5"
                                        src="assets/img/product/product1.webp"
                                        alt="cart-product"
                                      />
                                    </a>
                                  </div>
                                  <div className="cart__content">
                                    <h3 className="cart__content--title h4">
                                      <a href="product-details.html">
                                        Fresh-whole-fish
                                      </a>
                                    </h3>
                                    <span className="cart__content--variant">
                                      COLOR: Blue
                                    </span>
                                    <span className="cart__content--variant">
                                      WEIGHT: 2 Kg
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price">£65.00</span>
                              </td>
                              <td className="cart__table--body__list">
                                <div className="quantity__box">
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity decrease"
                                    aria-label="quantity value"
                                    value="Decrease Value"
                                  >
                                    -
                                  </button>
                                  <label>
                                    <input
                                      type="number"
                                      className="quantity__number quickview__value--number"
                                      defaultValue={1}
                                      data-counter
                                    />
                                  </label>
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity increase"
                                    aria-label="quantity value"
                                    value="Increase Value"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price end">£130.00</span>
                              </td>
                            </tr>
                            <tr className="cart__table--body__items">
                              <td className="cart__table--body__list">
                                <div className="cart__product d-flex align-items-center">
                                  <button
                                    className="cart__remove--btn"
                                    aria-label="search button"
                                    type="button"
                                  >
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="16px"
                                      height="16px"
                                    >
                                      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                    </svg>
                                  </button>
                                  <div className="cart__thumbnail">
                                    <a href="product-details.html">
                                      <img
                                        className="border-radius-5"
                                        src="assets/img/product/product2.webp"
                                        alt="cart-product"
                                      />
                                    </a>
                                  </div>
                                  <div className="cart__content">
                                    <h3 className="cart__content--title h4">
                                      <a href="product-details.html">
                                        Vegetable-healthy
                                      </a>
                                    </h3>
                                    <span className="cart__content--variant">
                                      COLOR: Blue
                                    </span>
                                    <span className="cart__content--variant">
                                      WEIGHT: 2 Kg
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price">£65.00</span>
                              </td>
                              <td className="cart__table--body__list">
                                <div className="quantity__box">
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity decrease"
                                    aria-label="quantity value"
                                    value="Decrease Value"
                                  >
                                    -
                                  </button>
                                  <label>
                                    <input
                                      type="number"
                                      className="quantity__number quickview__value--number"
                                      defaultValue={1}
                                      data-counter
                                    />
                                  </label>
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity increase"
                                    aria-label="quantity value"
                                    value="Increase Value"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price end">£130.00</span>
                              </td>
                            </tr>
                            <tr className="cart__table--body__items">
                              <td className="cart__table--body__list">
                                <div className="cart__product d-flex align-items-center">
                                  <button
                                    className="cart__remove--btn"
                                    aria-label="search button"
                                    type="button"
                                  >
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="16px"
                                      height="16px"
                                    >
                                      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                    </svg>
                                  </button>
                                  <div className="cart__thumbnail">
                                    <a href="product-details.html">
                                      <img
                                        className="border-radius-5"
                                        src="assets/img/product/product3.webp"
                                        alt="cart-product"
                                      />
                                    </a>
                                  </div>
                                  <div className="cart__content">
                                    <h3 className="cart__content--title h4">
                                      <a href="product-details.html">
                                        Raw-onions-surface
                                      </a>
                                    </h3>
                                    <span className="cart__content--variant">
                                      COLOR: Blue
                                    </span>
                                    <span className="cart__content--variant">
                                      WEIGHT: 2 Kg
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price">£65.00</span>
                              </td>
                              <td className="cart__table--body__list">
                                <div className="quantity__box">
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity decrease"
                                    aria-label="quantity value"
                                    value="Decrease Value"
                                  >
                                    -
                                  </button>
                                  <label>
                                    <input
                                      type="number"
                                      className="quantity__number quickview__value--number"
                                      defaultValue={1}
                                      data-counter
                                    />
                                  </label>
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity increase"
                                    aria-label="quantity value"
                                    value="Increase Value"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price end">£130.00</span>
                              </td>
                            </tr>
                            <tr className="cart__table--body__items">
                              <td className="cart__table--body__list">
                                <div className="cart__product d-flex align-items-center">
                                  <button
                                    className="cart__remove--btn"
                                    aria-label="search button"
                                    type="button"
                                  >
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="16px"
                                      height="16px"
                                    >
                                      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                    </svg>
                                  </button>
                                  <div className="cart__thumbnail">
                                    <a href="product-details.html">
                                      <img
                                        className="border-radius-5"
                                        src="assets/img/product/product4.webp"
                                        alt="cart-product"
                                      />
                                    </a>
                                  </div>
                                  <div className="cart__content">
                                    <h3 className="cart__content--title h4">
                                      <a href="product-details.html">
                                        Oversize Cotton Dress
                                      </a>
                                    </h3>
                                    <span className="cart__content--variant">
                                      COLOR: Blue
                                    </span>
                                    <span className="cart__content--variant">
                                      WEIGHT: 2 Kg
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price">£65.00</span>
                              </td>
                              <td className="cart__table--body__list">
                                <div className="quantity__box">
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity decrease"
                                    aria-label="quantity value"
                                    value="Decrease Value"
                                  >
                                    -
                                  </button>
                                  <label>
                                    <input
                                      type="number"
                                      className="quantity__number quickview__value--number"
                                      defaultValue={1}
                                      data-counter
                                    />
                                  </label>
                                  <button
                                    type="button"
                                    className="quantity__value quickview__value--quantity increase"
                                    aria-label="quantity value"
                                    value="Increase Value"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="cart__table--body__list">
                                <span className="cart__price end">£130.00</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="continue__shopping d-flex justify-content-between">
                          <a
                            className="continue__shopping--link"
                            href="shop.html"
                          >
                            Continue shopping
                          </a>
                          <button
                            className="continue__shopping--clear"
                            type="submit"
                          >
                            Clear Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="cart__summary border-radius-10">
                        <div className="coupon__code mb-30">
                          <h3 className="coupon__code--title">Coupon</h3>
                          <p className="coupon__code--desc">
                            Enter your coupon code if you have one.
                          </p>
                          <div className="coupon__code--field d-flex">
                            <label>
                              <input
                                className="coupon__code--field__input border-radius-5"
                                placeholder="Coupon code"
                                type="text"
                              />
                            </label>
                            <button
                              className="coupon__code--field__btn primary__btn"
                              type="submit"
                            >
                              Apply Coupon
                            </button>
                          </div>
                        </div>
                        <div className="cart__note mb-20">
                          <h3 className="cart__note--title">Note</h3>
                          <p className="cart__note--desc">
                            Add special instructions for your seller...
                          </p>
                          <textarea
                            className="cart__note--textarea border-radius-5"
                            defaultValue={""}
                          />
                        </div>
                        <div className="cart__summary--total mb-20">
                          <table className="cart__summary--total__table">
                            <tbody>
                              <tr className="cart__summary--total__list">
                                <td className="cart__summary--total__title text-left">
                                  SUBTOTAL
                                </td>
                                <td className="cart__summary--amount text-right">
                                  $860.00
                                </td>
                              </tr>
                              <tr className="cart__summary--total__list">
                                <td className="cart__summary--total__title text-left">
                                  GRAND TOTAL
                                </td>
                                <td className="cart__summary--amount text-right">
                                  $860.00
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="cart__summary--footer">
                          <p className="cart__summary--footer__desc">
                            Shipping &amp; taxes calculated at checkout
                          </p>
                          <ul className="d-flex justify-content-between">
                            <li>
                              <button
                                className="cart__summary--footer__btn primary__btn cart"
                                type="submit"
                              >
                                Update Cart
                              </button>
                            </li>
                            <li>
                              <a
                                className="cart__summary--footer__btn primary__btn checkout"
                                href="checkout.html"
                              >
                                Check Out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* cart section end */}
          {/* Start product section */}
          <section className="product__section section--padding pt-0">
            <div className="container-fluid">
              <div className="section__heading text-center mb-50">
                <h2 className="section__heading--maintitle text__secondary mb-10">
                  New Products
                </h2>
                <p className="section__heading--desc">
                  Beyond more stoic this along goodness this sed wow manatee
                  mongos flusterd impressive man farcrud opened.
                </p>
              </div>
              <div className="product__inner">
                <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                  <div className="col custom-col-2 mb-30">
                    <article className="product__card">
                      <div className="product__card--thumbnail">
                        <a
                          className="product__card--thumbnail__link display-block"
                          href="product-details.html"
                        >
                          <img
                            className="product__card--thumbnail__img product__primary--img display-block"
                            src="assets/img/product/product1.webp"
                            alt="product-img"
                          />
                          <img
                            className="product__card--thumbnail__img product__secondary--img display-block"
                            src="assets/img/product/product2.webp"
                            alt="product-img"
                          />
                        </a>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Wishlist"
                              href="wishlist.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={32}
                                />
                              </svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Quick View"
                              data-open="modal1"
                              href="javascript:void(0)"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.51"
                                height="22.443"
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
                              <span className="visually-hidden">
                                Quick View
                              </span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Compare"
                              href="compare.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="21.51"
                                height="21.443"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                              </svg>
                              <span className="visually-hidden">Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="product__badge">
                          <span className="product__badge--items sale">
                            SALE
                          </span>
                        </div>
                      </div>
                      <div className="product__card--content text-center">
                        <span className="product__card--meta__tag">
                          Watch,Woman
                        </span>
                        <h3 className="product__card--title">
                          <a href="product-details.html">Advanced To Watch </a>
                        </h3>
                        <div className="product__card--price">
                          <span className="current__price">$245</span>
                          <span className="price__divided" />
                          <span className="old__price"> $356</span>
                        </div>
                        <a
                          className="product__card--btn primary__btn"
                          href="cart.html"
                        >
                          Add To Card
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col custom-col-2 mb-30">
                    <article className="product__card">
                      <div className="product__card--thumbnail product__swiper--column1 swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a
                              className="product__card--thumbnail__link display-block"
                              href="product-details.html"
                            >
                              <img
                                className="product__card--thumbnail__img product__primary--img display-block"
                                src="assets/img/product/product3.webp"
                                alt="product-img"
                              />
                              <img
                                className="product__card--thumbnail__img product__secondary--img display-block"
                                src="assets/img/product/product4.webp"
                                alt="product-img"
                              />
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a
                              className="product__card--thumbnail__link display-block"
                              href="product-details.html"
                            >
                              <img
                                className="product__card--thumbnail__img product__primary--img display-block"
                                src="assets/img/product/product5.webp"
                                alt="product-img"
                              />
                              <img
                                className="product__card--thumbnail__img product__secondary--img display-block"
                                src="assets/img/product/product6.webp"
                                alt="product-img"
                              />
                            </a>
                            <div className="product__badge">
                              <span className="product__badge--items sale">
                                SALE
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Wishlist"
                              href="wishlist.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={32}
                                />
                              </svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Quick View"
                              data-open="modal1"
                              href="javascript:void(0)"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.51"
                                height="22.443"
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
                              <span className="visually-hidden">
                                Quick View
                              </span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Compare"
                              href="compare.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="21.51"
                                height="21.443"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
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
                        <span className="product__card--meta__tag">
                          Watch,Woman
                        </span>
                        <h3 className="product__card--title">
                          <a href="product-details.html">Advanced Analytic </a>
                        </h3>
                        <div className="product__card--price">
                          <span className="current__price">$245</span>
                          <span className="price__divided" />
                          <span className="old__price"> $356</span>
                        </div>
                        <a
                          className="product__card--btn primary__btn"
                          href="cart.html"
                        >
                          Add To Card
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col custom-col-2 mb-30">
                    <article className="product__card">
                      <div className="product__card--thumbnail">
                        <a
                          className="product__card--thumbnail__link display-block"
                          href="product-details.html"
                        >
                          <img
                            className="product__card--thumbnail__img product__primary--img display-block"
                            src="assets/img/product/product5.webp"
                            alt="product-img"
                          />
                          <img
                            className="product__card--thumbnail__img product__secondary--img display-block"
                            src="assets/img/product/product6.webp"
                            alt="product-img"
                          />
                        </a>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Wishlist"
                              href="wishlist.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={32}
                                />
                              </svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Quick View"
                              data-open="modal1"
                              href="javascript:void(0)"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.51"
                                height="22.443"
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
                              <span className="visually-hidden">
                                Quick View
                              </span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Compare"
                              href="compare.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="21.51"
                                height="21.443"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                              </svg>
                              <span className="visually-hidden">Compare</span>
                            </a>
                          </li>
                        </ul>
                        <div className="product__badge">
                          <span className="product__badge--items sale">
                            SALE
                          </span>
                        </div>
                      </div>
                      <div className="product__card--content text-center">
                        <span className="product__card--meta__tag">
                          Watch,Woman
                        </span>
                        <h3 className="product__card--title">
                          <a href="product-details.html">
                            Dolor sit consectetur.{" "}
                          </a>
                        </h3>
                        <div className="product__card--price">
                          <span className="current__price">$245</span>
                          <span className="price__divided" />
                          <span className="old__price"> $356</span>
                        </div>
                        <a
                          className="product__card--btn primary__btn"
                          href="cart.html"
                        >
                          Add To Card
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col custom-col-2 mb-30 d-sm-block d-lg-none d-xl-block">
                    <article className="product__card">
                      <div className="product__card--thumbnail product__swiper--column1 swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a
                              className="product__card--thumbnail__link display-block"
                              href="product-details.html"
                            >
                              <img
                                className="product__card--thumbnail__img product__primary--img display-block"
                                src="assets/img/product/product2.webp"
                                alt="product-img"
                              />
                              <img
                                className="product__card--thumbnail__img product__secondary--img display-block"
                                src="assets/img/product/product1.webp"
                                alt="product-img"
                              />
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a
                              className="product__card--thumbnail__link display-block"
                              href="product-details.html"
                            >
                              <img
                                className="product__card--thumbnail__img product__primary--img display-block"
                                src="assets/img/product/product4.webp"
                                alt="product-img"
                              />
                              <img
                                className="product__card--thumbnail__img product__secondary--img display-block"
                                src="assets/img/product/product3.webp"
                                alt="product-img"
                              />
                            </a>
                            <div className="product__badge">
                              <span className="product__badge--items sale">
                                SALE
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul className="product__card--action d-flex align-items-center justify-content-center">
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Wishlist"
                              href="wishlist.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={32}
                                />
                              </svg>
                              <span className="visually-hidden">Wishlist</span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Quick View"
                              data-open="modal1"
                              href="javascript:void(0)"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.51"
                                height="22.443"
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
                              <span className="visually-hidden">
                                Quick View
                              </span>
                            </a>
                          </li>
                          <li className="product__card--action__list">
                            <a
                              className="product__card--action__btn"
                              title="Compare"
                              href="compare.html"
                            >
                              <svg
                                className="product__card--action__btn--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="21.51"
                                height="21.443"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
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
                        <span className="product__card--meta__tag">
                          Watch,Woman
                        </span>
                        <h3 className="product__card--title">
                          <a href="product-details.html">
                            Lorem ipsum dolor sit.
                          </a>
                        </h3>
                        <div className="product__card--price">
                          <span className="current__price">$278</span>
                          <span className="price__divided" />
                          <span className="old__price"> $376</span>
                        </div>
                        <a
                          className="product__card--btn primary__btn"
                          href="cart.html"
                        >
                          Add To Card
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End product section */}
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
                    <form
                      className="newsletter__subscribe position__relative"
                      action="#"
                    >
                      <label>
                        <input
                          className="newsletter__subscribe--input style2"
                          placeholder="Enter Your Email"
                          type="email"
                        />
                      </label>
                      <button
                        className="newsletter__subscribe--button style2 primary__btn"
                        type="submit"
                      >
                        Subscribe
                        <svg
                          className="newsletter__subscribe--button__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.159"
                          height="7.85"
                          viewBox="0 0 9.159 7.85"
                        >
                          <path
                            data-name="Icon material-send"
                            d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z"
                            transform="translate(-3 -4.5)"
                            fill="currentColor"
                          />
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
        {/* Start footer section */}
        {/* End footer section */}
        {/* Quickview Wrapper */}
        <div className="modal" id="modal1" data-animation="slideInUp">
          <div className="modal-dialog quickview__main--wrapper">
            <header className="modal-header quickview__header">
              <button
                className="close-modal quickview__close--btn"
                aria-label="close modal"
                data-close
              >
                ✕{" "}
              </button>
            </header>
            <div className="quickview__inner">
              <div className="row row-cols-lg-2 row-cols-md-2">
                <div className="col">
                  <div className="quickview__gallery">
                    <div className="product__media--right__horizontal ">
                      <div className="product__media--preview__horizontal  swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a
                                className="product__media--preview__items--link glightbox"
                                data-gallery="product-media-preview"
                                href="assets/img/product/product2.webp"
                              >
                                <img
                                  className="product__media--preview__items--img"
                                  src="assets/img/product/product2.webp"
                                  alt="product-media-img"
                                />
                              </a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">
                                  New
                                </span>
                              </div>
                              <div className="product__media--view__icon">
                                <a
                                  className="product__media--view__icon--link glightbox"
                                  href="assets/img/product/product2.webp"
                                  data-gallery="product-media-preview"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                  >
                                    <image
                                      width={18}
                                      height={18}
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC"
                                    />
                                  </svg>
                                  <span className="visually-hidden">
                                    Media Gallery
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a
                                className="product__media--preview__items--link glightbox"
                                data-gallery="product-media-preview"
                                href="assets/img/product/product1.webp"
                              >
                                <img
                                  className="product__media--preview__items--img"
                                  src="assets/img/product/product1.webp"
                                  alt="product-media-img"
                                />
                              </a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">
                                  New
                                </span>
                              </div>
                              <div className="product__media--view__icon">
                                <a
                                  className="product__media--view__icon--link glightbox"
                                  href="assets/img/product/product1.webp"
                                  data-gallery="product-media-preview"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                  >
                                    <image
                                      width={18}
                                      height={18}
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC"
                                    />
                                  </svg>
                                  <span className="visually-hidden">
                                    Media Gallery
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a
                                className="product__media--preview__items--link glightbox"
                                data-gallery="product-media-preview"
                                href="assets/img/product/product3.webp"
                              >
                                <img
                                  className="product__media--preview__items--img"
                                  src="assets/img/product/product3.webp"
                                  alt="product-media-img"
                                />
                              </a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">
                                  New
                                </span>
                              </div>
                              <div className="product__media--view__icon">
                                <a
                                  className="product__media--view__icon--link glightbox"
                                  href="assets/img/product/product3.webp"
                                  data-gallery="product-media-preview"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                  >
                                    <image
                                      width={18}
                                      height={18}
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC"
                                    />
                                  </svg>
                                  <span className="visually-hidden">
                                    Media Gallery
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a
                                className="product__media--preview__items--link glightbox"
                                data-gallery="product-media-preview"
                                href="assets/img/product/product4.webp"
                              >
                                <img
                                  className="product__media--preview__items--img"
                                  src="assets/img/product/product4.webp"
                                  alt="product-media-img"
                                />
                              </a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">
                                  New
                                </span>
                              </div>
                              <div className="product__media--view__icon">
                                <a
                                  className="product__media--view__icon--link glightbox"
                                  href="assets/img/product/product4.webp"
                                  data-gallery="product-media-preview"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                  >
                                    <image
                                      width={18}
                                      height={18}
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC"
                                    />
                                  </svg>
                                  <span className="visually-hidden">
                                    Media Gallery
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a
                                className="product__media--preview__items--link glightbox"
                                data-gallery="product-media-preview"
                                href="assets/img/product/product5.webp"
                              >
                                <img
                                  className="product__media--preview__items--img"
                                  src="assets/img/product/product5.webp"
                                  alt="product-media-img"
                                />
                              </a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">
                                  New
                                </span>
                              </div>
                              <div className="product__media--view__icon">
                                <a
                                  className="product__media--view__icon--link glightbox"
                                  href="assets/img/product/product5.webp"
                                  data-gallery="product-media-preview"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                  >
                                    <image
                                      width={18}
                                      height={18}
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC"
                                    />
                                  </svg>
                                  <span className="visually-hidden">
                                    Media Gallery
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="product__media--preview__items">
                              <a
                                className="product__media--preview__items--link glightbox"
                                data-gallery="product-media-preview"
                                href="assets/img/product/product6.webp"
                              >
                                <img
                                  className="product__media--preview__items--img"
                                  src="assets/img/product/product6.webp"
                                  alt="product-media-img"
                                />
                              </a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">
                                  New
                                </span>
                              </div>
                              <div className="product__media--view__icon">
                                <a
                                  className="product__media--view__icon--link glightbox"
                                  href="assets/img/product/product6.webp"
                                  data-gallery="product-media-preview"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                  >
                                    <image
                                      width={18}
                                      height={18}
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVhJREFUOE/llLtKA0EUhjdY+BD6ABaW3tIYTWEhiKKCCGIgqGhCgqXvoQFRQdBGERQvUaJFgilVRHwF8RWCWqzfD7OyjrPZ7R342HP2nP1n58yZSfm+/+F53ivUoAseoALtxirBIXiHLPSlEHrBaMGyEYzR+BXuwduHTgltYNzBKSxAM6HSAHknMAf9EqpjjEIGzmAK7mPE0sSrRkQ/cSWhIkZQE4kdwzxoAteQiCbMgeqqsSIhO3nEJK7xPLKC0/h7oT/5CbuEFByDCShDeKZNfC3lwp49SihiVdGv/6GQdm4WSlaxt/AvQ9vedteCZlsn68Aqr/pLPfenaVVsHcBt80HQbIv4txF75GravIQafKClDMKNq9kcgspXd0+CjlM1OLTXZu1LPNVwScYwSYcwA2kJPWJ8QQGekyiEcnqxd6BDQp8YupPOoRueYDdGME9c18gbjMv+BiJYeHc6xpjnAAAAAElFTkSuQmCC"
                                    />
                                  </svg>
                                  <span className="visually-hidden">
                                    Media Gallery
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__media--nav__horizontal swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src="assets/img/product/small-product1.webp"
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src="assets/img/product/small-product2.webp"
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src="assets/img/product/small-product3.webp"
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src="assets/img/product/small-product4.webp"
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src="assets/img/product/small-product1.webp"
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product__media--nav__items">
                            <img
                              className="product__media--nav__items--img"
                              src="assets/img/product/small-product2.webp"
                              alt="product-nav-img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper__nav--btn swiper-button-next" />
                      <div className="swiper__nav--btn swiper-button-prev" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="quickview__info">
                    <form action="#">
                      <h2 className="product__details--info__title h4 mb-10">
                        BASIC MICRO DAYS MONEY BACK.
                      </h2>
                      <div className="product__details--info__rating d-flex align-items-center mb-10">
                        <ul className="rating product__list--rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="13.105"
                                height="13.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="13.105"
                                height="13.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="13.105"
                                height="13.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="13.105"
                                height="13.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="13.105"
                                height="13.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--text text__secondary">
                              ( 5.0)
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="quantity__product--price mb-10">
                        <span className="current__price">$278</span>
                        <span className="price__divided" />
                        <span className="old__price"> $376</span>
                      </div>
                      <p className="product__details--info__desc mb-15">
                        Lorem ipsum dolor sit amet consectetur the are
                        adipisicing elit. Aut numquam ullam is sequi.
                      </p>
                      <div className="product__variant">
                        <div className="product__variant--list mb-12">
                          <fieldset className="variant__input--fieldset">
                            <legend className="product__variant--title mb-8">
                              Color :
                            </legend>
                            <div className="variant__color d-flex">
                              <div className="variant__color--list">
                                <input
                                  id="color-red1"
                                  name="color"
                                  type="radio"
                                  defaultChecked
                                />
                                <label
                                  className="variant__color--value red"
                                  htmlFor="color-red1"
                                  title="Red"
                                >
                                  <img
                                    className="variant__color--value__img"
                                    src="assets/img/product/small-product1.webp"
                                    alt="variant-color-img"
                                  />
                                </label>
                              </div>
                              <div className="variant__color--list">
                                <input
                                  id="color-red2"
                                  name="color"
                                  type="radio"
                                />
                                <label
                                  className="variant__color--value red"
                                  htmlFor="color-red2"
                                  title="Black"
                                >
                                  <img
                                    className="variant__color--value__img"
                                    src="assets/img/product/small-product2.webp"
                                    alt="variant-color-img"
                                  />
                                </label>
                              </div>
                              <div className="variant__color--list">
                                <input
                                  id="color-red3"
                                  name="color"
                                  type="radio"
                                />
                                <label
                                  className="variant__color--value red"
                                  htmlFor="color-red3"
                                  title="Pink"
                                >
                                  <img
                                    className="variant__color--value__img"
                                    src="assets/img/product/small-product3.webp"
                                    alt="variant-color-img"
                                  />
                                </label>
                              </div>
                              <div className="variant__color--list">
                                <input
                                  id="color-red4"
                                  name="color"
                                  type="radio"
                                />
                                <label
                                  className="variant__color--value red"
                                  htmlFor="color-red4"
                                  title="Orange"
                                >
                                  <img
                                    className="variant__color--value__img"
                                    src="assets/img/product/small-product4.webp"
                                    alt="variant-color-img"
                                  />
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div className="product__variant--list mb-15">
                          <fieldset className="variant__input--fieldset">
                            <legend className="product__variant--title mb-8">
                              Weight :
                            </legend>
                            <ul className="variant__size d-flex">
                              <li className="variant__size--list">
                                <input
                                  id="weight1"
                                  name="weight"
                                  type="radio"
                                  defaultChecked
                                />
                                <label
                                  className="variant__size--value red"
                                  htmlFor="weight1"
                                >
                                  5 kg
                                </label>
                              </li>
                              <li className="variant__size--list">
                                <input
                                  id="weight2"
                                  name="weight"
                                  type="radio"
                                />
                                <label
                                  className="variant__size--value red"
                                  htmlFor="weight2"
                                >
                                  3 kg
                                </label>
                              </li>
                              <li className="variant__size--list">
                                <input
                                  id="weight3"
                                  name="weight"
                                  type="radio"
                                />
                                <label
                                  className="variant__size--value red"
                                  htmlFor="weight3"
                                >
                                  2 kg
                                </label>
                              </li>
                            </ul>
                          </fieldset>
                        </div>
                        <div className="product__variant--list quantity d-flex align-items-center mb-15">
                          <div className="quantity__box">
                            <button
                              type="button"
                              className="quantity__value quickview__value--quantity decrease"
                              aria-label="quantity value"
                              value="Decrease Value"
                            >
                              -
                            </button>
                            <label>
                              <input
                                type="number"
                                className="quantity__number quickview__value--number"
                                defaultValue={1}
                                data-counter
                              />
                            </label>
                            <button
                              type="button"
                              className="quantity__value quickview__value--quantity increase"
                              aria-label="quantity value"
                              value="Increase Value"
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="quickview__cart--btn primary__btn"
                            type="submit"
                          >
                            Add To Cart
                          </button>
                        </div>
                        <div className="quickview__variant--list mb-10">
                          <a
                            className="quickview__variant--wishlist__icon"
                            href="wishlist.html"
                            title="Add to wishlist"
                          >
                            <svg
                              className="quickview__variant--wishlist__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                              />
                            </svg>
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                      <div className="quickview__social d-flex align-items-center">
                        <label className="quickview__social--title">
                          Social Share:
                        </label>
                        <ul className="quickview__social--wrapper mt-0 d-flex">
                          <li className="quickview__social--list">
                            <a
                              className="quickview__social--icon"
                              target="_blank"
                              href="https://www.facebook.com/"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.667"
                                height="16.524"
                                viewBox="0 0 7.667 16.524"
                              >
                                <path
                                  data-name="Path 237"
                                  d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z"
                                  transform="translate(-960.13 -345.407)"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="visually-hidden">Facebook</span>
                            </a>
                          </li>
                          <li className="quickview__social--list">
                            <a
                              className="quickview__social--icon"
                              target="_blank"
                              href="https://twitter.com/"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16.489"
                                height="13.384"
                                viewBox="0 0 16.489 13.384"
                              >
                                <path
                                  data-name="Path 303"
                                  d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z"
                                  transform="translate(-951.23 -1140.849)"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="visually-hidden">Twitter</span>
                            </a>
                          </li>
                          <li className="quickview__social--list">
                            <a
                              className="quickview__social--icon"
                              target="_blank"
                              href="https://www.instagram.com/"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17.497"
                                height="17.492"
                                viewBox="0 0 19.497 19.492"
                              >
                                <path
                                  data-name="Icon awesome-instagram"
                                  d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z"
                                  transform="translate(0.004 -1.492)"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="visually-hidden">Instagram</span>
                            </a>
                          </li>
                          <li className="quickview__social--list">
                            <a
                              className="quickview__social--icon"
                              target="_blank"
                              href="https://www.youtube.com/"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16.49"
                                height="11.582"
                                viewBox="0 0 16.49 11.582"
                              >
                                <path
                                  data-name="Path 321"
                                  d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z"
                                  transform="translate(-951.269 -1359.8)"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="visually-hidden">Youtube</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quickview Wrapper End */}
        {/* Scroll top bar */}
        <button id="scroll__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={48}
              d="M112 244l144-144 144 144M256 120v292"
            />
          </svg>
        </button>
        {/* All Script JS Plugins here  */}
        {/*  */}
        {/*  */}
        {/* Customscript js */}
        {/* Mirrored from risingtheme.com/html/rokon-demo/rokon/cart.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 01 Apr 2022 06:13:41 GMT */}
      </div>
    </>
  );
};

export default Cart;

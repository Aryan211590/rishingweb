import React from "react";

const Wishlist = () => {
  return (
    <div>
      <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title mb-10">Wishlist</h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text__secondary">Wishlist</span>
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
          <div className="container">
            <div className="cart__section--inner">
              <form action="#">
                <h2 className="cart__title mb-40">Wishlist</h2>
                <div className="cart__table">
                  <table className="cart__table--inner">
                    <thead className="cart__table--header">
                      <tr className="cart__table--header__items">
                        <th className="cart__table--header__list">Product</th>
                        <th className="cart__table--header__list">Price</th>
                        <th className="cart__table--header__list text-center">
                          STOCK STATUS
                        </th>
                        <th className="cart__table--header__list text-right">
                          ADD TO CART
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
                        <td className="cart__table--body__list text-center">
                          <span className="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td className="cart__table--body__list text-right">
                          <a
                            className="wishlist__cart--btn primary__btn"
                            href="cart.html"
                          >
                            Add To Cart
                          </a>
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
                        <td className="cart__table--body__list text-center">
                          <span className="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td className="cart__table--body__list text-right">
                          <a
                            className="wishlist__cart--btn primary__btn"
                            href="cart.html"
                          >
                            Add To Cart
                          </a>
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
                        <td className="cart__table--body__list text-center">
                          <span className="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td className="cart__table--body__list text-right">
                          <a
                            className="wishlist__cart--btn primary__btn"
                            href="cart.html"
                          >
                            Add To Cart
                          </a>
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
                        <td className="cart__table--body__list text-center">
                          <span className="in__stock text__secondary">
                            in stock
                          </span>
                        </td>
                        <td className="cart__table--body__list text-right">
                          <a
                            className="wishlist__cart--btn primary__btn"
                            href="cart.html"
                          >
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="continue__shopping d-flex justify-content-between">
                    <a className="continue__shopping--link" href="index.html">
                      Continue shopping
                    </a>
                    <a className="continue__shopping--clear" href="shop.html">
                      View All Products
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* cart section end */}
        {/* Start product section */}
        <section className="product__section section--padding pt-0">
          <div className="container">
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
              <div className="row row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
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
                            <span className="visually-hidden">Quick View</span>
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
                        <span className="product__badge--items sale">SALE</span>
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
                            <span className="visually-hidden">Quick View</span>
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
                            <span className="visually-hidden">Quick View</span>
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
                        <span className="product__badge--items sale">SALE</span>
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
                <div className="col custom-col-2 mb-30 d-none d-sm-block">
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
                            <span className="visually-hidden">Quick View</span>
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
    </div>
  );
};

export default Wishlist;

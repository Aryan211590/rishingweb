import React from 'react'
import ShopFooter from './ShopFooter'
import ShopHeader from './ShopHeader'

const Shopgrid = () => {
  return (
   <>
   <ShopHeader/>
   <main className="main__content_wrapper">
  {/* Start breadcrumb section */}
  <section className="breadcrumb__section breadcrumb__bg">
    <div className="container">
      <div className="row row-cols-1">
        <div className="col">
          <div className="breadcrumb__content">
            <h1 className="breadcrumb__content--title mb-10">Shop Grid</h1>
            <ul className="breadcrumb__content--menu d-flex">
              <li className="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
              <li className="breadcrumb__content--menu__items"><span className="text__secondary">Shop Grid</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End breadcrumb section */}
  {/* Start shop section */}
  <section className="shop__section section--padding">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="shop__header shop__header--style2 bg__gray--color d-flex align-items-center justify-content-between mb-30">
            <button className="widget__filter--btn style2 align-items-center" data-offcanvas>
              <svg className="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80" /><circle cx={336} cy={128} r={28} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} /><circle cx={176} cy={256} r={28} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} /><circle cx={336} cy={384} r={28} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} /></svg> 
              <span className="widget__filter--btn__text">Filter</span>
            </button>
            <div className="product__view--mode d-flex align-items-center">
              <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                <label className="product__view--label">Prev Page :</label>
                <div className="select shop__header--select">
                  <select className="product__view--select">
                    <option selected value={1}>65</option>
                    <option value={2}>40</option>
                    <option value={3}>42</option>
                    <option value={4}>57 </option>
                    <option value={5}>60 </option>
                  </select>
                </div>
              </div>
              <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                <label className="product__view--label">Sort By :</label>
                <div className="select shop__header--select">
                  <select className="product__view--select">
                    <option selected value={1}>Sort by latest</option>
                    <option value={2}>Sort by popularity</option>
                    <option value={3}>Sort by newness</option>
                    <option value={4}>Sort by  rating </option>
                  </select>
                </div>
              </div>
              <div className="product__view--mode__list">
                <div className="product__tab--one product__grid--column__buttons d-flex justify-content-center">
                  <button className="product__grid--column__buttons--icons active" data-toggle="tab" aria-label="product grid btn" data-target="#product_grid">
                    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 9 9">
                      <g transform="translate(-1360 -479)">
                        <rect id="Rectangle_5725" data-name="Rectangle 5725" width={4} height={4} transform="translate(1360 479)" fill="currentColor" />
                        <rect id="Rectangle_5727" data-name="Rectangle 5727" width={4} height={4} transform="translate(1360 484)" fill="currentColor" />
                        <rect id="Rectangle_5726" data-name="Rectangle 5726" width={4} height={4} transform="translate(1365 479)" fill="currentColor" />
                        <rect id="Rectangle_5728" data-name="Rectangle 5728" width={4} height={4} transform="translate(1365 484)" fill="currentColor" />
                      </g>
                    </svg>
                  </button>
                  <button className="product__grid--column__buttons--icons" data-toggle="tab" aria-label="product list btn" data-target="#product_list">
                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 13 8">
                      <g id="Group_14700" data-name="Group 14700" transform="translate(-1376 -478)">
                        <g transform="translate(12 -2)">
                          <g id="Group_1326" data-name="Group 1326">
                            <rect id="Rectangle_5729" data-name="Rectangle 5729" width={3} height={2} transform="translate(1364 483)" fill="currentColor" />
                            <rect id="Rectangle_5730" data-name="Rectangle 5730" width={9} height={2} transform="translate(1368 483)" fill="currentColor" />
                          </g>
                          <g id="Group_1328" data-name="Group 1328" transform="translate(0 -3)">
                            <rect id="Rectangle_5729-2" data-name="Rectangle 5729" width={3} height={2} transform="translate(1364 483)" fill="currentColor" />
                            <rect id="Rectangle_5730-2" data-name="Rectangle 5730" width={9} height={2} transform="translate(1368 483)" fill="currentColor" />
                          </g>
                          <g id="Group_1327" data-name="Group 1327" transform="translate(0 -1)">
                            <rect id="Rectangle_5731" data-name="Rectangle 5731" width={3} height={2} transform="translate(1364 487)" fill="currentColor" />
                            <rect id="Rectangle_5732" data-name="Rectangle 5732" width={9} height={2} transform="translate(1368 487)" fill="currentColor" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p className="product__showing--count">Showing 1–9 of 21 results</p>
          </div>
          <div className="shop__product--wrapper">
            <div className="tab_content">
              <div id="product_grid" className="tab_pane active show">
                <div className="product__section--inner product__grid--inner">
                  <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
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
                    <div className="col custom-col-2 mb-30">
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
                    <div className="col custom-col-2 mb-30">
                      <article className="product__card">
                        <div className="product__card--thumbnail">
                          <a className="product__card--thumbnail__link display-block" href="product-details.html">
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product4.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product3.webp" alt="product-img" />
                          </a>
                          <div className="product__badge">
                            <span className="product__badge--items sale">SALE</span>
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
                        </div>
                        <div className="product__card--content text-center">
                          <span className="product__card--meta__tag">Watch,Woman</span>
                          <h3 className="product__card--title"><a href="product-details.html"> Advanced Analytic</a></h3>
                          <div className="product__card--price">
                            <span className="current__price">$220</span>
                            <span className="price__divided" />
                            <span className="old__price"> $325</span>
                          </div>
                          <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                        </div>
                      </article>
                    </div>
                    <div className="col custom-col-2 mb-30">
                      <article className="product__card">
                        <div className="product__card--thumbnail">
                          <a className="product__card--thumbnail__link display-block" href="product-details.html">
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product6.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product5.webp" alt="product-img" />
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
                        </div>
                        <div className="product__card--content text-center">
                          <span className="product__card--meta__tag">Watch,Woman</span>
                          <h3 className="product__card--title"><a href="product-details.html">Advanced To Watch </a></h3>
                          <div className="product__card--price">
                            <span className="current__price">$365</span>
                            <span className="price__divided" />
                            <span className="old__price"> $378</span>
                          </div>
                          <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                        </div>
                      </article>
                    </div>
                    <div className="col custom-col-2 mb-30">
                      <article className="product__card">
                        <div className="product__card--thumbnail">
                          <a className="product__card--thumbnail__link display-block" href="product-details.html">
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product3.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product4.webp" alt="product-img" />
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
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product2.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product1.webp" alt="product-img" />
                          </a>
                          <div className="product__badge">
                            <span className="product__badge--items sale">SALE</span>
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
                    <div className="col custom-col-2 mb-30 d-sm-none">
                      <article className="product__card">
                        <div className="product__card--thumbnail product__swiper--column1 swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a className="product__card--thumbnail__link display-block" href="product-details.html">
                                <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product1.webp" alt="product-img" />
                                <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product2.webp" alt="product-img" />
                              </a>
                              <div className="product__badge">
                                <span className="product__badge--items sale">SALE</span>
                              </div>
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
                  </div>
                </div>
              </div>
              <div id="product_list" className="tab_pane">
                <div className="product__section--inner">
                  <div className="row row-cols-1 mb--n30">
                    <div className="col mb-30">
                      <article className=" product__card product__card--list d-flex">
                        <div className="product__card--thumbnail product__card--list__thumbnail">
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
                        <div className="product__card--content product__card--list__content">
                          <span className="product__card--meta__tag">Watch,Woman</span>
                          <h3 className="product__card--title"><a href="product-details.html">Lorem ipsum dolor sit. </a></h3>
                          <div className="product__card--price">
                            <span className="current__price">$232</span>
                            <span className="price__divided" />
                            <span className="old__price"> $340</span>
                          </div>
                          <ul className="rating product__card--list__rating d-flex">
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
                          <p className="product__list--items__content--desc d-lg-none mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi, natus at rem ab quae amet molestiae quod voluptates, illo exercitationem numquam ipsa.</p>
                          <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                        </div>
                      </article>
                    </div>
                    <div className="col mb-30">
                      <article className=" product__card product__card--list d-flex">
                        <div className="product__card--thumbnail product__card--list__thumbnail">
                          <a className="product__card--thumbnail__link display-block" href="product-details.html">
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product3.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product4.webp" alt="product-img" />
                          </a>
                          <div className="product__badge">
                            <span className="product__badge--items sale">SALE</span>
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
                        </div>
                        <div className="product__card--content product__card--list__content">
                          <span className="product__card--meta__tag">Watch,Woman</span>
                          <h3 className="product__card--title"><a href="product-details.html">Advanced To Watch . </a></h3>
                          <div className="product__card--price">
                            <span className="current__price">$225</span>
                            <span className="price__divided" />
                            <span className="old__price"> $315</span>
                          </div>
                          <ul className="rating product__card--list__rating d-flex">
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
                          <p className="product__list--items__content--desc d-lg-none mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi, natus at rem ab quae amet molestiae quod voluptates, illo exercitationem numquam ipsa.</p>
                          <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                        </div>
                      </article>
                    </div>
                    <div className="col mb-30">
                      <article className=" product__card product__card--list d-flex">
                        <div className="product__card--thumbnail product__card--list__thumbnail">
                          <a className="product__card--thumbnail__link display-block" href="product-details.html">
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product5.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product6.webp" alt="product-img" />
                          </a>
                          <div className="product__badge">
                            <span className="product__badge--items sale">SALE</span>
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
                        </div>
                        <div className="product__card--content product__card--list__content">
                          <span className="product__card--meta__tag">Watch,Woman</span>
                          <h3 className="product__card--title"><a href="product-details.html">Advanced Analytic. </a></h3>
                          <div className="product__card--price">
                            <span className="current__price">$238</span>
                            <span className="price__divided" />
                            <span className="old__price"> $348</span>
                          </div>
                          <ul className="rating product__card--list__rating d-flex">
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
                          <p className="product__list--items__content--desc d-lg-none mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi, natus at rem ab quae amet molestiae quod voluptates, illo exercitationem numquam ipsa.</p>
                          <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                        </div>
                      </article>
                    </div>
                    <div className="col mb-30">
                      <article className=" product__card product__card--list d-flex">
                        <div className="product__card--thumbnail product__card--list__thumbnail">
                          <a className="product__card--thumbnail__link display-block" href="product-details.html">
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product2.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product1.webp" alt="product-img" />
                          </a>
                          <div className="product__badge">
                            <span className="product__badge--items sale">SALE</span>
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
                        </div>
                        <div className="product__card--content product__card--list__content">
                          <span className="product__card--meta__tag">Watch,Woman</span>
                          <h3 className="product__card--title"><a href="product-details.html">Adipisicing elit Officia ab. </a></h3>
                          <div className="product__card--price">
                            <span className="current__price">$255</span>
                            <span className="price__divided" />
                            <span className="old__price"> $367</span>
                          </div>
                          <ul className="rating product__card--list__rating d-flex">
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
                          <p className="product__list--items__content--desc d-lg-none mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi, natus at rem ab quae amet molestiae quod voluptates, illo exercitationem numquam ipsa.</p>
                          <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                        </div>
                      </article>
                    </div>
                    <div className="col mb-30">
                      <article className=" product__card product__card--list d-flex">
                        <div className="product__card--thumbnail product__card--list__thumbnail">
                          <a className="product__card--thumbnail__link display-block" href="product-details.html">
                            <img className="product__card--thumbnail__img product__primary--img display-block" src="assets/img/product/product4.webp" alt="product-img" />
                            <img className="product__card--thumbnail__img product__secondary--img display-block" src="assets/img/product/product3.webp" alt="product-img" />
                          </a>
                          <div className="product__badge">
                            <span className="product__badge--items sale">SALE</span>
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
                        </div>
                        <div className="product__card--content product__card--list__content">
                          <span className="product__card--meta__tag">Watch,Woman</span>
                          <h3 className="product__card--title"><a href="product-details.html">Numquam quasi atque labor. </a></h3>
                          <div className="product__card--price">
                            <span className="current__price">$225</span>
                            <span className="price__divided" />
                            <span className="old__price"> $335</span>
                          </div>
                          <ul className="rating product__card--list__rating d-flex">
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
                          <p className="product__list--items__content--desc d-lg-none mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi, natus at rem ab quae amet molestiae quod voluptates, illo exercitationem numquam ipsa.</p>
                          <a className="product__card--btn primary__btn" href="cart.html">Add To Card</a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination__area bg__gray--color">
              <nav className="pagination">
                <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                  <li className="pagination__list">
                    <a href="shop.html" className="pagination__item--arrow  link ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M244 400L100 256l144-144M120 256h292" /></svg>
                      <span className="visually-hidden">pagination arrow</span>
                    </a>
                  </li><li>
                  </li><li className="pagination__list"><span className="pagination__item pagination__item--current">1</span></li>
                  <li className="pagination__list"><a href="shop.html" className="pagination__item link">2</a></li>
                  <li className="pagination__list"><a href="shop.html" className="pagination__item link">3</a></li>
                  <li className="pagination__list"><a href="shop.html" className="pagination__item link">4</a></li>
                  <li className="pagination__list">
                    <a href="shop.html" className="pagination__item--arrow  link ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M268 112l144 144-144 144M392 256H100" /></svg>
                      <span className="visually-hidden">pagination arrow</span>
                    </a>
                  </li><li>
                  </li></ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End shop section */}
</main>

   <ShopFooter/>
   </>
  )
}

export default Shopgrid
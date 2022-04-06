import React from 'react'

const Checkout = () => {
  return (
   <>
   <div>
  
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
              <h1 className="breadcrumb__content--title mb-10">Checkout</h1>
              <ul className="breadcrumb__content--menu d-flex">
                <li className="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
                <li className="breadcrumb__content--menu__items"><span className="text__secondary">Checkout</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End breadcrumb section */}
    {/* Start checkout page area */}
    <div className="checkout__page--area section--padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <div className="main checkout__mian">
              <form action="#">
                <div className="checkout__content--step section__contact--information">
                  <div className="section__header checkout__section--header d-flex align-items-center justify-content-between mb-25">
                    <h2 className="section__header--title h3">Contact information</h2>
                    <p className="layout__flex--item">
                      Already have an account?
                      <a className="layout__flex--item__link" href="login.html">Log in</a>  
                    </p>
                  </div>
                  <div className="customer__information">
                    <div className="checkout__email--phone mb-12">
                      <label>
                        <input className="checkout__input--field border-radius-5" placeholder="Email or mobile phone mumber" type="text" />
                      </label>
                    </div>
                    <div className="checkout__checkbox">
                      <input className="checkout__checkbox--input" id="check1" type="checkbox" />
                      <span className="checkout__checkbox--checkmark" />
                      <label className="checkout__checkbox--label" htmlFor="check1">
                        Email me with news and offers</label>
                    </div>
                  </div>
                </div>
                <div className="checkout__content--step section__shipping--address">
                  <div className="section__header mb-25">
                    <h2 className="section__header--title h3">Billing Details</h2>
                  </div>
                  <div className="section__shipping--address__content">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                        <div className="checkout__input--list ">
                          <label className="checkout__input--label mb-5" htmlFor="input1">Fist Name <span className="checkout__input--label__star">*</span></label>
                          <input className="checkout__input--field border-radius-5" placeholder="First name (optional)" id="input1" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                        <div className="checkout__input--list">
                          <label className="checkout__input--label mb-5" htmlFor="input2">Last Name <span className="checkout__input--label__star">*</span></label>
                          <input className="checkout__input--field border-radius-5" placeholder="Last name" id="input2" type="text" />
                        </div>
                      </div>
                      <div className="col-12 mb-20">
                        <div className="checkout__input--list">
                          <label className="checkout__input--label mb-5" htmlFor="input3">Company Name <span className="checkout__input--label__star">*</span></label>
                          <input className="checkout__input--field border-radius-5" placeholder="Company (optional)" id="input3" type="text" />
                        </div>
                      </div>
                      <div className="col-12 mb-20">
                        <div className="checkout__input--list">
                          <label className="checkout__input--label mb-5" htmlFor="input4">Address <span className="checkout__input--label__star">*</span></label>
                          <input className="checkout__input--field border-radius-5" placeholder="Address1" id="input4" type="text" />
                        </div>
                      </div>
                      <div className="col-12 mb-20">
                        <div className="checkout__input--list">
                          <input className="checkout__input--field border-radius-5" placeholder="Apartment, suite, etc. (optional)" type="text" />
                        </div>
                      </div>
                      <div className="col-12 mb-20">
                        <div className="checkout__input--list">
                          <label className="checkout__input--label mb-5" htmlFor="input5">Town/City <span className="checkout__input--label__star">*</span></label>
                          <input className="checkout__input--field border-radius-5" placeholder="City" id="input5" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-20">
                        <div className="checkout__input--list">
                          <label className="checkout__input--label mb-5" htmlFor="country">Country/region <span className="checkout__input--label__star">*</span></label>
                          <div className="checkout__input--select select">
                            <select className="checkout__input--select__field border-radius-5" id="country">
                              <option value={1}>India</option>
                              <option value={2}>United States</option>
                              <option value={3}>Netherlands</option>
                              <option value={4}>Afghanistan</option>
                              <option value={5}>Islands</option>
                              <option value={6}>Albania</option>
                              <option value={7}>Antigua Barbuda</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-20">
                        <div className="checkout__input--list">
                          <label className="checkout__input--label mb-5" htmlFor="input6">Postal Code <span className="checkout__input--label__star">*</span></label>
                          <input className="checkout__input--field border-radius-5" placeholder="Postal code" id="input6" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <details>
                    <summary className="checkout__checkbox mb-20">
                      <input className="checkout__checkbox--input" type="checkbox" />
                      <span className="checkout__checkbox--checkmark" />
                      <span className="checkout__checkbox--label">Ship to a different address?</span>
                    </summary>
                    <div className="section__shipping--address__content">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                          <div className="checkout__input--list ">
                            <label className="checkout__input--label mb-5" htmlFor="input7">Fist Name <span className="checkout__input--label__star">*</span></label>
                            <input className="checkout__input--field border-radius-5" placeholder="First name (optional)" id="input7" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                          <div className="checkout__input--list">
                            <label className="checkout__input--label mb-5" htmlFor="input8">Last Name <span className="checkout__input--label__star">*</span></label>
                            <input className="checkout__input--field border-radius-5" placeholder="Last name" id="input8" type="text" />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <label className="checkout__input--label mb-5" htmlFor="input9">Company Name <span className="checkout__input--label__star">*</span></label>
                            <input className="checkout__input--field border-radius-5" placeholder="Company (optional)" id="input9" type="text" />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <label className="checkout__input--label mb-5" htmlFor="input10">Address <span className="checkout__input--label__star">*</span></label>
                            <input className="checkout__input--field border-radius-5" placeholder="Address1" id="input10" type="text" />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <input className="checkout__input--field border-radius-5" placeholder="Apartment, suite, etc. (optional)" type="text" />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <label className="checkout__input--label mb-5" htmlFor="input11">Town/City <span className="checkout__input--label__star">*</span></label>
                            <input className="checkout__input--field border-radius-5" placeholder="City" id="input11" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-20">
                          <div className="checkout__input--list">
                            <label className="checkout__input--label mb-5" htmlFor="country2">Country/region <span className="checkout__input--label__star">*</span></label>
                            <div className="checkout__input--select select">
                              <select className="checkout__input--select__field border-radius-5" id="country2">
                                <option value={1}>India</option>
                                <option value={2}>United States</option>
                                <option value={3}>Netherlands</option>
                                <option value={4}>Afghanistan</option>
                                <option value={5}>Islands</option>
                                <option value={6}>Albania</option>
                                <option value={7}>Antigua Barbuda</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-20">
                          <div className="checkout__input--list">
                            <label className="checkout__input--label mb-5" htmlFor="input12">Postal Code <span className="checkout__input--label__star">*</span></label>
                            <input className="checkout__input--field border-radius-5" placeholder="Postal code" id="input12" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <div className="checkout__checkbox">
                    <input className="checkout__checkbox--input" id="checkbox2" type="checkbox" />
                    <span className="checkout__checkbox--checkmark" />
                    <label className="checkout__checkbox--label" htmlFor="checkbox2">
                      Save this information for next time</label>
                  </div>
                </div>
                <div className="order-notes mb-20">
                  <label className="checkout__input--label mb-5" htmlFor="order">Order Notes <span className="checkout__input--label__star">*</span></label>
                  <textarea className="checkout__notes--textarea__field border-radius-5" id="order" placeholder="Notes about your order, e.g. special notes for delivery." spellCheck="false" defaultValue={""} />
                </div>
                <div className="checkout__content--step__footer d-flex align-items-center">
                  <a className="continue__shipping--btn primary__btn border-radius-5" href="index.html">Continue To Shipping</a>
                  <a className="previous__link--content" href="cart.html">Return to cart</a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <aside className="checkout__sidebar sidebar border-radius-10">
              <h2 className="checkout__order--summary__title text-center mb-15">Your Order Summary</h2>
              <div className="cart__table checkout__product--table">
                <table className="cart__table--inner">
                  <tbody className="cart__table--body">
                    <tr className="cart__table--body__items">
                      <td className="cart__table--body__list">
                        <div className="product__image two  d-flex align-items-center">
                          <div className="product__thumbnail border-radius-5">
                            <a className="display-block" href="product-details.html"><img className="display-block border-radius-5" src="assets/img/product/small-product1.webp" alt="cart-product" /></a>
                            <span className="product__thumbnail--quantity">1</span>
                          </div>
                          <div className="product__description">
                            <h4 className="product__description--name"><a href="product-details.html">Fresh-whole-fish</a></h4>
                            <span className="product__description--variant">COLOR: Blue</span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__table--body__list">
                        <span className="cart__price">£65.00</span>
                      </td>
                    </tr>
                    <tr className="cart__table--body__items">
                      <td className="cart__table--body__list">
                        <div className="cart__product d-flex align-items-center">
                          <div className="product__thumbnail border-radius-5">
                            <a className="display-block" href="product-details.html"><img className="display-block border-radius-5" src="assets/img/product/small-product2.webp" alt="cart-product" /></a>
                            <span className="product__thumbnail--quantity">1</span>
                          </div>
                          <div className="product__description">
                            <h4 className="product__description--name"><a href="product-details.html">Vegetable-healthy</a></h4>
                            <span className="product__description--variant">COLOR: Green</span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__table--body__list">
                        <span className="cart__price">£82.00</span>
                      </td>
                    </tr>
                    <tr className="cart__table--body__items">
                      <td className="cart__table--body__list">
                        <div className="cart__product d-flex align-items-center">
                          <div className="product__thumbnail border-radius-5">
                            <a className="display-block" href="product-details.html"><img className="display-block border-radius-5" src="assets/img/product/small-product4.webp" alt="cart-product" /></a>
                            <span className="product__thumbnail--quantity">1</span>
                          </div>
                          <div className="product__description">
                            <h4 className="product__description--name"><a href="product-details.html">Raw-onions-surface</a></h4>
                            <span className="product__description--variant">COLOR: White</span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__table--body__list">
                        <span className="cart__price">£78.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table> 
              </div>
              <div className="checkout__discount--code">
                <form className="d-flex" action="#">
                  <label>
                    <input className="checkout__discount--code__input--field border-radius-5" placeholder="Gift card or discount code" type="text" />
                  </label>
                  <button className="checkout__discount--code__btn primary__btn border-radius-5" type="submit">Apply</button>
                </form>
              </div>
              <div className="checkout__total">
                <table className="checkout__total--table">
                  <tbody className="checkout__total--body">
                    <tr className="checkout__total--items">
                      <td className="checkout__total--title text-left">Subtotal </td>
                      <td className="checkout__total--amount text-right">$860.00</td>
                    </tr>
                    <tr className="checkout__total--items">
                      <td className="checkout__total--title text-left">Shipping</td>
                      <td className="checkout__total--calculated__text text-right">Calculated at next step</td>
                    </tr>
                  </tbody>
                  <tfoot className="checkout__total--footer">
                    <tr className="checkout__total--footer__items">
                      <td className="checkout__total--footer__title checkout__total--footer__list text-left">Total </td>
                      <td className="checkout__total--footer__amount checkout__total--footer__list text-right">$860.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="payment__history mb-30">
                <h3 className="payment__history--title mb-20">Payment</h3>
                <ul className="payment__history--inner d-flex">
                  <li className="payment__history--list"><button className="payment__history--link primary__btn" type="submit">Credit Card</button></li>
                  <li className="payment__history--list"><button className="payment__history--link primary__btn" type="submit">Bank Transfer</button></li>
                  <li className="payment__history--list"><button className="payment__history--link primary__btn" type="submit">Paypal</button></li>
                </ul>
              </div>
              <button className="checkout__now--btn primary__btn" type="submit">Checkout Now</button>
            </aside>
          </div>
        </div>
      </div>
    </div>
    {/* End checkout page area */}
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
    {/* End newsletter section */}
  </main>
  {/* Start footer section */}
 
  {/* End footer section */}
  {/* Scroll top bar */}
  <button id="scroll__top"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M112 244l144-144 144 144M256 120v292" /></svg></button>
</div>

   </>
  )
}

export default Checkout
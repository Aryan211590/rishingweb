import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title mb-10">
                    Frequently
                  </h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text__secondary">Frequently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* faq page section start */}
        <section className="faq__section section--padding">
          <div className="container">
            <div className="faq__section--inner">
              <div
                className="face__step one border-bottom"
                id="accordionExample"
              >
                <h3 className="face__step--title mb-30">
                  Shipping Information
                </h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="accordion__container">
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            What Shipping Methods Are Available?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            How Long Will it Take To Get My Package??
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            What payment types can I use?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="accordion__container">
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            Do you ship internationally??
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            How will my parcel be delivered?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            How do I know if something is organic?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="face__step one border-bottom"
                id="accordionExample2"
              >
                <h3 className="face__step--title mb-30">Payment Information</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="accordion__container">
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            What payment types can I use?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            Can I pay by Gift Card?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            can't make a payment
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="accordion__container">
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            Has my payment gone through?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            Tracking my order
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            Haven’t received my order
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="face__step one" id="accordionExample3">
                <h3 className="face__step--title mb-30">Orders and Returns</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="accordion__container">
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            How can I return an item?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            What Shipping Methods Are Available?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            How can i make refund from your website?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="accordion__container">
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            I am a new user. How should I start?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            What payment methods are accepted?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                      <div className="accordion__items">
                        <h2 className="accordion__items--title">
                          <button className="faq__accordion--btn accordion__items--button">
                            Do you ship internationally?
                            <span className="accordion__items--button__icon">
                              <svg
                                className="accordion__items--button__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.355"
                                height="20.394"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div className="accordion__items--body">
                          <p className="accordion__items--body__desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna
                            nibh, viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci. Aenean
                            dignissim felis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* faq page section end */}
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

export default Breadcrumb;

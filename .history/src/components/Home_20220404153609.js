import React from "react";
import { Link } from "react-router-dom";
import BootstrapSlider from "./BootstrapSlider";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <main className="main__content_wrapper">
        <Slider/>
        {/* Start image with text section */}
        <section className="image__with--text__section section--padding">
          <div className="container">
            <div className="row row-cols-md-2 row-cols-1 align-items-center">
              <div className="col">
                <div className="image__with--text__thumbnail">
                  <img
                    className="display-block"
                    src="assets/img/other/drone-image.webp"
                    alt="drone-image"
                  />
                </div>
              </div>
              <div className="col">
                <div className="image__with--text__content">
                  <h2 className="image__with--text__title mb-18">
                    Most Talented Builders Architects Drone.
                  </h2>
                  <p className="image__with--text__desc mb-25">
                    Beyond more stoic this along goodness this sed wow manatee
                    mongos flusterd impressive man farcrud opened inside owin
                    punitively wasteful telling spransac coldly spokeles.
                  </p>
                  <div className="image__with--text__percent color-primary-2 mb-40">
                    <ul>
                      <li className="image__with--text__percent--list mb-25">
                        <span className="image__with--text__percent--top d-flex justify-content-between align-content-center">
                          <span className="image__with--text__percent--content">
                            Integrative control
                          </span>
                          <span className="image__with--text__percent--content">
                            58%
                          </span>
                        </span>
                      </li>
                      <li className="image__with--text__percent--list two">
                        <span className="image__with--text__percent--top d-flex justify-content-between align-content-center">
                          <span className="image__with--text__percent--content">
                            Design Device
                          </span>
                          <span className="image__with--text__percent--content">
                            77%
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="image__with--text__content--footer d-flex">
                    <img
                      className="display-block"
                      src="assets/img/other/text-shape.webp"
                      alt="text-shape"
                    />
                    <p className="image__with--text__content--footer__desc">
                      YEARS SINCE WE ESTABLISHED - <br />
                      EXPERIENCE &amp; STILL A GROWING <br />
                      PROTFOLIO DAY BY DAY!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="image__with--text__position--shape display-block"
            src="assets/img/other/image-with-text-section-shape.webp"
            alt="shape img"
          />
        </section>
        {/* End image with text section */}
        {/* Start service section */}
        <section className="services__section services__section--bg section--padding">
          <div className="container">
            <div className="section__heading text-center mb-50">
              <h2 className="section__heading--maintitle text__secondary mb-10">
                Our Best Service
              </h2>
              <p className="section__heading--desc">
                Beyond more stoic this along goodness this sed wow manatee
                mongos flusterd impressive man farcrud opened.
              </p>
            </div>
            <div className="services__inner">
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n30">
                <div className="col custom-col mb-30">
                  <article className="services__card">
                    <Link
                      className="services__card--link"
                      to="/product-details"
                    >
                      <div className="services__card--topbar d-flex justify-content-between">
                        <div className="services__card--icon mb-20">
                          <img
                            className="display-block services__card--primary__icon"
                            src="assets/img/icon/service-icon1.webp"
                            alt="services-icon"
                          />
                          <img
                            className="display-block services__card--secondary__icon"
                            src="assets/img/icon/service-icon1-white.webp"
                            alt="services-icon"
                          />
                        </div>
                        <div className="services__card--number">
                          <span className="services__card--number__text">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="services__card--content">
                        <h3 className="services__card--maintitle mb-15">
                          Advanced Analytic
                        </h3>
                        <p className="services__card--desc mb-15">
                          Every team has a culture and set of ct ations that
                          have either been aed orsve naturally evolved.
                        </p>
                        <span className="services__card--readmore text__secondary">
                          Read More
                          <svg
                            className="services__card--readmore__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.51"
                            height="15.443"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={48}
                              d="M268 112l144 144-144 144M392 256H100"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </article>
                </div>
                <div className="col custom-col mb-30">
                  <article className="services__card">
                    <a
                      className="services__card--link"
                      href="product-details.html"
                    >
                      <div className="services__card--topbar d-flex justify-content-between">
                        <div className="services__card--icon mb-20">
                          <img
                            className="display-block services__card--primary__icon"
                            src="assets/img/icon/service-icon2.webp"
                            alt="services-icon"
                          />
                          <img
                            className="display-block services__card--secondary__icon"
                            src="assets/img/icon/service-icon2-white.webp"
                            alt="services-icon"
                          />
                        </div>
                        <div className="services__card--number">
                          <span className="services__card--number__text">
                            2
                          </span>
                        </div>
                      </div>
                      <div className="services__card--content">
                        <h3 className="services__card--maintitle mb-15">
                          Advanced To Watch
                        </h3>
                        <p className="services__card--desc mb-15">
                          Every team has a culture and set of ct ations that
                          have either been aed orsve naturally evolved.
                        </p>
                        <span className="services__card--readmore text__secondary">
                          Read More
                          <svg
                            className="services__card--readmore__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.51"
                            height="15.443"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={48}
                              d="M268 112l144 144-144 144M392 256H100"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </article>
                </div>
                <div className="col custom-col mb-30">
                  <article className="services__card">
                    <a className="services__card--link" href="shop.html">
                      <div className="services__card--topbar d-flex justify-content-between">
                        <div className="services__card--icon mb-20">
                          <img
                            className="display-block services__card--primary__icon"
                            src="assets/img/icon/service-icon3.webp"
                            alt="services-icon"
                          />
                          <img
                            className="display-block services__card--secondary__icon"
                            src="assets/img/icon/service-icon3-white.webp"
                            alt="services-icon"
                          />
                        </div>
                        <div className="services__card--number">
                          <span className="services__card--number__text">
                            3
                          </span>
                        </div>
                      </div>
                      <div className="services__card--content">
                        <h3 className="services__card--maintitle mb-15">
                          Dolor consectetur.
                        </h3>
                        <p className="services__card--desc mb-15">
                          Every team has a culture and set of ct ations that
                          have either been aed orsve naturally evolved.
                        </p>
                        <span className="services__card--readmore text__secondary">
                          Read More
                          <svg
                            className="services__card--readmore__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.51"
                            height="15.443"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={48}
                              d="M268 112l144 144-144 144M392 256H100"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </article>
                </div>
                <div className="col custom-col mb-30">
                  <article className="services__card">
                    <a className="services__card--link" href="shop.html">
                      <div className="services__card--topbar d-flex justify-content-between">
                        <div className="services__card--icon mb-20">
                          <img
                            className="display-block services__card--primary__icon"
                            src="assets/img/icon/service-icon4.webp"
                            alt="services-icon"
                          />
                          <img
                            className="display-block services__card--secondary__icon"
                            src="assets/img/icon/service-icon4-white.webp"
                            alt="services-icon"
                          />
                        </div>
                        <div className="services__card--number">
                          <span className="services__card--number__text">
                            4
                          </span>
                        </div>
                      </div>
                      <div className="services__card--content">
                        <h3 className="services__card--maintitle mb-15">
                          Amet consect elit.
                        </h3>
                        <p className="services__card--desc mb-15">
                          Every team has a culture and set of ct ations that
                          have either been aed orsve naturally evolved.
                        </p>
                        <span className="services__card--readmore text__secondary">
                          Read More
                          <svg
                            className="services__card--readmore__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.51"
                            height="15.443"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={48}
                              d="M268 112l144 144-144 144M392 256H100"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </article>
                </div>
                <div className="col custom-col mb-30">
                  <article className="services__card">
                    <a className="services__card--link" href="shop.html">
                      <div className="services__card--topbar d-flex justify-content-between">
                        <div className="services__card--icon mb-20">
                          <img
                            className="display-block services__card--primary__icon"
                            src="assets/img/icon/service-icon5.webp"
                            alt="services-icon"
                          />
                          <img
                            className="display-block services__card--secondary__icon"
                            src="assets/img/icon/service-icon5-white.webp"
                            alt="services-icon"
                          />
                        </div>
                        <div className="services__card--number">
                          <span className="services__card--number__text">
                            5
                          </span>
                        </div>
                      </div>
                      <div className="services__card--content">
                        <h3 className="services__card--maintitle mb-15">
                          Advanced To Watch
                        </h3>
                        <p className="services__card--desc mb-15">
                          Every team has a culture and set of ct ations that
                          have either been aed orsve naturally evolved.
                        </p>
                        <span className="services__card--readmore text__secondary">
                          Read More
                          <svg
                            className="services__card--readmore__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.51"
                            height="15.443"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={48}
                              d="M268 112l144 144-144 144M392 256H100"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </article>
                </div>
                <div className="col custom-col mb-30">
                  <article className="services__card">
                    <a className="services__card--link" href="shop.html">
                      <div className="services__card--topbar d-flex justify-content-between">
                        <div className="services__card--icon mb-20">
                          <img
                            className="display-block services__card--primary__icon"
                            src="assets/img/icon/service-icon6.webp"
                            alt="services-icon"
                          />
                          <img
                            className="display-block services__card--secondary__icon"
                            src="assets/img/icon/service-icon6-white.webp"
                            alt="services-icon"
                          />
                        </div>
                        <div className="services__card--number">
                          <span className="services__card--number__text">
                            6
                          </span>
                        </div>
                      </div>
                      <div className="services__card--content">
                        <h3 className="services__card--maintitle mb-15">
                          Advanced Analytic
                        </h3>
                        <p className="services__card--desc mb-15">
                          Every team has a culture and set of ct ations that
                          have either been aed orsve naturally evolved.
                        </p>
                        <span className="services__card--readmore text__secondary">
                          Read More
                          <svg
                            className="services__card--readmore__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.51"
                            height="15.443"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={48}
                              d="M268 112l144 144-144 144M392 256H100"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End service section */}

        {/* Start about section */}
        <section className="about__section section--padding border-bottom">
          <div className="container">
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
              <div className="col">
                <div className="about__content">
                  <h2 className="about__content--title mb-18">
                    We Have This Builders Easy integrative.
                  </h2>
                  <div className="about__content--step mb-25">
                    <p className="about__content--desc mb-20">
                      Beyond more stoic this along goodness this sed wow manatee
                      mongos flusterd impressive man farcrud opened inside owin
                      punitively wasteful telling spransac coldly spokeles.
                    </p>
                    <ul className="mb-20">
                      <li className="about__content--desc__list">
                        Beyond drone is an to be contre unmanned aerial.
                      </li>
                      <li className="about__content--desc__list">
                        With various equipment including tho drone.
                      </li>
                    </ul>
                    <p className="about__content--desc style2">
                      Beyond more stoic this along goodness this sed wow
                      flusterd impressive
                    </p>
                  </div>
                  <div className="about__content--author d-flex align-items-center mb-50">
                    <div className="about__content--author__thumb">
                      <img
                        className="display-block"
                        src="assets/img/other/about-author.webp"
                        alt="about author thumb"
                      />
                    </div>
                    <div className="about__content--author__text d-flex align-items-center">
                      <div className="about__content--author__text--left">
                        <h3 className="about__content--author__name text__secondary">
                          - Rubel Wilson,
                        </h3>
                        <span className="about__content--author__rank">
                          Founder
                        </span>
                      </div>
                      <img
                        className="about__author--signature display-block"
                        src="assets/img/icon/signature.webp"
                        alt="signature"
                      />
                    </div>
                  </div>
                  <a
                    className="about__content--btn primary__btn"
                    href="contact.html"
                  >
                    Ask For Price
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="about__thumbnail">
                  <img
                    className="display-block"
                    src="assets/img/other/about-thumb.webp"
                    alt="about-thumb"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End about section */}
      </main>
    </div>
  );
};

export default Home;

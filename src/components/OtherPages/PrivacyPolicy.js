import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      {" "}
      <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title mb-10">
                    Privacy Policy
                  </h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text__secondary">Privacy Policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start privacy policy section */}
        <div className="privacy__policy--section section--padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="privacy__policy--content">
                  <h2 className="privacy__policy--content__title">
                    Who we are
                  </h2>
                  <p className="privacy__policy--content__desc">
                    Our website address is:{" "}
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
                <div className="privacy__policy--content section_2">
                  <h2 className="privacy__policy--content__title">
                    What personal data we collect and why we collect it
                  </h2>
                  <h3 className="privacy__policy--content__subtitle">
                    Comments
                  </h3>
                  <p className="privacy__policy--content__desc">
                    When visitors leave comments on the site we collect the data
                    shown in the comments form, and also the visitor’s IP
                    address and browser user agent string to help spam
                    detection.
                  </p>
                  <p className="privacy__policy--content__desc">
                    An anonymized string created from your email address (also
                    called a hash) may be provided to the Gravatar service to
                    see if you are using it. The Gravatar service privacy policy
                    is available here: https://automattic.com/privacy/. After
                    approval of your comment, your profile picture is visible to
                    the public in the context of your comment.
                  </p>
                  <h3 className="privacy__policy--content__subtitle">Media</h3>
                  <p className="privacy__policy--content__desc">
                    If you upload images to the website, you should avoid
                    uploading images with embedded location data (EXIF GPS)
                    included. Visitors to the website can download and extract
                    any location data from images on the website.
                  </p>
                  <h3 className="privacy__policy--content__subtitle">
                    Cookies
                  </h3>
                  <p className="privacy__policy--content__desc">
                    If you leave a comment on our site you may opt-in to saving
                    your name, email address and website in cookies. These are
                    for your convenience so that you do not have to fill in your
                    details again when you leave another comment. These cookies
                    will last for one year.
                  </p>
                  <p className="privacy__policy--content__desc">
                    If you have an account and you log in to this site, we will
                    set a temporary cookie to determine if your browser accepts
                    cookies. This cookie contains no personal data and is
                    discarded when you close your browser.
                  </p>
                  <p className="privacy__policy--content__desc">
                    When you log in, we will also set up several cookies to save
                    your login information and your screen display choices.
                    Login cookies last for two days, and screen options cookies
                    last for a year. If you select “Remember Me”, your login
                    will persist for two weeks. If you log out of your account,
                    the login cookies will be removed.
                  </p>
                  <p className="privacy__policy--content__desc">
                    If you edit or publish an article, an additional cookie will
                    be saved in your browser. This cookie includes no personal
                    data and simply indicates the post ID of the article you
                    just edited. It expires after 1 day.
                  </p>
                  <h3 className="privacy__policy--content__subtitle">
                    Embedded content from other websites
                  </h3>
                  <p className="privacy__policy--content__desc">
                    Articles on this site may include embedded content (e.g.
                    videos, images, articles, etc.). Embedded content from other
                    websites behaves in the exact same way as if the visitor has
                    visited the other website.
                  </p>
                  <p className="privacy__policy--content__desc">
                    These websites may collect data about you, use cookies,
                    embed additional third-party tracking, and monitor your
                    interaction with that embedded content, including tracking
                    your interaction with the embedded content if you have an
                    account and are logged in to that website.
                  </p>
                </div>
                <div className="privacy__policy--content section_3">
                  <h2 className="privacy__policy--content__title">
                    How long we retain your data
                  </h2>
                  <p className="privacy__policy--content__desc">
                    If you leave a comment, the comment and its metadata are
                    retained indefinitely. This is so we can recognize and
                    approve any follow-up comments automatically instead of
                    holding them in a moderation queue.
                  </p>
                  <p className="privacy__policy--content__desc">
                    For users that register on our website (if any), we also
                    store the personal information they provide in their user
                    profile. All users can see, edit, or delete their personal
                    information at any time (except they cannot change their
                    username). Website administrators can also see and edit that
                    information.
                  </p>
                </div>
                <div className="privacy__policy--content section_3">
                  <h2 className="privacy__policy--content__title">
                    What rights you have over your data
                  </h2>
                  <p className="privacy__policy--content__desc">
                    If you have an account on this site, or have left comments,
                    you can request to receive an exported file of the personal
                    data we hold about you, including any data you have provided
                    to us. You can also request that we erase any personal data
                    we hold about you. This does not include any data we are
                    obliged to keep for administrative, legal, or security
                    purposes.
                  </p>
                </div>
                <div className="privacy__policy--content section_3">
                  <h2 className="privacy__policy--content__title">
                    Where we send your data
                  </h2>
                  <p className="privacy__policy--content__desc">
                    Visitor comments may be checked through an automated spam
                    detection service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End privacy policy section */}
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

export default PrivacyPolicy;

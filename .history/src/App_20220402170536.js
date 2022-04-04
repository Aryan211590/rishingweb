import "./App.css";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/Error404";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Myaccount from "./components/Myaccount";
import Portfolio from "./components/Portfolio";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ProductDetails from "./components/ProductDetails";
import Shop from "./components/Shop";
import Shopgrid from "./components/Shopgrid";
import Shoplist from "./components/Shoplist";
import Shopgridlist from "./components/Shopgridlist";
import Shoprightsidebar from "./components/Shoprightsidebar";
import ProductVideo from "./components/ProductVideo";
import ProductLeftSidebar from "./components/ProductLeftSidebar";
import ProductGallery from "./components/ProductGallery";
import ProductHorizantal from "./components/ProductHorizantal";
import Contactus from "./components/Contactus";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout"
import Compare from "./components/Compare"

function App() {
  return (
    <div>
      {/*header */}
      <Header></Header>

      {/*routes */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/contact-us">
          <Contactus />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blogdetails">
          <BlogDetails />
        </Route>
        <Route path="/compare">
        <Compare />
      </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/myaccount">
          <Myaccount />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/product-details">
          <ProductDetails />
        </Route>
        <Route path="/product-gallery">
          <ProductGallery />
        </Route>
        <Route path="/product-horizontal">
          <ProductHorizantal />
        </Route>
        <Route path="/product-left-sidebar">
          <ProductLeftSidebar />
        </Route>
        <Route path="/product-video">
          <ProductVideo />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/shop-grid">
          <Shopgrid />
        </Route>
        <Route path="/shoplist">
          <Shoplist />
        </Route>
        <Route path="/shop-grid-list">
          <Shopgridlist />
        </Route>
        <Route path="/shop-right-sidebar">
          <Shoprightsidebar />
        </Route>
        <Route path="/wishlist">
      <Wishlist/>
      </Route>

        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>

      {/*footer */}

      <Footer></Footer>
    </div>
  );
}

export default App;

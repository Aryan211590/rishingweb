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
        <Route path="/cart">
          <Cart />
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
        < />
      </Route>
      <Route path="/product-horizontal">
      < />
    </Route>
    <Route path="/product-left-sidebar">
    < />
  </Route>
    <Route path="/product-video">
    < />
  </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/shopgrid">
          <Shopgrid />
        </Route>
        <Route path="/shoplist">
          <Shoplist />
        </Route>
        <Route path="/shopgridlist">
          <Shopgridlist />
        </Route>
        <Route path="/shoprightsidebar">
          <Shoprightsidebar />
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

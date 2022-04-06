import Footer from "./components/OtherPages/Footer";
// import Home from "./components/Home";
import { Switch, Route} from "react-router-dom";
import About from "./components/OtherPages/About";
import Cart from "./components/Cart/Cart";
import Portfolio from "./components/OtherPages/Portfolio";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Shop from "./components/Shop/Shop";
import Shopgrid from "./components/Shop/Shopgrid";
import Shoplist from "./components/Shop/Shoplist";
import Shopgridlist from "./components/Shop/Shopgridlist";
import Shoprightsidebar from "./components/Shop/Shoprightsidebar";
import ProductDetails from "./components/Product/ProductDetails";
import ProductGallery from "./components/Product/ProductGallery";
import ProductHorizantal from "./components/Product/ProductHorizantal";
import ProductLeftSidebar from "./components/Product/ProductLeftSidebar";
import ProductVideo from "./components/Product/ProductVideo";
import Contactus from "./components/OtherPages/Contactus";
import Home from "./components/OtherPages/Home";
import PrivacyPolicy from "./components/OtherPages/PrivacyPolicy";
import ErrorPage from "./components/OtherPages/Error404";
import Faq from './components/OtherPages/Faq'
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Checkout from "./components/Cart/Checkout";
import Wishlist from "./components/Cart/Wishlist";
import Compare from "./components/Cart/Compare";
import Header from "./components/OtherPages/Header";
import Myaccount from "./components/OtherPages/Myaccount";

function App() {
  return (
    <div>
      {/*header */}
      <Header></Header>

      {/*routes */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route path="/contact-us">
          <Contactus/>
        </Route>
        <Route path="/faq">
          <Faq/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/blogdetails">
          <BlogDetails/>
        </Route>
        <Route path="/compare">
        <Compare/>
      </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
        <Signup/>
      </Route>
        <Route path="/myaccount">
          <Myaccount/>
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy/>
        </Route>
        <Route path="/product-details">
          <ProductDetails/>
        </Route>
        <Route path="/product-gallery">
          <ProductGallery/>
        </Route>
        <Route path="/product-horizontal">
          <ProductHorizantal/>
        </Route>
        <Route path="/product-left-sidebar">
          <ProductLeftSidebar/>
        </Route>
        <Route path="/product-video">
          <ProductVideo/>
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/shop-grid">
          <Shopgrid/>
        </Route>
        <Route path="/shoplist">
          <Shoplist/>
        </Route>
        <Route path="/shop-grid-list">
          <Shopgridlist/>
        </Route>
        <Route path="/shop-right-sidebar">
          <Shoprightsidebar/>
        </Route>
        <Route path="/wishlist">
      <Wishlist/>
      </Route>

        <Route exact path="*">
          <ErrorPage/>
        </Route>
      </Switch>

      {/*footer */}

      <Footer></Footer>
    </div>
  );
}

export default App;

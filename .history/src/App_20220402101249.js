import "./App.css";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/Error404";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Cart from "./components/Cart";

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
        <Route path="/breadcrumb">
          <Breadcrumb />
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/blogdetails'>
          <BlogDetails/>
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path="*">
        <ErrorPage/>
        </Route>
      </Switch>

      {/*footer */}

      <Footer></Footer>
    </div>
  );
}

export default App;

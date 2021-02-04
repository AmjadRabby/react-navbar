import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./Components/Pages/ContactUs";
import Consulting from "./Components/Pages/Consulting";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp";
import Products from "./Components/Pages/Products";
import Services from "./Components/Pages/Services";
import Marketing from "./Components/Pages/Marketing";
import Design from "./Components/Pages/Design";
import Development from "./Components/Pages/Development";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/marketing">
          <Marketing />
        </Route>
        <Route path="/consulting">
          <Consulting />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/development">
          <Development />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

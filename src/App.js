import React, { Component } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Guitars from "./Components/Guitars";
import Pedals from "./Components/Pedals";
import Services from "./Components/Services";
import Support from "./Components/Support";
import NavDrawer from "./Components/Nav_Drawer";
import ShoppingCart from "./Components/ShoppingCart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navOpen: false, cartOpen: false };
  }

  handleNavToggle = () => {
    this.setState((prevState) => {
      return { navOpen: !prevState.navOpen };
    });
  };

  handleCartToggle = () => {
    this.setState((prevState) => {
      return { cartOpen: !prevState.cartOpen };
    });
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <NavDrawer
            show={this.state.navOpen}
            navClickHandler={this.handleNavToggle}
          />
          <Nav
            navShow={this.state.navOpen}
            cartShow={this.state.cartOpen}
            navClickHandler={this.handleNavToggle}
            cartClickHandler={this.handleCartToggle}
          />
          <ShoppingCart show={this.state.cartOpen} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/guitars" exact component={Guitars} />
            <Route path="/pedals" exact component={Pedals} />
            <Route path="/services" exact component={Services} />
            <Route path="/support" exact component={Support} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

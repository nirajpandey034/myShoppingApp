import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CartModal from "./CartModal";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Tooltip from "@material-ui/core/Tooltip";

function Dashboard() {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", margin: "5px" }}>
        <FastfoodIcon />
        <h3>Food Junction</h3>
      </div>
      <Router>
        <div className="site-header-list">
          <div style={{ marginRight: "auto", display: "flex" }}>
            <Link id="header-item" to="/">
              Shop
            </Link>
            <Link id="header-item" to="/aboutMe">
              About Me
            </Link>
            <Link id="header-item" to="/contactMe">
              Get in touch
            </Link>
          </div>
          <Tooltip title="View Cart">
            <ShoppingCartIcon 
              size="small"
              color="primary"
              onClick={() => {
                setCartOpen(true);
              }}
            />
          </Tooltip>
        </div>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/aboutMe" component={AboutUs}></Route>
          <Route path="/contactMe" component={ContactUs}></Route>
        </Switch>
      </Router>
      <CartModal
        isOpen={isCartOpen}
        closeCart={() => {
          setCartOpen(false);
        }}
      />
    </div>
  );
}

export default Dashboard;

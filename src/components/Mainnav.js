import React, { useState } from "react";
import logo from "../images/logo.png";
import "../styles/mainnav.css";

const Mainnav = () => {
  const [show,setShow] = useState(true);
  return (
    <section>
      <div className="container-fluid">
        <div className="container2">
          <div className="nav_bar_body">
            <div className="Nav_Bar_Logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="Nav_bar_links">
              <div className="all_links">
                <a href="/">Home</a>
                <a href="/">Hosting</a>
                <a href="/">Domain</a>
                <a href="/">Pages</a>
                <a href="/">Blogs</a>
                <a href="/">Contact</a>
                <a href="/">Services</a>
              </div>
            </div>
            <div className="Nav_bar_cart">
              <span>
                <i className="fas fa-cart-arrow-down"></i>
              </span>
            </div>
            <div className="navbar_toggle">
              <span>
                <i className="fa-solid fa-bars" onClick={()=>setShow(!show)}></i>
              </span>
            </div>
          </div>
        </div>
        <div className="mobileMenu" style={{display: show ? "none":"block"}}>
          <div className="Nav_bar_links2">
            <div className="all_links2">
              <a href="/">Home</a>
              <a href="/">Hosting</a>
              <a href="/">Domain</a>
              <a href="/">Pages</a>
              <a href="/">Blogs</a>
              <a href="/">Contact</a>
              <a href="/">Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainnav;

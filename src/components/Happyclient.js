import React from "react";
import '../styles/happyclients.css';

const Happyclient = () => {
  return (
    <section>
      <div className="container-fluid mainClient py-5">
        <div className="container">
          <div className="row">
            <div className="clientCards col-12 col-md-3">
              <div className="clientCard">
                <h4>Registered Domain</h4>
                <h3>15638</h3>
              </div>
            </div>
            <div className="clientCards col-12 col-md-3">
              <div className="clientCard">
                <h4>Happy Clients</h4>
                <h3>158</h3>
              </div>
            </div>
            <div className="clientCards col-12 col-md-3">
              <div className="clientCard">
                <h4>Project Done</h4>
                <h3>5638</h3>
              </div>
            </div>
            <div className="clientCards col-12 col-md-3">
              <div className="clientCard">
                <h4>Award Won</h4>
                <h3>198</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happyclient;

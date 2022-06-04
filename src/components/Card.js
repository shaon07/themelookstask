import React from "react";
import "../styles/Card.css";

const Card = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="mainCard col-12 col-md-3">
            <div className="cardIcon">
              {" "}
              <span>
                <i className="fas fa-database"></i>
              </span>
            </div>
            <div className="cardText">
              <h3>Shared Hosting</h3>
              <p>
                Shared Hosting Shared Hosting Lorem ipsum dolor Lorem ipsum
                dolor
              </p>
              <a href="/">Learn More <span><i className="fas fa-arrow-right"></i></span></a>
            </div>
          </div>
          <div className="mainCard col-12 col-md-3">
            <div className="cardIcon">
              {" "}
              <span>
                <i className="fas fa-database"></i>
              </span>
            </div>
            <div className="cardText">
              <h3>Reseller Hosting</h3>
              <p>
                Shared Hosting Shared Hosting Lorem ipsum dolor Lorem ipsum
                dolor
              </p>
            </div>
          </div>
          <div className="mainCard col-12 col-md-3">
            <div className="cardIcon">
              {" "}
              <span>
                <i className="fas fa-database"></i>
              </span>
            </div>
            <div className="cardText">
              <h3>Cloud Hosting</h3>
              <p>
                Shared Hosting Shared Hosting Lorem ipsum dolor Lorem ipsum
                dolor
              </p>
            </div>
          </div>
          <div className="mainCard col-12 col-md-3">
            <div className="cardIcon">
              {" "}
              <span>
                <i className="fas fa-database"></i>
              </span>
            </div>
            <div className="cardText">
              <h3>Dedicated Hosting</h3>
              <p>
                Shared Hosting Shared Hosting Lorem ipsum dolor Lorem ipsum
                dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

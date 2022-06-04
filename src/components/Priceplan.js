import React from "react";
import '../styles/priceplan.css';

const Priceplan = () => {
  return (
    <section>
      <div className="container-fluid mainPlan py-5">
        <div className="container">
          <div className="findDomain">
            <h5>Choose Your Best Packages</h5>
            <h2>Pricing Plan</h2>
          </div>
          <div className="row">
            <div className="planCards col-12 col-md-4">
                <div className="planCard">
                    <h2>Shared Hosting</h2>
                    <p>Starting At</p>
                    <h4>$15.99/m</h4>
                </div>
                <div className="planText">
                   <div className="mainPlanCard"> <span><i className="fas fa-server"></i></span></div>
                    <div className="mainPlanText">
                    <p><span><i className="fas fa-times"></i>Instalation Charge</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    </div>
                </div>
            </div>
            <div className="planCards col-12 col-md-4">
                <div className="planCard" style={{background:"#119de5"}}>
                    <h2>Shared Hosting</h2>
                    <p>Starting At</p>
                    <h4>$15.99/m</h4>
                </div>
                <div className="planText">
                   <div className="mainPlanCard"> <span><i className="fas fa-server"></i></span></div>
                    <div className="mainPlanText">
                    <p><span><i className="fas fa-times"></i>Instalation Charge</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    </div>
                </div>
            </div>
            <div className="planCards col-12 col-md-4">
                <div className="planCard">
                    <h2>Shared Hosting</h2>
                    <p>Starting At</p>
                    <h4>$15.99/m</h4>
                </div>
                <div className="planText">
                   <div className="mainPlanCard"> <span><i className="fas fa-server"></i></span></div>
                    <div className="mainPlanText">
                    <p><span><i className="fas fa-times"></i>Instalation Charge</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    <p><span><i className="far fa-check-square"></i>2GB DDR3 Ram</span></p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priceplan;

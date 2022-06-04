import React from "react";
import "../styles/whychoose.css";

const Whychoose = () => {
  return (
    <section>
      <div className="container-fluid py-5 text-center">
        <div className="container packageText">
          <h6>Reason Of Choose Us</h6>
          <h2>Why Choose Us</h2>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="chooseLeftBox col-12 col-md-5">
              <div className="chooseLeftBoxText h-100">
                <span>
                  <i className="fa-solid fa-lock"></i>
                </span>
                <h6>100 % Secure</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quibusdam aut reprehenderit modi voluptatem dolorum fugiat ex!
                  Animi molestias quidem perferendis!
                </p>
              </div>
            </div>
            <div className="chooseRightBox d-flex col-12 col-md-7">
              <div className="row justify-content-evenly">
                <div className="chooseRightBoxText col-12 col-md-5 my-2">
                  <span>
                  <i className="fa-solid fa-rocket"></i>
                  </span>
                  <h6>Auto Update</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam aut reprehenderit modi voluptatem dolorum fugiat
                    ex! Animi molestias quidem perferendis!
                  </p>
                </div>
                <div className="chooseRightBoxText col-12 col-md-6 my-2">
                  <span>
                  <i className="fa-solid fa-person"></i>
                  </span>
                  <h6>Account Isolation</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam aut reprehenderit modi voluptatem dolorum fugiat
                    ex! Animi molestias quidem perferendis!
                  </p>
                </div>
                <div className="chooseRightBoxText col-12 col-md-6 my-2">
                  <span>
                  <i className="fa-solid fa-headphones-simple"></i>
                  </span>
                  <h6>24/7/365 Tech Support</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam aut reprehenderit modi voluptatem dolorum fugiat
                    ex! Animi molestias quidem perferendis!
                  </p>
                </div>
                <div className="chooseRightBoxText col-12 col-md-5 my-2">
                  <span>
                  <i className="fa-solid fa-gears"></i>
                  </span>
                  <h6>Easy To Customize</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam aut reprehenderit modi voluptatem dolorum fugiat
                    ex! Animi molestias quidem perferendis!
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;

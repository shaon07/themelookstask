import React from "react";
import heroimg from '../images/hero.png';
import '../styles/hero.css';

const Herosec = () => {
  return (
    <section>
      <div className="container-fluid py-5">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="hero_sec_text col-12 col-md-8">
              <div className="hero_text">
                <h2>Build Your Dream Website With OMRhost</h2>
                <p className="w-100 col-md-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis laborum iste praesentium distinctio obcaecati
                  cumque quod totam libero eveniet dolore.
                </p>
                <button className="hero_button">Learn More <span><i className="far fa-arrow-alt-circle-right"></i></span></button>
              </div>
            </div>
            <div className="hero_sec_image col-12 col-md-4 my-5 my-md-0">
                <div className="her-img">
                    <img src={heroimg} className="img-fluid" alt="heroimage" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosec;

import React from "react";
import '../styles/domainfeature.css';

const Domainfeature = () => {
    const domainFeatur = [
        {
            icon:"fas fa-wrench",
            title:"Domain DNS Management"
        },
        {
            icon:"fas fa-robot",
            title:"Autometed Control Panel"
        },
        {
            icon:"fas fa-envelope",
            title:"24/7 Virtual Support"
        },
        {
            icon:"fas fa-lock",
            title:"Domain Locking System"
        },
        {
            icon:"fas fa-tag",
            title:"Reliese IPS Tags"
        },
        {
            icon:"fas fa-search",
            title:"Whoise Management"
        }
    ]
  return (
    <section>
      <div className="container-fluid py-5">
        <div className="container ">
          <div className="findDomain">
            <h5>Find Your Domain Name</h5>
            <h2>Domain Features</h2>
          </div>
          <div className="row">
            {
                domainFeatur.map(item=>{
                    return (
                        <div className="domainFeaturesCards col-12 col-md-4 my-3">
              <div className="featureCard">
                <span>
                  <i className={item.icon}></i>
                </span>
                <h5>{item.title}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  maxime labore quaerat quia optio quos, nobis ipsa vitae?
                  Dolorum reprehenderit inventore, a repellendus blanditiis
                  illum similique? Porro aliquam excepturi voluptate?
                </p>
              </div>
            </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domainfeature;

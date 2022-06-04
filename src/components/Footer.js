import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <section>
      <div className="container-fluid mainFooter py-5">
          <div className="container">
              <div className="row">
                  <div className='footer_Card col-12 col-md-3 my-3'>
                    <div className='footer_card_text'>
                        <img src={require("../images/logo.png")} className="pb-5" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati impedit ratione laborum veniam dolorum eius recusandae molestias nemo vitae. Commodi!</p>
                        <a href="/">Learn More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                        <div className='footer_brand_logo'>
                            <p>Follow us</p>
                            <span><i className="fa-brands fa-facebook"></i></span>
                            <span><i className="fa-brands fa-twitter"></i></span>
                            <span><i className="fa-brands fa-instagram"></i></span>
                            <span><i className="fa-brands fa-youtube"></i></span>
                            <span><i className="fa-brands fa-linkedin"></i></span>
                        </div>
                    </div>
                  </div>

                  <div className='footer_Card col-12 col-md-3 my-3'>
                    <div className='footer_card_text'>
                        <h4>Usifull Links</h4>
                        <div>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Terms of Conditions of this Company</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Knowledge Base</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Live Chat/Support</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Transfer Your Domain Name</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Traffic Booster</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Website Builder With Your Great Team</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Data Center</h6>
                        </div>
                    </div>
                  </div>
                  <div className='footer_Card col-12 col-md-3 my-3'>
                    <div className='footer_card_text'>
                        <h4>Services</h4>
                        <div>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Terms of Conditions of this Company</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Knowledge Base</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Live Chat/Support</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Transfer Your Domain Name</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Traffic Booster</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Website Builder With Your Great Team</h6>
                            <h6><span><i class="fa-solid fa-angles-right"></i></span>Data Center</h6>
                        </div>
                    </div>
                  </div>
                  <div className='footer_Card col-12 col-md-3 my-3'>
                    <div className='footer_card_text'>
                        <h4>E-mail Newsletter</h4>
                        <div>
                            <p>Subscribe to get Exclusive offer & updates in your E-maill</p>
                        </div>
                        <div className='footerInput'>
                            <input type="text" placeholder='Enter Your Email'/>
                            <a href="/">subscribe</a>
                        </div>
                        <p className='pt-3'>We Accept</p>
                        <div className='footer_card_logos'>
                            <span><i class="fa-brands fa-cc-visa"></i></span>
                            <span><i className="fa-brands fa-cc-mastercard"></i></span>
                            <span><i class="fa-brands fa-cc-discover"></i></span>
                            <span><i class="fa-brands fa-cc-amex"></i></span>
                            <span><i class="fa-brands fa-cc-paypal"></i></span>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Footer

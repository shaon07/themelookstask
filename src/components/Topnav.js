import React from 'react'
import '../styles/topnav.css'

const Topnav = () => {
  return (
    <section>
      <div className='container-fluid bg-dark text-white'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center topnav'>
                <div className='top_nav_left'>
                    <span>Follow Us</span>
                    <span><i className='fab fa-facebook navbar_brand' style={{color:"white"}}></i></span>
                    <span><i className='fab fa-twitter navbar_brand' style={{color:"white"}}></i></span>
                    <span><i className='fab fa-youtube navbar_brand' style={{color:"white"}}></i></span>
                    <span><i className='fab fa-github navbar_brand' style={{color:"white"}}></i></span>
                    <span><i className='fab fa-instagram navbar_brand' style={{color:"white"}}></i></span>
                </div>
                <div className='top_nav_right d-flex align-items-center'>
                    <h6><span><i className='fas fa-phone-volume'></i></span>01840962278</h6>
                    <h6><span><i className='fas fa-envelope-open'></i></span>alishaon078@gmail.com</h6>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Topnav

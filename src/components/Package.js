import React, { useState } from 'react';
import '../styles/package.css';

const Package = () => {
    const [count,setCount] = useState(0)
  return (
    <section className='pb-5 package-bg'>
      <div className='container-fluid py-5 mainPackage'>
        <div className="container text-center packageText">
            <h6>Choose Your Best Package</h6>
            <h2>What More We Offer</h2>
            <div className='d-flex packageIcon'>
               <span><i className={`fa-solid fa-paintbrush ${count === 0 ? "border-bottom":null}`} onClick={()=>setCount(0)}></i></span>
               <span><i className={`fa-solid fa-code ${count === 1 ? "border-bottom":null}`} onClick={()=>setCount(1)}></i></span>
               <span><i className={`fa-solid fa-chart-line ${count === 2 ? "border-bottom":null}`}onClick={()=>setCount(2)}></i></span>
               <span><i className={`fa-brands fa-android ${count === 3 ? "border-bottom":null}`} onClick={()=>setCount(3)}></i></span>
               <span><i className={`fa-solid fa-chart-area ${count === 4 ? "border-bottom":null}`}onClick={()=>setCount(4)}></i></span>
            </div>
        </div>
      </div>
      <div className='container py-5 bg-white'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-12 col-md-6 my-3'>
                    <div className='packageText'>
                        <h4>Graphic Design</h4>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque sint maiores itaque, aut recusandae?</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga illum reiciendis est debitis voluptates, dicta sunt aut inventore voluptatum, laboriosam natus dolore consequuntur repellat, nesciunt at magni iure corrupti!</p>
                        <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, sapiente?</h6>
                        <a href="/">Learn More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                    </div>
                </div>
                <div className='col-12 col-md-6 my-3'>
                    <div className='package_image text-center'>
                        <img src={require('../images/package.png')} alt="package" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Package

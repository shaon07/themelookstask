import React from 'react';
import '../styles/Finddomain.css';

const Finddomain = () => {
  return (
    <section>
      <div className='container-fluid mainFindDomain py-5'>
        <div className='container py-4'>
            <div className='row mx-auto'>
                <div className='findDomain'>
                    <h5>Domain Search Here</h5>
                    <h2>Find Your Domain Name</h2>
                    <div className='domainPrice'>
                        <div className='domainPriceList'>
                            <h5>.COM</h5>
                            <h6>$2.99/<span>Year</span></h6>
                        </div>
                        <div className='domainPriceList'>
                            <h5>.NET</h5>
                            <h6>$2.99/<span>Year</span></h6>
                        </div>
                        <div className='domainPriceList'>
                            <h5>.TV</h5>
                            <h6>$2.99/<span>Year</span></h6>
                        </div>
                        <div className='domainPriceList'>
                            <h5>.ORG</h5>
                            <h6>$2.99/<span>Year</span></h6>
                        </div>
                        <div className='domainPriceList'>
                            <h5>.LIVE</h5>
                            <h6>$2.99/<span>Year</span></h6>
                        </div>
                    </div>
                </div>
                <div className='domainInputBox text-center mt-4'>
                    <div className='domainInputBoxCard'>
                        <input type="text" name="" placeholder='Enter Your Domain Name Here' />
                        <select name=".com" id="">
                            <option value=".com">.com</option>
                            <option value=".net">.net</option>
                            <option value=".org">.org</option>
                            <option value=".live">.live</option>
                            <option value=".tv">.tv</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Finddomain

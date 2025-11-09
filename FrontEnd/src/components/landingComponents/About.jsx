import React from 'react'
import Typewriter from 'typewriter-effect'
import NavBar from './NavBar'
const About = () => {
  return (
    <><NavBar />
      <div className='row'>
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            <div >
            <h1 className='text-center'>
              <b className="typewriter"> 
                <Typewriter
                  options={{
                    strings: ['About Home Hub'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              </h1>
        <h2 className='text-center'>Welcome to Home Hub Where Your Dream Home Begins.</h2>
<p>At Home Hub, we believe finding the perfect home should be exciting, effortless, and empowering. As one of the most trusted names in real estate, we specialize in connecting people with homes, villas, farmhouses, and commercial spaces that suit their lifestyle and goals.</p>
<p>With a deep understanding of the local market and a passion for helping people, our team offers expert guidance every step of the way—from browsing to closing. Whether you're buying, selling, or investing, Home Hub is your reliable partner in making smart property decisions.
</p>
<p>We combine modern technology with personalized service to give you the best experience possible. From virtual tours to on-site visits, transparent pricing to legal support, we make sure your journey to property ownership is smooth and secure.
</p>

<h2>Why Choose Home Hub?</h2>
<div>✅ Extensive Property Listings</div>
<div>✅ Experienced Agents & Local Experts</div>
<div>✅ Trusted by Thousands of Happy Clients</div>
<div>✅ Seamless Buying & Selling Process</div>
<div>✅ Honest Advice and Market Insights</div>
<p>Your home is more than just a place—it's a feeling. Let Home Hub help you find the one that feels right.</p>
      </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    
      
    </>
  )
}

export default About

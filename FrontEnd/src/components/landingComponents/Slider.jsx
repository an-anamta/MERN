import React from 'react'
import { FaHome } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
const Slider = () => {
   Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  return (
    <>
      <div className="row bg py-5" data-aos="zoom-out" style={{ minHeight: "400px" }}>
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              <p className="fs-5 fw-bold">
                <FaHome className="me-2 ic" />
                Real Estate Agency
              </p>
              <b className="typewriter"> 
                <Typewriter
                  options={{
                    strings: ['Elevated Living Starts Here'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              <p className='mt-3'>
                Welcome to Home Hub, where elegance meets innovation. We specialize in curating exceptional homes that reflect modern sophistication, timeless design, and refined comfort.Whether you're searching for a contemporary penthouse, a serene villa, or a smart luxury apartment, Home Hub offers a portfolio of elite properties tailored to your lifestyle. <br />
                <b>✨Architectural Excellence</b> <br />
                <b>🔐 Private, Secure, and Smart-Enabled Homes </b> <br />
                <b>🌆 Prime Urban & Scenic Locations</b> <br />
                <b>🤝 White-Glove Service from Start to Finish</b>
              </p>
              <button className="btn btn1">Make An Enquiry</button>
            </div>

            {/* Image Content */}
            <div className="col-sm-6  text-center">
              <img
                src="/img/21_1.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
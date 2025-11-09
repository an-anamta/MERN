import Typewriter from 'typewriter-effect'
import React from "react";

import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
const Services = () => {
  const location = useLocation();

  return (
    <>
      {location?.pathname != "/" && <NavBar />}
      <div className="row py-5 bg servicesh">
        <div className="text-center ">
          <div className="tagline ">Our Services </div>
          <h2 className="section-title">
            <b className="typewriter"> 
                <Typewriter
                  options={{
                    strings: ['Our Main Focus'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
            </h2>
        </div>
        <div className="col-sm-10 card1 mx-auto">
          <div className="row py-3">
            <div data-aos="fade-right" className="col-sm-4">
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/home.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2"><b>Buy a home</b></h3>
                <p className="text-center">Buying a home is more than just a transaction—it’s a step toward your future. At Home Hub, we help you discover spaces that match your lifestyle, budget, and dreams. Whether it’s your first home, a family upgrade, or a peaceful retirement retreat, we’re here to guide you every step of the way.With Home Hub,you find a place where life happens.<br />
                  <b>Start your journey today—because your dream home is waiting.
                  </b>

                </p>
                <p className="text-center text-success py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

              </div>
            </div>
            <div data-aos="zoom-in-up" className="col-sm-4">
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/22.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2"><b>Rent a home</b></h3>
                <p className="text-center">Looking for a place to call home without the long-term commitment of buying? At Home Hub, we make renting easy, flexible, and stress-free. Whether you're moving for work, study, or just a change of scenery, we have a wide range of verified rental properties to suit your needs and budget.From cozy apartments to spacious family homes. <br />
                  <b>Move in with ease. Live with comfort. Rent smart with Home Hub.
                  </b>



                </p>
                <p className="text-center text-success py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

              </div>
            </div>
            <div data-aos="fade-left" className="col-sm-4 ">
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/23.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2"><b>Sell a home</b></h3>
                <p className="text-center">Ready to sell your property? Let Home Hub make the process smooth, fast, and rewarding. With expert market knowledge and a trusted network of buyers, we help you get the best value for your home—without the stress.From listing to closing, our experienced team handles everything with transparency and care—so you can focus on what comes next. <br />
                  <b>Get the price you deserve. Sell smarter with Home Hub.</b>
                </p>
                <p className="text-center text-success py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;

import React from 'react'

const Testimonial = () => {
  return (
   
      <>

<div className="row py-5 background ">
  <div className="text-center ">
      <div className="tagline ">Our Testimonial</div>
      <h2 className="section-title">Clients Feedback</h2>
    </div>
     <div className="col-sm-10 mx-auto ">
        <div className="row py-3">
           <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>"Home Hub made buying our dream villa effortless. Their team was professional, patient, and truly understood our needs. From property tours to paperwork, everything was seamless. Highly recommended for luxury buyers!"</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/img/1.jpg_1.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>—Aman Singh</b><br/>
                    <p className='color1 fw-bold'>NEW DELHI</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>"Renting through Home Hub was a breeze. I found a fully furnished apartment in a prime location within days. The agents were responsive, transparent, and respectful of my budget. Loved the smooth experience!"</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/img/2.jpg_1.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>David Hanston</b><br/>
                    <p className='color1'>Bengaluru </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>"We sold our home through Home Hub and got an excellent deal. Their marketing, staging tips, and client reach were top-notch. What impressed us most was their honesty and constant communication throughout the process."</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='/img/3.jpg_2.jpeg' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Mr.K.F Siddqui</b><br/>
                    <p className='color1'> LUCKNOW</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
 
  



    </>

  )
}

export default Testimonial

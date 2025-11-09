import React, { useEffect, useState } from 'react'
import { IoBedOutline } from "react-icons/io5";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';
import Aos from 'aos';
import Typewriter from 'typewriter-effect'
const Property = () => {
  const [listData, setListData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/property-list');
    if (response?.data?.code == 200) {
      setListData(response?.data?.data)
    }

  }
  const location = useLocation();
  const Navigate = useNavigate();
  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (!userData?._id) {
      Navigate('/login')
      return
    }
    const response = await axios.post('http://localhost:9000/api/buy', { userId: userData?._id, propertyId });
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'success'
      })
    } else {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'error'
      })
    }
  }
  return (
    <>
      {location?.pathname != "/" && <NavBar />}
      <div className='row property py-5' data-aos="zoom-out-up">
        <div className="text-center ">
          <div className="tagline ">
             <b className="typewriter"> PROPERTIES
              </b>
             </div>
          <h2 className="section-title">
             <b className="typewriter"> 
                <Typewriter
                  options={{
                    strings: ['Featured Listings'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
            </h2>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row py-4 px-3 '>
            {listData?.map((item, index) => {
              return (<>
                <div className='col-sm-3  px-2 mb-2' >
                  <div className="card  mx-auto shadow-lg border border-0">
                    <img src={`http://localhost:9000/img/${item?.pic}`} className="card-img-top img-fluid featuredimg" alt="..." />
                    <div className="card-body py-2">
                      <p className='mycolor1'><b>${item?.price}</b>/Month</p>
                      <h5 className="card-title"><b className='mycolor2'>{item?.title}</b></h5>
                      <p className="card-text featuredp mb-3 ">{item?.description}</p>
                        <div className=' featureddiv featuredp'>
                        <p className='m-0 ps-2 mb-2'>{item?.area}<IoBedOutline />Bedroom</p>
                      <button onClick={() => handleBuy(item?._id)} className='btn mx-5'>BUY</button>
                        </div>
                        
                      </div>
                    </div>
                </div>
              </>)
            })}
            {listData?.length == 0 && <h1 className='text-center'>No Record Found</h1>}
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </>
  )
}

export default Property

import React, { useState, useEffect } from 'react'

import { FaBars, FaPhone, FaPenAlt } from 'react-icons/fa'

import { useLocation } from 'react-router-dom';

const Navbar = ( { show, setShow } ) => {
 

  const location = useLocation();
  const [locationPath, setLocationPath] = useState("/")
  useEffect(() => {
 
    setLocationPath(location.pathname)
  }, [location])
  return (
      <> 
        <nav className="relative transition-all ease-in-out duration-700 z-[102] h-[80px] w-[100%] fixed flex flex-wrap items-center text-base justify-center px-0 py-5 text-white bg-white shadow-lg ">
          <div className="mobile-navbar-container flex justify-center fixed sm:relative md:flex items-center justify-between px-[24px] z-[1] w-full max-w-[1100px] bg-white py-5 sm:py-0 shadow-lg sm:shadow-none ">

            <a href="/" className="mobile-navbar-logo flex text-black gap-x-[5px] justify-self-start pb-[5px] cursor-pointer text-xl items-center font-bold text-[26px] hover:text-button-color-hover" alt="black pen icon">JN Notary <span className="text-[26px] mb-[20px]"><FaPenAlt /></span></a>

            {/* Mobile Desktop Navmenu*/}


            <div className="flex pr-[10px] lg:hidden">
              <button onClick={() => window.open('tel:6265665705', '_self')} 
              className="space-x-2 rounded-[10px] font-semibold text-[16px] text-white outline-hidden flex items-center cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap px-[22px] py-[10px] text-shadow hover:bg-button-color-hover hover:text-yellow-400 ">
               
                  <span className="text-white">Call Now</span>
                  <FaPhone className=""/>
             
              
              
              </button>
            </div>
            {
              locationPath === '/' || locationPath === '/about' || locationPath === '/fees' ?  
                <div className="mobile-navbar-hamburger text-black flex items-center text-[1.8rem] pt-[4px] cursor-pointer  hover:text-button-color-hover lg:hidden">
                
                    <FaBars alt="menu icon" onClick={() => setShow(!show)}/>
                
                </div> :
                ""
            }


            {/* Desktop Navmenu */}
        
              {
                /* 
                anchor tags scroll down without using Link from ReactDOM => 
                https://stackoverflow.com/questions/46180291/click-link-to-scroll-to-specific-section-react-js/65360455#65360455
              */}

              {
                locationPath === '/' ?
              <ul className="hidden lg:flex items-center list-none text-center mr-[-22px]">
                <li className="">
                  <a href="/about"  className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">About</a>
                </li>
                <li className="">
                  <a href="#process" className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">Process</a>
                </li>
                <li className="">
                  <a href="#services"  className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">Services</a>
                </li>
                <li className="">
                  <a href="/fees"  className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">Quote</a>
                </li>

                <li className="">
                  <a href="#contact" className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">Contact</a>
                </li>
              </ul> :
              ""
              }
       
              
            


            <div className="hidden lg:flex flex-row space-between items-center list-none text-center mr-[0px]">
              
              <button onClick={() => window.open('tel:6265665705', '_self')} 
              className="space-x-2 rounded-[10px] font-semibold text-[16px] text-white outline-hidden flex items-center cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap px-[22px] py-[10px] text-shadow hover:bg-button-color-hover hover:text-yellow-400 ">
     
  

                  <span className="text-white">
                    (626)-566-5705

                  </span>
     
                  <FaPhone alt="phone icon" className=""/>


             
              
              
              </button>
            </div>
          </div>                                                                                                     
          


        </nav>
      
      </>
  )
    
  
}

export default Navbar

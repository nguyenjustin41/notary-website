import React from 'react'

import { FaBars, FaPhone, FaPenAlt } from 'react-icons/fa'


const Navbar = ( { show, setShow } ) => {
 



  return (
      <> 
        <nav className="relative transition-all ease-in-out duration-700 z-[102] h-[80px] top-0 sticky flex flex-wrap items-center text-base justify-center px-5 py-5 text-white bg-white shadow-lg ">
          <div className="mobile-navbar-container flex justify-center md:flex justify-between px-[24px] h-[100%] z-[1] w-full max-w-[1100px]">

            <a href="/" className="mobile-navbar-logo flex text-black gap-x-[5px] justify-self-start pb-[5px] cursor-pointer text-xl items-center font-bold text-[26px]" alt="black pen icon">... <FaPenAlt className=" text-[20px]"/></a>

            {/* Mobile Navmenu*/}


            <div className="flex pr-[10px] md:hidden">
              <button onClick={() => window.open('tel:6265665705', '_self')} 
              className="space-x-2 rounded-[50px] font-semibold text-[16px] text-white outline-hidden flex items-center cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap px-[22px] py-[10px] text-shadow hover:bg-button-color-hover hover:text-yellow-400 ">
               
                  <span className="text-white">Call Now</span>
                  <FaPhone className=""/>
             
              
              
              </button>
            </div>

            <div className="mobile-navbar-hamburger text-black flex text-[1.8rem] pt-[4px] cursor-pointer  hover:text-[#a0a0a0] md:hidden">
            
                <FaBars alt="menu icon" onClick={() => setShow(!show)}/>
            
            </div>


            {/* Desktop Navmenu */}
        
            <ul className="hidden md:flex items-center list-none text-center mr-[-22px]">
              {
              /* 
              anchor tags scroll down without using Link from ReactDOM => 
              https://stackoverflow.com/questions/46180291/click-link-to-scroll-to-specific-section-react-js/65360455#65360455
              */}
              <li className="">
                <a href="#process" onClick={() => window.location.replace("/#about")} className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-[#01bf71] transition ease-in-out duration-200">Process</a>
              </li>
              <li className="">
                <a href="#services" onClick={() => window.location.replace("/#services")} className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-[#01bf71] transition ease-in-out duration-200">Services</a>
              </li>
              <li className="">
                <a href="#reviews" className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-[#01bf71] transition ease-in-out duration-200">Reviews</a>
              </li>
              <li className="">
                <a href="#contact" className="text-black text-[20px] flex items-center px-6 cursor-pointer hover:text-[#01bf71] transition ease-in-out duration-200">Contact</a>
              </li>
       
              
            </ul>


            <div className="hidden md:flex flex-row space-between items-center list-none text-center mr-[-22px]">
              <button onClick={() => window.open('tel:6265665705', '_self')} 
              className="space-x-2 rounded-[50px] font-semibold text-[16px] text-white outline-hidden flex items-center cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap px-[22px] py-[10px] text-shadow hover:bg-button-color-hover hover:text-yellow-400 ">
               
                  <span className="text-white">Call Now</span>
                  <FaPhone alt="phone icon" className=""/>
             
              
              
              </button>
            </div>
          </div>
          


        </nav>
      
      </>
  )
    
  
}

export default Navbar

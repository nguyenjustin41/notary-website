import React from 'react';
import { FaCheck, FaHome, FaMoneyCheckAlt,FaFileSignature, FaExchangeAlt } from 'react-icons/fa'

const Services = () => {
  return (

      <div id="services" className="services-height flex flex-col relative items-center bg-grey-color h-[100%] py-[5%]">

          <div className="services-waves">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
              </svg>
          </div>
          <div className="flex flex-row justify-center">
            <h1 className="mobile-header -tracking-[0.64px] text-[64px] leading-[52px] font-bold text-black mb-[25%]">Services</h1>
          

          </div>

          <div id="services-section" className="flex flex-row-reverse w-[100%] h-[100%] px-[10%] gap-x-[3rem] justify-center items-center ">
            
          {/* Types of Signing Card */}
            <div className="mobile-service-card flex flex-col gap-y-[2rem] items-center bg-[#ffffff] h-[100%] w-[100%] rounded-2xl shadow-lg ">
              
             
                  <div className="justify-start mt-[3%]">
                      <h1 className="mobile-header-text text-[40px] font-bold text-[#363f41]">Mortgage Packages</h1>

                  </div>

                  <div className="flex flex-col justify-center gap-y-[2rem] mb-[30px] -tracking-[0.64px] w-[75%] ">
                    <div className="flex flex-row justify-center  bg-[#74c947] text-white rounded-2xl p-[30px] shadow-lg ">
                      <FaHome className="mobile-icon-type text-yellow-400 items-center text-[3rem] "/>
                      <h2 className="mobile-text text-[32px] ml-[1rem] text-shadow ">Home Purchase</h2>
                    </div>
                    <div className="flex flex-row justify-center bg-[#74c947] text-white rounded-2xl p-[30px] shadow-lg">
                      <FaExchangeAlt className="mobile-icon-type text-yellow-400 items-center text-[3rem]" />
                      <h2 className="mobile-text text-[32px] ml-[1rem] text-shadow ">Mortgage Refinance</h2>
                    </div>
                    <div className="flex flex-row justify-center bg-[#74c947] text-white rounded-2xl p-[30px]  shadow-lg">
                      <FaFileSignature className="mobile-icon-type text-yellow-400 items-center text-[3rem]" />
                      <h2 className="mobile-text text-[32px] ml-[1rem] text-shadow ">Seller's Package</h2>
                    </div>
                    <div className="flex flex-row justify-center bg-[#74c947] text-white rounded-2xl p-[30px] shadow-lg">
                      <FaMoneyCheckAlt className="mobile-icon-type text-yellow-400 items-center text-[3rem]" />
                      <h2 className="mobile-text text-[32px] ml-[1rem] text-shadow ">Home Equity Loan</h2>
                    </div>
                  </div>
                </div>

      

            
            {/* What we provide card */}
              <div className="mobile-service-card flex flex-col gap-y-[2rem] items-center bg-[#ffffff] w-[100%] h-[100%]  rounded-2xl shadow-lg">
                
                <div className="justify-start mt-[3%]">
                    <h1 className="mobile-header-text text-[40px] font-bold text-[#363f41] ">Includes</h1>

                </div>

                <div className="flex flex-col justify-center gap-y-[2rem] mb-[30px] -tracking-[0.64px] w-[75%]">
                  <div className="flex flex-row justify-center bg-[#ffffff] border-b-2 text-[#363f41] p-[30px]">
                    <FaCheck className="mobile-icon text-yellow-400 items-center text-[3rem]" />
                    <h2 className="mobile-text text-[32px] font-semibold ml-[1rem] text-shadow">Same Day Scheduling</h2>
                  </div>

                  <div className="flex flex-row justify-center bg-[#ffffff] border-b-2 text-[#363f41] p-[30px]">
                    <FaCheck className="mobile-icon text-yellow-400 items-center text-[3rem]" />
                    <h2 className="mobile-text text-[32px] font-semibold ml-[1rem] text-shadow">Legal/Letter Printing</h2>
                  </div>
                  <div className="flex flex-row justify-center bg-[#ffffff] border-b-2 text-[#363f41] p-[30px]">
                    <FaCheck className="mobile-icon text-yellow-400 items-center text-[3rem]" />
                    <h2 className="mobile-text text-[32px] font-semibold ml-[1rem] text-shadow">Delivery Before Cutoff</h2>
                  </div>
                  <div className="flex flex-row justify-center bg-[#ffffff] border-b-2 text-[#363f41] p-[30px]">
                    <FaCheck className="mobile-icon text-yellow-400 items-center text-[3rem]" />
                    <h2 className="mobile-text text-[32px] font-semibold ml-[1rem] text-shadow">Document Scanbacks</h2>
                  </div>

         

                </div>

              </div>
           
            
          </div>
    
      </div>
  )
};

export default Services;
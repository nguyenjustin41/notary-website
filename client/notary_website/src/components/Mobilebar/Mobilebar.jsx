import React from 'react';
import { FaTimes } from 'react-icons/fa'

const Mobilebar = ({setShow, show}) => {


    return (
            <aside className={show ? 'top-0 fixed z-[1000]  w-full h-full grid items-center top-0 left-0 transition-all ease-in duration-[200ms] bg-[#e5ecee]' 
            : '-top-full fixed w-full h-full z-[1000] grid items-center left-0 transition-all ease-in-out duration-[200ms] bg-[#e5ecee]'  }>    
                <div className="absolute top-[1.2rem] right-[1.5rem] bg-transparent cursor-pointer text-[2rem] outline-hidden" onClick={() => setShow(!show)}>
                
                    <FaTimes className="text-[#363f41] hover:text-button-color-hover"/>
                </div>
                <div className="text-[#363f41] gap-y-12 flex flex-col items-center justify-center text-[40px] transition-all ease-in-out duration-200 sm:gap-y-2">

                <a href="/" onClick={() => setShow(!show)} className="font-light  cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">Home</a>
                <a href="/about" onClick={() => setShow(!show)} className="font-light  cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">About</a>
                <a href="/fees" onClick={() => setShow(!show)} className="font-light  cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">Quote</a>
                
                <a href="/#contact" onClick={() => setShow(!show)} className="font-light cursor-pointer hover:text-button-color-hover transition ease-in-out duration-200">Contact</a>
                {/* <a href="#contact" onClick={() => setShow(!show)} className="text-white font-normal whitespace-nowrap text-[25px] px-[50px] py-[10px] bg-button-color rounded-[50px] outline-hidden cursor-pointer text-shadow hover:bg-button-color-hover transition ease-in-out duration-200">Contact</a> */}
              
                </div>
            </aside>

    )
};

export default Mobilebar;

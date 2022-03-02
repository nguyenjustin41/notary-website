import React from 'react'

const About = () => {
  return (
      <div className="flex flex-col justify-center items-center pb-[2%] px-[2%] md:px-[5%] xl:px-[10%] h-[100%] w-[100%]">
        <h1 id="about-title" className="mobile-header tracking-[1px] text-[70px] leading-[52px] font-bold text-black text-shadow my-[5%] xl:mb-[3%]">Closing Since 2019</h1>
        {/* Image & Biography */}
        <div className="flex flex-col xl:flex-row justify-center pb-[5%] xl:px-[1%] xl:pb-[0%] items-center bg-gradient-to-b from-[#1B4E80] to-[#f4f4f4] xl:bg-gradient-to-r xl:from-[#1B4E80] xl:to-[#f4f4f4] h-[100%] w-[100%] rounded-t-[50px] xl:rounded-[50px] shadow-lg">
                {/* title on mobile */}
            <div className="bg-[#123456] w-[100%] px-2 py-2 rounded-t-[10px] flex flex-row justify-center items-center xl:hidden">
            
            <h1 className="text-center -tracking-[0.64px] text-[32px] leading-[52px] font-semibold text-white text-shadow xl:hidden">Justin Nguyen <br/> Mobile Notary Public</h1>
            </div>
            <div className="flex flex-row justify-center h-[100%] w-[100%] pb-[1%] px-[1%]">

                <img className="rounded-[0px] outline outline-2 outline-[#123456]  drop-shadow-lg" src="/assets/images/pfp-owner.jpg" alt="pfp"/>
            </div>

            <div className="flex flex-col items-center xl:items-start justify-center h-[100%] w-[100%] px-[2%] pb-[5%] xl:px-[5%] xl:pt-[5%] ">

                {/* title on desktop */}
                <div className="hidden xl:bg-[#123456] xl:w-[100%] xl:px-4 xl:py-4 xl:rounded-[0px] xl:flex xl:flex-row xl:justify-center xl:items-center xl:mb-[5%] ">
                    <h1 className="block text-center -tracking-[0.64px] text-[32px] leading-[52px] font-semibold text-white text-shadow  whitespace-nowrap">Justin Nguyen | Mobile Notary Public</h1>

                </div>
                <span className="mt-[5%]">
                    <p className="text-[26px] text-center sm:text-left">Coming from an immigrant family, I became a first-generation college graduate from the <span className="font-semibold underline">California State University of Long Beach</span>. I studied Economics while starting my mobile notary business in 2019. <br/><br/> Since then, 
                    I have closed <span className="font-semibold underline">600+</span> signings in the real estate industry which includes <span className="font-semibold underline">Purchases, Refinances, Seller's Packages & Home Equity Loans in Los Angeles County</span>. 
                    I look forward to helping you close your next file!
                    </p>

                </span>
            </div>


        </div>
        <div className="flex flex-col xl:flex-row-reverse justify-center items-center bg-gradient-to-b from-[#1B4E80] to-[#f4f4f4] xl:bg-gradient-to-r xl:from-[#f4f4f4] xl:to-[#1B4E80] h-[100%] w-[100%] rounded-t-[50px] xl:rounded-[50px] shadow-lg mt-[2%] ">
                <div className="bg-[#123456] w-[100%] px-2 pt-2 rounded-t-[10px] mb-[2%] flex flex-row justify-center xl:hidden">
            
                    <h1 className="-tracking-[0.64px] text-[32px] text-center leading-[52px] font-semibold text-white mb-[2%] xl:mb-[5%] xl:mb-[3%]">Areas of Service (Cities)</h1>

                </div>
            <div className="pb-[2%] h-[100%] w-[100%] px-[5%] pb-[5%] xl:py-[0%] xl:pb-[0%] xl:pr-[10%]">

                <img className="p-[5%] scale-[1.1] xl:scale-[1.5] rounded-[50px] drop-shadow-lg" src="/assets/images/areas.PNG" alt="areas-of-coverage"/>
            </div>

            <div className="flex flex-col items-center justify-center h-[100%] w-[100%] px-[5%] pb-[5%]  xl:px-[5%] xl:py-[3%] ">
                <div className="hidden xl:bg-[#123456] xl:w-[100%] xl:px-2 xl:pt-4 xl:rounded-[0px] xl:mb-[2%] xl:flex xl:flex-row xl:justify-center xl:items-center">
            
                    <h1 className="-tracking-[0.64px] text-[32px]  leading-[52px] font-semibold text-white mb-[2%]">Areas of Service (Cities)</h1>

                </div>

                <p className="text-center text-[26px] xl:text-[26px]">Alhambra, Altadena, Arcadia, Azusa, Baldwin Park, Bell, Bell Gardens, Burbank, City Of Industry, Covina, Downey, Duarte, Eagle Rock, El Monte, 
                Glendale, Glendora, Hacienda Heights, Highland Park, Huntington Park, La Canada Flintridge, La Crescenta, La Habra, La Puente, Maywood, Monrovia, Montebello, Monterey Park, Montrose, Mount Wilson, Norwalk, 
                Pasadena, Pico Rivera, Pomona., Rosemead, Rowland Heights, San Dimas, San Gabriel, San Marino, Sierra Madre, South El Monte, South Gate, South Pasadena, Temple City, Walnut, West Covina, Whittier </p>
            </div>


        </div>

    </div>
  )
}

export default About
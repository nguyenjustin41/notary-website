import React, {useState, useEffect, useRef} from 'react';


const Reviews = () => {

    // full solution on how to use intersection observer api
    // to animate on viewport intersection
    // https://dev.to/producthackers/intersection-observer-using-react-49ko

    const containerRef = useRef(null) 
    
    const [ isVisible, setIsVisible ] = useState(false)
    
    const callBackFunction = (entries) => {
        const [ entry ] = entries

        // when the reviews header intersects the screen
        // this evaluates to true everytime that is the case.. 
        // *basically this makes the reviews bubble animate once per page refresh
  
        if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting)
            
        }
    }
    
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    }
    
    
    
    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver(callBackFunction, options) 
        const reviewHeader = containerRef.current
        observer.observe(reviewHeader)
        
    },);



  return (
    <div id="reviews" className="flex flex-col relative items-center bg-[#ffffff] h-[100%] w-[100%] p-[5%]"> 

            
            <div className="reviews-waves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

       
                <h1 ref={containerRef} className="mobile-header -tracking-[0.64px] text-[64px] leading-[52px] font-bold text-black text-shadow">Reviews</h1> 

           
            <div className="mobile-review-container flex flex-row justify-center h-[100%] w-[100%] flex-wrap gap-x-[1%] p-[5%] no-flicker" >


                {/* 1st review */}
           
                    
                    
                <div  onClick={() => window.open('https://www.yelp.com/biz/justin-nguyen-mobile-notary-public-arcadia?utm_campaign=read_more&utm_medium=embedded_review')} 
                        className={isVisible ? "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer transition-all linear duration-[1000ms] opacity-100 " :
                        "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40"
                    }>
                        
                        
                        <div className="flex flex-row justify-start  no-flicker">
                            <img className="mr-[10px] rounded-full drop-shadow-lg" src="/assets/images/pfp-1.jpg" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Matilda D.</h2>
                                <h3 className="text-[white] text-[white]"> Alhambra, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] mt-[3%] text-shadow">I needed some paperwork to be notarized and was referred to Justin by a family member. He was quick, diligent and extremely friendly with my husband and I. Highly would recommend him to others who need someone to quickly get the job done promptly! It's nice to have someone drive to you versus you driving to them.</p>
                        </div>
                </div>

                   
         
                {/* 2nd review */}
      
    
                <div onClick={() => window.open('https://www.yelp.com/biz/justin-nguyen-mobile-notary-public-arcadia?utm_campaign=read_more&utm_medium=embedded_review')}  
                    className= {isVisible ? "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer transition-all linear duration-[2000ms] opacity-100 " :
                    "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40"}>
            
                        <div className="flex flex-row justify-start">
                            <img className="rounded-full mr-[10px] drop-shadow-lg" src="/assets/images/pfp-2.jpg" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Brian K.</h2>
                                <h3 className="text-[white]">Santa Ana, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="mt-[3%] text-[white] text-shadow">Justin was by far the most accommodating Notary I've ever had the pleasure of working with. Not only was he extremely professional, he was also able to help us sign some documents on very short notice. He made himself available to us on one hour notice and the process took about an hour but he remained patient throughout the entire experience. To call this young man personable, experienced, and diligent would be nothing but an understatement...</p>
                        </div>
                
                </div>

           

         
                {/* 3rd review */}

                
                <div onClick={() => window.open('https://www.yelp.com/biz/justin-nguyen-mobile-notary-public-arcadia?utm_campaign=read_more&utm_medium=embedded_review')}  
                    className= {isVisible ? "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer transition-all linear duration-[3000ms] opacity-100 " :
                    "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40"}>
               
                        <div className="flex flex-row justify-start ">
                            <img className=" mr-[10px] rounded-full drop-shadow-lg" src="/assets/images/pfp-3.jpg" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Patrick G.</h2>
                                <h3 className="text-[white]">San Gabriel, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] mt-[3%] text-shadow">Justin provided awesome service for me and my fiancé. I needed a last minute notarized document for my personal business. I made an appointment with Justin and we were greeted with a smile! Overall, Justin provided excellent and quick service. Great price for a mobile notary, highly recommend!</p>
                        </div>
            
                </div>
                
                {/* 4th review */}
                <div onClick={() => window.open('https://www.yelp.com/biz/justin-nguyen-mobile-notary-public-arcadia?utm_campaign=read_more&utm_medium=embedded_review')}  
                    
                    className= {isVisible ?   "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] mt-[2%] shadow-lg cursor-pointer transition-all linear duration-[4000ms] opacity-100":
                    "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] mt-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40" }>
                    
                
                        <div className="flex flex-row justify-start">
                            <img className="mr-[10px] rounded-full drop-shadow-lg" src="/assets/images/pfp-4.png" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Jing G.</h2>
                                <h3 className="text-[white]">Montebello, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] text-shadow mt-[3%]">Very professional, courteous and efficient. Great service. I highly recommend him!

                                We had Justin to notarize our real estate loan documents at our house. He arrived on time and was very friendly. He was very patient to go over hundreds of pages of loan documents with us and so knowledgeable to explain the key information on each page and answered all our questions...

                            </p>
                        </div>
                 
                </div>
                {/* 5th review*/}
                <div onClick={() => window.open('https://www.yelp.com/biz/justin-nguyen-mobile-notary-public-arcadia?utm_campaign=read_more&utm_medium=embedded_review')}  
                    className= {isVisible ?   "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] mt-[2%] shadow-lg cursor-pointer transition-all linear duration-[5000ms] opacity-100":
                    "mobile-review-bubble bg-[#43CC47] h-[100%] w-[30%] rounded-2xl flex flex-col p-[2%] mt-[2%] shadow-lg cursor-pointer opacity-0 translate-y-40" }>
               
                        <div className="flex flex-row justify-start">
                            <img className="mr-[10px] rounded-full drop-shadow-lg" src="/assets/images/pfp-4.png" alt="pfp"/>
                            <div className="flex flex-col items-start">
                                <h2 className="mobile-review-name text-[20px] text-[white] text-shadow">Christina B.</h2>
                                <h3 className="text-[white]">Los Angeles, CA</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[white] text-shadow mt-[3%]">
                            During Covid-19, my family needed documents to be notarized immediately.  I did not want my aging parents to be at risk. Justin was very professional and wore a mask. I requested the signing to be outside in an open space.  Justin was very accommodating and friendly.  I would definitely recommend him to all family and friends.  The pricing is very reasonable.
                            </p>
                        </div>
               
                </div>


            </div>
    </div>

 
  )
};

export default Reviews;

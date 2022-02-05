import React, {useState} from 'react';
import Axios from 'axios';



const Contact = () => {
    
    const url = "http://localhost:5000/"
    


    const [data, setData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        mortgage: "",
        message: "",


    })


    // populates the array of mortages [select mortgage package, ]
    const mortgageOptions = ['Select Mortgage Package', 'Refinance', 'Purchase', "Seller's Package", "Home Equity Loan", "Reverse Mortgage", "Other"]

   
    
    

    

    function handleDataChange(e) {
        const newData = { ...data } 
        try {
           
            newData[e.target.id] = e.target.value
          
            if (e.target.id === 'mortgage'){
                newData[e.target.id] = mortgageOptions[e.target.value]
           
            } 
        } catch (error) {
            console.log(error)
        }

        setData(newData)
        // console.log(newData)
    }   

    function clear() {
        setData({name: '', email: '', company: '', mortgage: '', phone: '', message: ''})
        // reset the select menu on clear
        const selectMenu = document.getElementById('mortgage')
        selectMenu.selectedIndex = 0
        
    
    }

    const handleSubmit = (e) => {
        // refreshes the page if we don't prevent default
        e.preventDefault();

        clear()

        Axios.post(url, {
            name: data.name, 
            company: data.company,
            email: data.email, 
            phone: data.phone, 
            mortgage: data.mortgage, 
            message: data.message
        })

        // .then(res => {
        //     console.log(res.data)
        // })


        
    }



  return (

      <div id="contact" className="mobile-contact-container flex flex-col items-center relative h-[100vh] w-[100%] p-[5%] px-[30%] gap-y-[10%]">
            <div className="contact-waves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <h1 className="mobile-header -tracking-[0.64px] text-[64px] leading-[52px] font-bold text-black text-shadow">Contact Form</h1>

            {/* holds the form card */}
            <div className="flex flex-row justify-center items-center w-[100%] bg-white rounded-2xl shadow-lg h-full mt-[0%] h-[200vh] sm:mt-[10%]  md:mt-[5%]  ">
                {/* container to hold all form inputs */}
                <form onSubmit={(e) => handleSubmit(e)} className="mobile-contact-form flex flex-col w-[100%] justify-center items-center h-[100%] p-[8%] gap-y-[5%]  xl:gap-y-[3%] xl:p-[5%]">
                    {/* name & company div */}
                    <div className='mobile-contact-info flex flex-row h-[100%] w-[100%] gap-y-[2%] gap-x-[2%]'>

                        <div className="mobile-contact-info w-[50%] h-[100%]">
                            <input id="name" value={data.name} onChange={(e) => handleDataChange(e)} className="px-[5%] w-[100%] h-[100%] bg-grey-color shadow-lg border-[#123456] border-solid border-2 rounded-2xl text-[1.5rem]" type='text' placeholder='*Name' required/>

                        </div>
                        <div className="mobile-contact-info  w-[50%] h-[100%]">
                            <input id="company" value={data.company}  onChange={(e) => handleDataChange(e)} className="px-[5%] w-[100%] h-[100%] bg-grey-color shadow-lg  border-[#123456] border-solid border-2 rounded-2xl text-[1.5rem]" type='text' placeholder='Company'/>

                        </div>
                    </div>
                    {/* email & phone div */}
                    <div className='mobile-contact-info flex flex-row justify-center h-[100%] w-[100%] gap-x-[2%]'> 
                        <div className="mobile-contact-info  w-[50%] h-[100%]">
                            <input id="email" value={data.email} onChange={(e) => handleDataChange(e)} className="px-[5%] w-[100%] h-[100%] bg-grey-color shadow-lg  border-[#123456] border-solid border-2 rounded-2xl text-[1.5rem]" type='text' placeholder='*Email' required/>

                        </div>
                        <div className="mobile-contact-info w-[50%] h-[100%]">
                            <input id="phone" value={data.phone} onChange={(e) => handleDataChange(e)} className="px-[5%] w-[100%] h-[100%] bg-grey-color shadow-lg  border-[#123456] border-solid border-2 rounded-2xl text-[1.5rem]" type='text' placeholder='Phone'/>

                        </div>
                    </div>
                    <div className='mobile-contact-select h-[100%] w-[100%] bg-grey-color rounded-2xl'>
                        <select id="mortgage" onChange={(e) => handleDataChange(e)} className="px-[2%] w-[100%] h-[100%] bg-grey-color shadow-lg  border-[#123456] border-solid border-2  rounded-2xl text-[1.5rem]" placeholder="Select Mortgage Package" name="types">
                        
                            {   
                                // map(element, index) => [...]
                                mortgageOptions.map((mortgage, index) => <option value={index}>{mortgage}</option>)
                            }
                            
                        </select>
                    </div>
                    <div className='h-[100%] w-[100%] bg-grey-color rounded-2xl'>
                        <textarea id="message" value={data.message} onChange={(e) => handleDataChange(e)} name="message" cols="40" rows="4" className="py-[2%] px-[2%] w-[100%] h-[100%] bg-grey-color shadow-lg  rounded-2xl border-[#123456] border-solid border-2 text-[1.5rem]" type='text' placeholder='*Message'></textarea>
                    </div>

                    <div className='mobile-contact-submit flex flex-row h-[100%] w-[100%] '>
                        <button type="submit" className="flex flex-row justify-center items-center w-[100%] shadow-lg rounded-[50px] font-semibold text-[28px] text-white outline-hidden cursor-pointer transition-all ease-in-out duration-200 bg-button-color whitespace-nowrap px-[22px] py-[10px] text-shadow hover:bg-button-color-hover">Submit</button>
                    </div>

                </form>
            </div>
      </div>
  ) 
};

export default Contact;

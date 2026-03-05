import React from 'react'
import BannerImg from "../../public/Banner1.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">

        <div className="space-y-12">
        <h1 className="text-4xl font-bold">Hello, Wellcome Here To Learn Something <span className="text-pink-500">New Everyday!!!</span>
        </h1>

        <p className="text-xl">We believe every book is a new adventure.
            Whether you're looking for a deep dive into science or a cozy fictional escape,
            we've got the perfect match for your curiosity.
            
        </p>
        </div>

         

        <div className="mt-8 space-y-4">
              {/* Email Input aur Button ka Container */}
             <div className="flex flex-col items-start gap-4">
    
              {/* Email Input Field */}
               <label className="input validator border-gray-300 w-full md:w-[400px] h-12 flex items-center gap-3 transition-all duration-300 ease-in-out focus-within:border-pink-500 focus-within:shadow-md focus-within:scale-[1.01] active:scale-95 outline-none focus-within:outline-none mt-8 md:mt-11">
                   <svg className="h-6 w-6 opacity-60 text-gray-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                       <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                   </svg>
                            <input type="email" placeholder="Enter your email" required className="placeholder:text-pink-500" />
                </label>

                 {/* Professional Button */}
                  <button className="btn bg-pink-500 text-white hover:bg-pink-600 border-none px-8 h-12 w-full md:w-auto transition-all duration-300 font-semibold active:scale-95  mt-5 md:mt-3">
                    Get Started
                   </button>
             </div>

            {/* Validator Hint (Error Message) */}
             <div className="validator-hint hidden text-red-500 text-sm italic">
              Please enter a valid email address to proceed.
             </div>
         </div>



        </div>

       <div className="order-1 w-full md:w-1/2 flex justify-center items-center p-4 mt-6 md:mt-15 relative">
  
  {/* 1. Background Glow: Sirf halka glow rakha hai background ke liye */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-pink-400/10 dark:bg-pink-900/10 blur-[80px] rounded-full -z-10 animate-pulse"></div>

  {/* 2. Main Image Section: Boxes hata diye hain */}
  <div className="relative group">
    <img 
      src={BannerImg} 
      alt="Books" 
      /* - drop-shadow-2xl se image ko 3D look milega.
         - rounded-[2rem] se corners premium lagenge.
      */
      className="w-full max-w-[280px] md:max-w-[500px] h-auto rounded-[2rem] md:rounded-[3rem] object-cover shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-[1.02]" 
    />
  </div>

</div>
        {/* <div className=" order-1 w-full md:w-1/2 flex justify-center items-center p-4 mt-6 md:mt-15">
        <img  src={BannerImg} alt="" className="w-full max-w-[300px] md:max-w-[550px] h-auto object-contain mx-auto"/>
        
        </div>  */}




      </div>
    
    
    </>
  );
}

export default Banner;


import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

import axios from "axios";

function Freebook() {
   const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data=res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data); 
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getBook();
  }, []);



  // const filterData = list.filter((data) => data.category === "Free");
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 100,
    touchMove: true,
    cssEase: "ease-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2.3 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 relative group my-9">
      
      <div className="flex justify-between items-center mb-10 px-2 group/header">     
  
  {/* --- ADVANCED HEADING --- */}
  <div className="relative cursor-default select-none">

       

         <div className="w-full px-2"> {/* Container padding taaki edges se na chipke */}
  <h2 className="
    /* Typography: Mobile par size chota rakha hai */
    text-1.1xl sm:text-2xl md:text-3xl font-[900] tracking-tighter uppercase
    
    /* Layout: Flex-wrap is the secret! */
    flex flex-wrap items-center gap-x-2
    
    /* LIGHT MODE: High Visibility Black */
    text-[#141414]
    
    /* DARK MODE: Netflix Red Gradient */
    dark:text-transparent dark:bg-clip-text 
    dark:bg-gradient-to-b dark:from-[#E50914] dark:to-[#831010]
    
    /* Left Border: Responsive thickness */
      border-[#E50914]
    
    /* Spacing: Mobile par padding kam ki hai */
    pl-0 py-2
    
    /* Netflix Style Shadows */
    drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]
    dark:drop-shadow-[0_0_12px_rgba(229,9,20,0.5)]
    
    /* Transitions */
    transition-all duration-400 ease-in-out
    hover:scale-[1.01] md:hover:scale-105 cursor-default
  ">
    <span>Recommended</span>
    <span className="text-[#E50914] dark:text-white">For You</span>
  </h2>
</div>    
    <div className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 
                    w-12 transition-all duration-700 ease-in-out 
                    group-hover/header:w-full group-active:w-full 
                    shadow-[0_0_15px_rgba(236,72,153,0.5)]">
    </div>
  </div>

  {/* --- COMPACT ADVANCED VIEW ALL BUTTON --- */}
  <div className="group relative flex items-center gap-2 px-3 py-1.5 
                  bg-white/5 hover:bg-pink-500/10 
                  border border-white/10 hover:border-pink-500/30 
                  rounded-full transition-all duration-500 cursor-pointer 
                  backdrop-blur-md shadow-sm overflow-hidden active:scale-95">
    
         

          <span className="
  /* Typography: Netflix style sharp and thin-bold */
  text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] z-10 
  
  /* LIGHT MODE: Netflix Iconic Red (Visibility 100%) */
  text-[#E50914] 
  
  /* DARK MODE: Thoda bright red taaki black par glow kare */
  dark:text-[#ff1a1a]
  
  /* Hover Effects: Netflix style brightness boost */
  hover:text-[#b20710] dark:hover:text-white
  hover:scale-105 transition-all duration-300
  cursor-pointer active:scale-95
">
  View All
</span>









    {/* Small & Sharp Arrow Circle */}
    <div className="relative flex items-center justify-center w-3 h-3 md:w-3 md:h-3 
                    bg-pink-500 text-white rounded-full 
                    transition-all duration-500 group-hover:h-7 group-hover:w-7
                    group-hover:-rotate-45 shadow-lg shadow-pink-500/40">
      <svg 
        className="w-2.5 h-2.5 stroke-[3px]" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>

    {/* Shimmer Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
  </div>
</div>


     
       



           {/* Desktop Left Arrow */}
<button
  className="group/btn hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 
             w-12 h-16 items-center justify-center 
             
             /* LIGHT MODE: High Visibility (Slightly darker glass) */
             bg-gray-200/80 text-gray-900 border border-gray-300
             
             /* DARK MODE: Professional Netflix Glass */
             dark:bg-white/10 dark:text-white dark:border-white/20
             
             /* Hover Effects (No Red, Just Depth) */
             hover:bg-gray-300 dark:hover:bg-white/20 
             backdrop-blur-md rounded-2xl transition-all duration-300 ease-out
             
             /* Shadows for visibility on images */
             shadow-md dark:shadow-none
             active:scale-95"
  onClick={() => sliderRef.current.slickPrev()}
>
  <svg 
    className="w-6 h-6 transform transition-transform duration-300 group-hover/btn:-translate-x-1" 
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
  </svg>
</button>

{/* Desktop Right Arrow */}
<button
  className="group/btn hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 
             w-12 h-16 items-center justify-center 
             
             /* LIGHT MODE: High Visibility */
             bg-gray-200/80 text-gray-900 border border-gray-300
             
             /* DARK MODE: Professional Netflix Glass */
             dark:bg-white/10 dark:text-white dark:border-white/20
             
             /* Hover Effects */
             hover:bg-gray-300 dark:hover:bg-white/20 
             backdrop-blur-md rounded-2xl transition-all duration-300 ease-out
             
             /* Shadows */
             shadow-md dark:shadow-none
             active:scale-95"
  onClick={() => sliderRef.current.slickNext()}
>
  <svg 
    className="w-6 h-6 transform transition-transform duration-300 group-hover/btn:translate-x-1" 
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
  </svg>
</button>




















      {/* Slider */}
      <div className="pb-16 overflow-visible">
        <Slider ref={sliderRef} {...settings}>
          {book.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;



import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-1 w-[160px]
     sm:w-[180px] md:w-[200px] 
     flex-shrink-0 mx-3 
     transition-all duration-500 
     ease-out hover:scale-110 hover:-translate-y-4 
     hover:z-30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] 
     dark:hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.3)]
     cursor-pointer rounded-xl overflow-hidden">

      {/* Poster */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[240px] sm:h-[260px] md:h-[280px] object-cover"
        />

        {/* Badge */}
        <div className="absolute top-2 right-2 
        bg-black/60 backdrop-blur-md border border-white/20 
        text-pink-400 text-[10px] uppercase tracking-widest 
         px-2.5 py-1 rounded-full font-black shadow-lg shadow-black/50">
       {item.category}
        </div>

        {/* Rating */}
        <div
          className="absolute -bottom-5 left-3
          w-10 h-10 bg-white
          text-black text-xs font-semibold
          rounded-full
          flex items-center justify-center
          shadow-lg
          border-2 border-green-500
          z-10 my-7"
        >
          {item?.rating || "8.0"}
        </div>
      </div>  {/* ✅ YE CLOSE MISSING THA */}

      {/* Title */}
      <div className="mt-6">


         <h2 className="
  mt-3 text-base md:text-lg font-bold 
  /* Light Mode: Deep Slate for readability */
  text-slate-800 
  /* Dark Mode: Clean White-Gray */
  dark:text-slate-100 
  
  /* Smooth Transitions */
  transition-all duration-300 ease-in-out
  
  /* Advanced Hover: Pink to Gradient Mix */
  hover:text-pink-600 dark:hover:text-pink-400
  hover:translate-x-1
  
  /* Text Shadow: Light mode mein subtle, Dark mein sharp */
  drop-shadow-sm dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
  
  /* UI Quality Fixes */
  line-clamp-1 cursor-pointer tracking-tight
">
  {item.title}
</h2>
        {/* <h2 className="mt-3 text-base md:text-lg font-bold text-slate-800 dark:text-slate-100
          hover:text-pink-400 transition-all duration-300 hover:translate-x-1
         drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] 
         line-clamp-1 cursor-pointer">
         {item.title}
         </h2> */}
        <p className="text-slate-400 dark:text-zinc-500 text-[11px] font-bold tracking-widest uppercase mt-0.5">
        {item.year}
       </p>
      </div>
    </div>
  );
}

export default Cards;
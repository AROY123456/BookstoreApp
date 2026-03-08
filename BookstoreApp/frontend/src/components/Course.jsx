import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data); 
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="w-full min-h-screen dark:bg-slate-900">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl dark:text-white">
            Invest in Yourself with Our <span className='text-pink-500'>Premium Experience.</span>
          </h1>

          <p className="mt-12 max-w-4xl mx-auto text-slate-800/80 dark:text-zinc-100/70 leading-relaxed tracking-tight font-normal antialiased">
            Unlock the doors to unlimited potential. We believe that world-class education should be 
            accessible and transformative. Step into a world of expert knowledge today.
          </p>
          <Link to="/">
            <button className="mt-7 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300"> 
              Back to Home
            </button>
          </Link>
        </div>

         <div className="mt-20">
          <div className="flex justify-between items-center mb-6 w-full">
    
          {/* Left Side: Title */}
            <h2 className="text-xl md:text-2xl font-black text-sky-300 border-l-[6px] border-sky-500 rounded-sm shadow-[2px_0_8px_-2px_rgba(236,72,153,0.6)] pl-4 py-1 pr-2 inline-block ">
           Recommended For You
            </h2>

             {/* Right Side: View All */}
            <span className="text-sky-300 text-sm font-semibold hover:text-pink-400 hover:tracking-wider transition-all duration-300 ease-in-out cursor-pointer pr-2">
             View All
         </span>
    
            </div>

             {/* Aapka Cards ka Section yahan aayega */}
             <div className="flex overflow-x-auto gap-6 pb-10 no-scrollbar scroll-smooth">
             {/* book.map loop... */}
         </div>

      
          
          {/* Flex Row for Cards */}
          <div className="flex overflow-x-auto gap-6 pb-10 no-scrollbar scroll-smooth">
            {book.length > 0 ? (
              book.map((item) => (
                <Cards key={item._id} item={item} />
              ))
            ) : (
              <p className="text-white">Loading books...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;

















































// import React, { useEffect, useState } from "react";
// import Cards from "./Cards";
// import axios from "axios";
// import { Link } from "react-router-dom";



// function Course() {


//   const [book, setBook] = useState([]);

//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");
//         console.log(res.data);
//         setBook(res.data); // Database ka data yahan save ho raha hai
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };
//     getBook();
//   }, []);

    






//   // Yahan humne filter hata kar direct list li hai taaki ek hi line mein sab dikhe
//   const displayData = list.slice(0, 15); 

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//         {/* Header Section */}
//         <div className="mt-32 items-center justify-center text-center">
//           <h1 className="text-2xl font-semibold md:text-4xl">
//             Invest in Yourself with Our <span className='text-pink-500'>Premium Experience.</span>
//           </h1>
//           <p className="mt-12 max-w-4xl mx-auto text-slate-800/80 dark:text-zinc-100/70 leading-relaxed tracking-tight font-normal antialiased">
//             Unlock the doors to unlimited potential. We believe that world-class education should be 
//             accessible and transformative. Step into a world of expert knowledge today.
//           </p>
//           <Link to="/">
//             <button className="mt-7 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300 shadow-lg"> 
//               Back to Home
//             </button>
//           </Link>
//         </div>

//         {/* --- SIRF EK SINGLE LINE SECTION --- */}
//         <div className="mt-20 mb-20">
//           <div className="flex justify-between items-center mb-6">
//            <h2 className="text-xl md:text-2xl font-black text-sky-300 border-l-[6px] border-sky-500 rounded-sm shadow-[2px_0_8px_-2px_rgba(236,72,153,0.6)] pl-4 py-1 pr-2 inline-block ">
//               Recommended For You
//             </h2>
 
//            <span className="text-sky-300 text-sm font-semibold hover:text-pink-400 hover:tracking-wider transition-all duration-300 ease-in-out cursor-pointer ">
//               View All
//             </span>
//           </div>
          
//           {/* Ye rahi aapki single row */}
//           <div className="flex overflow-x-auto gap-4 md:gap-6 no-scrollbar pb-5 scroll-smooth">
//             {displayData.map((item) => (
//               <div key={item.id} className="flex-shrink-0"> 
//                 <Cards item={item} />
//               </div>
//             ))}
//           </div>
          
//           {/* Niche ki extra line hatane ke liye space check */}
//           <div className="border-b border-gray-100 dark:border-slate-800 mt-5 opacity-0"></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Course;


































































// import React from "react";
// import list from "../../public/list.json";
// import Cards from "./Cards";

// function Course() {
//   return (
//     <>
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div className="mt-32 items-center justify-center text-center">
//             <h1 className="text-2xl font-semibold md:text-4xl">
//             Invest in Yourself with Our <span className='text-pink-500'>Premium Learning Experience.</span>
//             </h1>


//             <p className="mt-12">
//              Unlock the doors to unlimited potential. We believe that world-class education should be 
//              accessible, engaging, and transformative. Our curated selection of professional courses 
//              and deep-dive resources are crafted to bridge the gap between where you are and where 
//              you want to be. Step into a world of expert knowledge and start shaping your future today.
//             </p>
//             <button className="mt-7 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"> Back</button>

//         </div>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4">
//           {
//             list.map((item)=>(
//               <Cards key={item.id} item={item} />
//             ))}


//         </div>

//     </div>
    
    
//     </>
//   );
// }

// export default Course;

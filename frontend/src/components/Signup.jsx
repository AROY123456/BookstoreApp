import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login'; 
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  const openLoginModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    /* Background Blur + Home Visible Logic */
    <div className="fixed inset-0 z-[999] w-full h-screen flex items-center justify-center bg-black/30 backdrop-blur-[6px] transition-all duration-500 overflow-y-auto">
      
      {/* Click outside to go home */}
      <div className="absolute inset-0 -z-10" onClick={() => navigate("/")}></div>

      {/* Main Container Card */}
      <div className="relative z-10 w-[92%] max-w-[440px] p-8 sm:p-12 bg-white/90 dark:bg-black/70 dark:backdrop-blur-3xl border border-gray-200 dark:border-zinc-800 shadow-[0_20px_80px_rgba(0,0,0,0.4)] rounded-[2.5rem] transition-all animate-in fade-in zoom-in duration-300">
        
        {/* ❌ CLOSE BUTTON */}
        <button 
          onClick={() => navigate("/")} 
          className="absolute top-6 right-8 text-gray-400 hover:text-red-500 transition-all duration-300 outline-none cursor-pointer z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-[1000] tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              BookStore
            </span>
          </h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mt-4 opacity-80">Join the community</p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
          {/* FULL NAME */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Full Name" 
              className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
                ${errors.fullname ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500"}`}
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.fullname && <ErrorMsg message={errors.fullname.message} />}
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address" 
              className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
                ${errors.email ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500"}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <ErrorMsg message={errors.email.message} />}
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input 
              type="password" 
              placeholder="Create Password" 
              className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
                ${errors.password ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500"}`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <ErrorMsg message={errors.password.message} />}
          </div>

          {/* Action Button */}
          <button type="submit" className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group overflow-hidden relative border-none cursor-pointer">
            <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative z-10">Get Started</span>
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-gray-100 dark:border-zinc-800/50 text-center">
          <p className="text-[13px] text-gray-500 font-medium">
            Already a member? 
            <button 
              onClick={openLoginModal} 
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-[1000] cursor-pointer hover:underline hover:scale-110 transition-all ml-1 uppercase tracking-tighter inline-block"
            >
              Login
            </button>
          </p>
        </div>
      </div>

      <Login />
    </div>
  );
}

/* --- REUSABLE ADVANCED ERROR COMPONENT --- */
const ErrorMsg = ({ message }) => (
  <div className="flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/20 backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-500">
    <div className="relative flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-red-500 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <div className="absolute inset-0 bg-red-500 blur-[6px] opacity-40 animate-pulse"></div>
    </div>
    <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-red-500/90 italic">
      {message}
    </span>
  </div>
);

export default Signup;

































// import { useNavigate } from 'react-router-dom';
// import Login from './Login'; 
// import { useForm } from "react-hook-form";

// function Signup() {
//   const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm()
  
//     const onSubmit = (data) => {
//       console.log("Login Success Data:", data);
//     }
//   const navigate = useNavigate();

//   const openLoginModal = () => {
//     const modal = document.getElementById("my_modal_3");
//     if (modal) {
//       modal.showModal();
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center relative bg-black/20 dark:bg-[#080808] transition-colors duration-500">
      
//       {/* Background Glow Effects */}
//       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E50914]/5 blur-[120px] rounded-full hidden dark:block"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#E50914]/5 blur-[120px] rounded-full hidden dark:block"></div>

//       {/* Main Container Card */}
//       <div className="relative z-10 w-[92%] max-w-[420px] p-8 sm:p-12 bg-white dark:bg-black/40 dark:backdrop-blur-2xl border border-gray-200 dark:border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_0_80px_rgba(0,0,0,0.4)] rounded-[2.5rem] transition-all">
        
//         {/* ❌ MINIMALIST CLOSE BUTTON (Sahi position par) */}
//         <button 
//           onClick={() => navigate("/")} 
//           className="absolute top-6 right-8 text-gray-400 hover:text-gray-600 transition-all duration-300 outline-none cursor-pointer z-20"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Header Section */}
//         <div className="mb-10 text-center">
//           <h1 className="text-3xl font-[1000] tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform duration-300">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               BookStore
//             </span>
//           </h1>
//           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mt-4 opacity-80">Join the community</p>
//         </div>

//         {/* Input Form */}
//         <div className="flex flex-col gap-4">
//           <input type="text" placeholder="Full Name" className="w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border border-gray-100 dark:border-zinc-800 focus:border-[#4f46e5] outline-none transition-all shadow-inner" />
//           <input type="email" placeholder="Email Address" className="w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border border-gray-100 dark:border-zinc-800 focus:border-[#4f46e5] outline-none transition-all shadow-inner" />
//           <input type="password" placeholder="Create Password" className="w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border border-gray-100 dark:border-zinc-800 focus:border-[#4f46e5] outline-none transition-all shadow-inner" />

//           {/* Gradient Action Button */}
//           <button className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group overflow-hidden relative">
//             <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//             <span className="relative z-10">Get Started</span>
//           </button>
//         </div>

//         {/* Footer Toggle */}
//         <div className="mt-10 pt-8 border-t border-gray-100 dark:border-zinc-800/50 text-center">
//           <p className="text-[13px] text-gray-500 font-medium">
//             Already a member? 
//             <button 
//               onClick={openLoginModal} 
//               className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-[1000] cursor-pointer hover:underline hover:scale-110 transition-all ml-1 uppercase tracking-tighter inline-block"
//             >
//               Login
//             </button>
//           </p>
//         </div>
//       </div>

//       {/* Modal Integration */}
//       <Login />
//     </div>
//   );
// }

// export default Signup;



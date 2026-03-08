import React, { useState } from 'react'; // 1. Loading ke liye useState add kiya
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login'; 
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from '../context/AuthProvider';

function Signup() {
  const [loading, setLoading] = useState(false); // Loading state
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur" // User field chhodte hi error dikhega
  });

  const [authUser, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    setLoading(true); // Loading ON
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      
      if (res.data) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        toast.success("Signup Successful! Welcome aboard.");

        setTimeout(() => {
          navigate(from, { replace: true });
        }, 500);
      }
    } catch (err) {
      console.log(err);
      const errorMsg = err.response?.data?.message || "Something went wrong";
      toast.error("Error: " + errorMsg);
    } finally {
      setLoading(false); // Loading OFF (Chahe success ho ya error)
    }
  };

  const openLoginModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.showModal();
  };

  return (
    <div className="fixed inset-0 z-[999] w-full h-screen flex items-center justify-center bg-black/40 backdrop-blur-[8px] transition-all duration-500 overflow-y-auto">
      
      {/* Click outside to go home */}
      <div className="absolute inset-0 -z-10" onClick={() => navigate("/")}></div>

      {/* Main Container Card */}
      <div className="relative z-10 w-[92%] max-w-[440px] p-8 sm:p-12 bg-white/95 dark:bg-zinc-950/80 dark:backdrop-blur-2xl border border-gray-200 dark:border-zinc-800 shadow-[0_30px_100px_rgba(0,0,0,0.5)] rounded-[3rem] transition-all animate-in fade-in zoom-in duration-500">
        
        {/* ❌ CLOSE BUTTON */}
        <button 
          onClick={() => navigate("/")} 
          className="absolute top-8 right-8 text-gray-400 hover:text-red-500 hover:rotate-90 transition-all duration-300 outline-none cursor-pointer z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-[1000] tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              BookStore
            </span>
          </h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mt-4">Create your journey</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
          {/* FULL NAME */}
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Full Name" 
              className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
                ${errors.fullname ? "border-red-500/50 ring-2 ring-red-500/10" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"}`}
              {...register("fullname", { required: "Name is required", minLength: {value: 3, message: "Name too short"} })}
            />
            {errors.fullname && <ErrorMsg message={errors.fullname.message} />}
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address" 
              className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
                ${errors.email ? "border-red-500/50 ring-2 ring-red-500/10" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"}`}
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
              })}
            />
            {errors.email && <ErrorMsg message={errors.email.message} />}
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input 
              type="password" 
              placeholder="Create Password" 
              className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
                ${errors.password ? "border-red-500/50 ring-2 ring-red-500/10" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"}`}
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" }
              })}
            />
            {errors.password && <ErrorMsg message={errors.password.message} />}
          </div>

          {/* Action Button WITH LOADING STATE */}
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 mt-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all duration-300 group relative overflow-hidden border-none cursor-pointer
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98] hover:shadow-purple-500/25"}`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Signing Up...</span>
              </div>
            ) : (
              <>
                <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10">Get Started</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-gray-100 dark:border-zinc-800/50 text-center">
          <p className="text-[13px] text-gray-500 font-medium italic">
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

const ErrorMsg = ({ message }) => (
  <div className="flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-red-500/5 border border-red-500/10 backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-300">
    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 italic">
      {message}
    </span>
  </div>
);

export default Signup;

















































// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Login from './Login'; 
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useAuth } from '../context/AuthProvider';

// function Signup() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // const navigate = useNavigate();
//   const [authUser, setAuthUser] = useAuth();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
//     try {
//       // Async/Await ka sahi istemal
//       const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      
//       if (res.data) {
//         console.log(res.data);
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//         setAuthUser(res.data.user);
//         toast.success(<span className="hot-toast-success-text text-lg">Signup Successfully! Welcome aboard.</span>,);
//         // navigate(from, { replace: true });

//         setTimeout(() => {
//         navigate(from, { replace: true });
//         // window.location.reload(); // State refresh ke liye zaroori hai
//         }, 500);

//       }

//       // localStorage.setItem("Users", JSON.stringify(res.data.user));
//     } catch (err) {
//       console.log(err);
//       // Agar backend se error message aa raha hai toh wo dikhao
//       const errorMsg = err.response?.data?.message || "Something went wrong";
//       toast.error("Error: " + errorMsg);
//     }
//   };

//   const openLoginModal = () => {
//     const modal = document.getElementById("my_modal_3");
//     if (modal) {
//       modal.showModal();
//     }
//   };

//   return (
//     /* Background Blur + Home Visible Logic */
//     <div className="fixed inset-0 z-[999] w-full h-screen flex items-center justify-center bg-black/30 backdrop-blur-[6px] transition-all duration-500 overflow-y-auto">
      
//       {/* Click outside to go home */}
//       <div className="absolute inset-0 -z-10" onClick={() => navigate("/")}></div>

//       {/* Main Container Card */}
//       <div className="relative z-10 w-[92%] max-w-[440px] p-8 sm:p-12 bg-white/90 dark:bg-black/70 dark:backdrop-blur-3xl border border-gray-200 dark:border-zinc-800 shadow-[0_20px_80px_rgba(0,0,0,0.4)] rounded-[2.5rem] transition-all animate-in fade-in zoom-in duration-300">
        
//         {/* ❌ CLOSE BUTTON */}
//         <button 
//           onClick={() => navigate("/")} 
//           className="absolute top-6 right-8 text-gray-400 hover:text-red-500 transition-all duration-300 outline-none cursor-pointer z-20"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="mb-10 text-center">
//           <h1 className="text-3xl font-[1000] tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform duration-300">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               BookStore
//             </span>
//           </h1>
//           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mt-4 opacity-80">Join the community</p>
//         </div>

//         {/* Input Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
//           {/* FULL NAME */}
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Full Name" 
//               className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
//                 ${errors.fullname ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500"}`}
//               {...register("fullname", { required: "Name is required" })}
//             />
//             {errors.fullname && <ErrorMsg message={errors.fullname.message} />}
//           </div>

//           {/* EMAIL */}
//           <div className="relative">
//             <input 
//               type="email" 
//               placeholder="Email Address" 
//               className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
//                 ${errors.email ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500"}`}
//               {...register("email", { required: "Email is required" })}
//             />
//             {errors.email && <ErrorMsg message={errors.email.message} />}
//           </div>

//           {/* PASSWORD */}
//           <div className="relative">
//             <input 
//               type="password" 
//               placeholder="Create Password" 
//               className={`w-full px-6 py-4 text-sm rounded-2xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all shadow-inner 
//                 ${errors.password ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-100 dark:border-zinc-800 focus:border-purple-500"}`}
//               {...register("password", { required: "Password is required" })}
//             />
//             {errors.password && <ErrorMsg message={errors.password.message} />}
//           </div>

//           {/* Action Button */}
//           <button type="submit" className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group overflow-hidden relative border-none cursor-pointer">
//             <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//             <span className="relative z-10">Get Started</span>
//           </button>
//         </form>

//         {/* Footer */}
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

//       <Login />
//     </div>
//   );
// }

// /* --- REUSABLE ADVANCED ERROR COMPONENT --- */
// const ErrorMsg = ({ message }) => (
//   <div className="flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/20 backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-500">
//     <div className="relative flex items-center justify-center">
//       <svg className="w-3.5 h-3.5 text-red-500 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//       </svg>
//       <div className="absolute inset-0 bg-red-500 blur-[6px] opacity-40 animate-pulse"></div>
//     </div>
//     <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-red-500/90 italic">
//       {message}
//     </span>
//   </div>
// );

// export default Signup;


































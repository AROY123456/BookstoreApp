import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Login Success Data:", data);
  }

  return (
    <dialog id="my_modal_3" className="modal bg-black/10 backdrop-blur-[4px] transition-all duration-500">
      
      <div className="modal-box bg-white dark:bg-[#141414] p-8 sm:p-10 border border-gray-200 dark:border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.5)] rounded-2xl max-w-[400px] w-[92%] mx-auto overflow-visible relative">
        
        {/* --- CLOSE BUTTON --- */}
        <form method="dialog">
          <button className="absolute top-5 right-5 text-gray-400 hover:text-[#E50914] transition-all p-1 outline-none border-none bg-transparent cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>

        {/* --- HEADER --- */}
        <div className="mb-8 text-center sm:text-left">
          <h3 className="text-3xl font-[1000] tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              BookStore
            </span>
          </h3>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-3">Login to continue</p>
        </div>

        {/* --- ACTUAL FORM --- */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            
            {/* EMAIL FIELD */}
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className={`w-full px-5 py-4 text-sm rounded-xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all duration-300 shadow-inner
                  ${errors.email ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-200 dark:border-zinc-800 focus:border-purple-500"}`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <div className="group flex items-center gap-2 mt-2.5 px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/20 backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-500">
                  <div className="relative flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-500 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="absolute inset-0 bg-red-500 blur-[6px] opacity-40 animate-pulse"></div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-red-500/90 italic">
                    {errors.email.message}
                  </span>
                </div>
              )}
            </div>
            
            {/* PASSWORD FIELD */}
            <div className="relative group">
              <input 
                type="password" 
                placeholder="Password" 
                className={`w-full px-5 py-4 text-sm rounded-xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all duration-300 shadow-inner
                  ${errors.password ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-200 dark:border-zinc-800 focus:border-purple-500"}`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <div className="group flex items-center gap-2 mt-2.5 px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/20 backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-500">
                  <div className="relative flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-500 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="absolute inset-0 bg-red-500 blur-[6px] opacity-40 animate-pulse"></div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-red-500/90 italic">
                    {errors.password.message}
                  </span>
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <button 
              type="submit" 
              className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 group overflow-hidden relative border-none cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10">Sign In</span>
            </button>

            <div className="flex justify-between items-center text-[11px] font-bold uppercase text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-xs border-gray-400 checked:bg-purple-600" />
                Remember Me
              </label>
              <a href="#" className="hover:text-purple-500">Forgot Password?</a>
            </div>
          </div>
        </form>

        {/* --- FOOTER --- */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-zinc-800/60 text-center">
          <p className="text-[12px] text-gray-500">
            New here? 
            <Link 
              to="/signup"
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-[1000] cursor-pointer hover:underline hover:scale-110 transition-all ml-1 uppercase tracking-tighter inline-block"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop bg-black/30 dark:bg-black/60">
        <button className="cursor-default outline-none">close</button>
      </form>
    </dialog>
  )
}

export default Login;



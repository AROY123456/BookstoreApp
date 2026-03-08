import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from '../context/AuthProvider';

function Login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset // 1. Reset function add kiya form clear karne ke liye
  } = useForm({
    mode: "onTouched" // 2. Real-time validation start ho jayegi
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      
      if (res.data) {
        // Data Save
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        
        toast.success(
          <span className="hot-toast-success-text text-lg">Login Successfully</span>
        );

        // 3. Modal Close Logic (Safe way)
        const modal = document.getElementById("my_modal_3");
        if (modal) modal.close();
        
        reset(); // 4. Login ke baad form fields khali kar dega
        
        // 5. Smooth Navigation bina window reload ke
        setTimeout(() => {
          navigate("/"); 
        }, 300);
      }
    } catch (err) {
      // 6. Advanced Error Handling (Backend message dikhayega)
      const errorMsg = err.response?.data?.message || "Invalid email or password";
      toast.error("Error: " + errorMsg);
    } finally {
      setLoading(false); // 7. Loading stop chahe success ho ya error
    }
  };

  return (
    <dialog id="my_modal_3" className="modal bg-black/5 backdrop-blur-[4px] transition-all duration-500">
      {/* Design: Bilkul wahi jo aapne diya tha */}
      <div className="modal-box bg-white dark:bg-[#141414] p-8 sm:p-10 border border-gray-200 dark:border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.5)] rounded-2xl max-w-[400px] w-[92%] mx-auto overflow-visible relative z-[50] backdrop-blur-none">
        
        {/* CLOSE BUTTON */}
        <form method="dialog">
          <button className="absolute top-5 right-5 text-gray-400 hover:text-[#E50914] transition-all p-1 outline-none border-none bg-transparent cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>

        {/* HEADER */}
        <div className="mb-8 text-center sm:text-left">
          <h3 className="text-3xl font-[1000] tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              BookStore
            </span>
          </h3>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-3">Login to continue</p>
        </div>

        {/* ACTUAL FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            
            {/* EMAIL FIELD */}
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className={`w-full px-5 py-4 text-sm rounded-xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all duration-300 shadow-inner
                  ${errors.email ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-200 dark:border-zinc-800 focus:border-purple-500"}`}
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Email format is wrong" } 
                })}
              />
              {errors.email && (
                <div className="group flex items-center gap-2 mt-2.5 px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/20 backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-500">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-red-500/90 italic">{errors.email.message}</span>
                </div>
              )}
            </div>
            
            {/* PASSWORD FIELD WITH EYE TOGGLE */}
            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className={`w-full px-5 py-4 text-sm rounded-xl bg-gray-50 dark:bg-zinc-900/50 text-black dark:text-white border outline-none transition-all duration-300 shadow-inner
                  ${errors.password ? "border-red-500/50 ring-2 ring-red-500/10 animate-shake" : "border-gray-200 dark:border-zinc-800 focus:border-purple-500"}`}
                {...register("password", { required: "Password is required" })}
              />
              
              {/* Eye Icon Button */}
              <div 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[18px] text-gray-400 cursor-pointer hover:text-purple-500 transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>

              {errors.password && (
                <div className="group flex items-center gap-2 mt-2.5 px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/20 backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-500">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-red-500/90 italic">{errors.password.message}</span>
                </div>
              )}
            </div>

            {/* Sign In Button WITH LOADING */}
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 mt-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl shadow-lg transition-all duration-300 group overflow-hidden relative border-none cursor-pointer
                ${loading ? "opacity-70 cursor-wait" : "hover:scale-[1.02] active:scale-[0.97]"}`}
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10">{loading ? "Logging in..." : "Sign In"}</span>
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

        {/* FOOTER */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-zinc-800/60 text-center">
          <p className="text-[12px] text-gray-500">
            New here? 
            <Link 
              to="/signup"
              onClick={() => document.getElementById("my_modal_3")?.close()}
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-[1000] cursor-pointer hover:underline hover:scale-110 transition-all ml-1 uppercase tracking-tighter inline-block"
            >
              Create Account
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














































































// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useAuth } from '../context/AuthProvider';

// function Login() {
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const [authUser, setAuthUser] = useAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm({
//     mode: "onTouched" // Jab user field touch kare tabhi validation dikhe
//   });

//   const onSubmit = async (data) => {
//     setLoading(true);
//     const userInfo = {
//       email: data.email,
//       password: data.password,
//     };

//     try {
//       // Logic: Backend URL ko variable mein rakha hai for scalability
//       const res = await axios.post("http://localhost:4001/user/login", userInfo);
      
//       if (res.data) {
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//         setAuthUser(res.data.user);
        
//         toast.success("Welcome back! Login Successful");

//         // Modal Close Logic
//         const modal = document.getElementById("my_modal_3");
//         if(modal) modal.close();
        
//         reset(); // Form clear kar do
//         setTimeout(() => navigate("/"), 300);
//       }
//     } catch (err) {
//       const errorMsg = err.response?.data?.message || "Invalid credentials. Please try again.";
//       toast.error(errorMsg);
//     } finally {
//       setLoading(false); // Request khatam hote hi loading band
//     }
//   };

//   return (
//     <dialog id="my_modal_3" className="modal backdrop-blur-md transition-all duration-500">
//       <div className="modal-box bg-white dark:bg-zinc-950 p-8 sm:p-10 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl max-w-[420px] w-[92%] relative overflow-hidden">
        
//         {/* --- CLOSE BUTTON --- */}
//         <form method="dialog">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:rotate-90 transition-transform duration-300">✕</button>
//         </form>

//         {/* --- HEADER --- */}
//         <div className="mb-10 text-center">
//           <h3 className="text-4xl font-black italic tracking-tighter uppercase">
//             <span className="bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               BookStore
//             </span>
//           </h3>
//           <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mt-2">Secure Member Access</p>
//         </div>

//         {/* --- FORM --- */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
//           {/* EMAIL */}
//           <div className="relative group">
//             <input 
//               type="email" 
//               placeholder="Email Address" 
//               className={`w-full px-5 py-4 text-sm rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border transition-all outline-none
//                 ${errors.email ? "border-red-500 ring-2 ring-red-500/10" : "border-zinc-200 dark:border-zinc-800 focus:border-purple-500"}`}
//               {...register("email", { 
//                 required: "Email is required",
//                 pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
//               })}
//             />
//             {errors.email && <ErrorComponent message={errors.email.message} />}
//           </div>
          
//           {/* PASSWORD WITH TOGGLE */}
//           <div className="relative group">
//             <input 
//               type={showPassword ? "text" : "password"} 
//               placeholder="Password" 
//               className={`w-full px-5 py-4 text-sm rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border transition-all outline-none
//                 ${errors.password ? "border-red-500 ring-2 ring-red-500/10" : "border-zinc-200 dark:border-zinc-800 focus:border-purple-500"}`}
//               {...register("password", { required: "Password is required" })}
//             />
            
//             {/* Eye Icon Button */}
//             <div 
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-4 top-[18px] text-zinc-400 hover:text-purple-500 cursor-pointer transition-colors"
//             >
//               {showPassword ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               )}
//             </div>
//             {errors.password && <ErrorComponent message={errors.password.message} />}
//           </div>

//           {/* SIGN IN BUTTON */}
//           <button 
//             type="submit" 
//             disabled={loading}
//             className={`w-full py-4 mt-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all duration-300 relative overflow-hidden
//               ${loading ? "opacity-70 cursor-wait" : "hover:shadow-purple-500/25 active:scale-95 hover:bg-zinc-800 dark:hover:bg-zinc-200"}`}
//           >
//             {loading ? (
//               <div className="flex items-center justify-center gap-2">
//                 <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
//                 <span>Verifying...</span>
//               </div>
//             ) : "Sign In"}
//           </button>

//           {/* HELPERS */}
//           <div className="flex justify-between items-center text-[10px] font-bold uppercase text-zinc-500 px-1">
//             <label className="flex items-center gap-2 cursor-pointer group hover:text-purple-500 transition-colors">
//               <input type="checkbox" className="checkbox checkbox-xs rounded-md border-zinc-400 checked:bg-purple-600" />
//               Remember Me
//             </label>
//             <a href="#" className="hover:text-purple-500 transition-colors underline-offset-4 hover:underline">Forgot Password?</a>
//           </div>
//         </form>

//         {/* --- FOOTER --- */}
//         <div className="mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-800/60 text-center">
//           <p className="text-[12px] text-zinc-500 font-medium">
//             New to BookStore? 
//             <Link 
//               to="/signup"
//               onClick={() => document.getElementById("my_modal_3")?.close()}
//               className="text-purple-600 font-black ml-1 uppercase tracking-tighter hover:underline inline-block transition-transform hover:scale-105"
//             >
//               Create Account
//             </Link>
//           </p>
//         </div>
//       </div>

//       <form method="dialog" className="modal-backdrop bg-black/40 backdrop-blur-sm">
//         <button className="cursor-default outline-none">close</button>
//       </form>
//     </dialog>
//   );
// }

// // Chhota reusable Error component for clean code
// const ErrorComponent = ({ message }) => (
//   <div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg bg-red-500/5 border border-red-500/10 animate-in fade-in slide-in-from-top-1 duration-300">
//     <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 italic">
//       {message}
//     </span>
//   </div>
// );

// export default Login;


















































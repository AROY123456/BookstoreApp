import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Advanced: Confirmation pucho taki accidental clicks na hon
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        
        if (confirmLogout) {
            try {
                // 1. Pehle State null karo (UI turant update hoga)
                setAuthUser(null);

                // 2. LocalStorage poori tarah saaf karo
                localStorage.removeItem("Users");
                localStorage.removeItem("User");
                // localStorage.clear(); // Optional: Agar sab kuch delete karna ho

                toast.success("Logged out successfully!");

                // 3. User ko Home page par bhej do
                navigate("/", { replace: true });

            } catch (error) {
                toast.error("Logout Failed: " + error.message);
            }
        }
    };

    return (
        <button 
            className="group relative flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-red-500/40 active:scale-95 overflow-hidden"
            onClick={handleLogout}
        >
            {/* Chhota sa Icon advanced look ke liye */}
            <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
        </button>
    );
}

export default Logout;










































// import React from 'react'
// import { useAuth } from '../context/AuthProvider'
// import toast from 'react-hot-toast';

// function Logout() {
//     const [authUser, setAuthUser] = useAuth();

//     const handleLogout = () => {
//         try {
//             // 1. State ko null karo (UI turant update hoga)
//             setAuthUser(null);

//             // 2. LocalStorage saaf karo
//             localStorage.removeItem("Users");
//             localStorage.removeItem("User");

//             toast.success("Logout successfully");
            

//             // 3. Optional: Agar aapko refresh karna hi hai toh 
//             // setTimeout(() => { window.location.reload(); }, 500);
            
//         } catch (error) {
//             toast.error("Error: " + error.message);
//         }
//     }

//     return (
//         <button 
//             className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-all duration-300"
//             onClick={handleLogout}
//         >
//             Logout
//         </button>
//     )
// }

// export default Logout;

















// import React from 'react'
// import { useAuth } from '../context/AuthProvider'
// import toast from 'react-hot-toast';

// function Logout() {
//     const [authUser, setAuthUser] = useAuth();

//     const handleLogout = () => {
//         try {
//             // 1. LocalStorage ko pehle saaf karo (Sabse important)
//             // Check karo: Agar Login mein "Users" likha tha toh yahan bhi "Users" hi likhna
//             localStorage.removeItem("Users"); 
//             localStorage.removeItem("User"); // Dono try kar lo safety ke liye

//             // 2. Phir state ko null karo
//             setAuthUser(null);

//             toast.success("Logout successfully");
            

//             // 3. Reload karo taaki Context fresh ho jaye
//             setTimeout(() => {
//                 document.getElementById("my_modal_3").close();
//              window.location.reload();
//             }, 500);

//         } catch (error) {
//             toast.error("Error: " + error.message);
//             setTimeout(() => {}, 500);

            

//         }
//     }

//     return (
//         <button 
//             className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
//             onClick={handleLogout}
//         >
//             Logout
//         </button>
//     )
// }

// export default Logout;







































// import React from 'react'
// import { useAuth } from '../context/AuthProvider'
// import toast from 'react-hot-toast';

// function Logout() {
//     const [authUser, setAuthUser]=useAuth();
//     const handleLogout=()=>{
//         try {
//             setAuthUser({
//                 ...authUser,
//                 user:null
//             })
//             localStorage.removeItem("User");
//             toast.success("Logout successfully");
//         } catch () {
//             toast.error("Error: ", error.message);
//             setTimeout(() => {
//           window.location.reload();
//           }, 2000);
//         }
//     }
//   return (
//     <div>
//       <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer">
//         onClick={handleLogout}>
//         Logout </button>
//     </div>
//   )
// }

// export default Logout;

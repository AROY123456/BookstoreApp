import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {

  const [authUser, setAuthUser] = useAuth();
    console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        
        {/* Toaster hamesha Routes ke niche hona chahiye taaki layer top par rahe */}
        <Toaster />
      </div>
    </>
  );
}

export default App;

















































// import React from "react";
// import Home from "./home/Home";
// import {Route, Routes} from "react-router-dom";
// import Courses from "./courses/Courses";
// import Signup from "./components/Signup";
// import { Toaster } from 'react-hot-toast';



// function App() {
//   return (
//     <>
//       <div className="dark:bg-slate-900 dark:text-white">
         

//         <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/course" element={<Courses />} />
//          <Route path="/signup" element={<Signup />} />
//       </Routes>
        
//        // App.jsx
//       <Toaster 
//        position="top-center"
//        containerStyle={{
//        zIndex: 99999999, // Modal se 100 guna zyada z-index
//      }}
//      toastOptions={{
//        style: {
//       zIndex: 99999999,
//       background: '#141414', // Solid background taaki peeche ka blur asar na kare
//       color: '#fff',
//       border: '1px solid #333'
//      }
//       }}
//     />

//       </div>  
     

//     </>
//   );
// }

// export default App;



















import React from 'react'

function Footer() {
  return (
    <div>
        
        <footer className="footer p-10 bg-white dark:bg-slate-900 dark:text-white text-base-content border-t border-gray-100 mt-20">
             {/* Main Container: Desktop par 3-column grid layout */}
                 <div className="w-full flex flex-col md:grid md:grid-cols-3 items-center gap-10">
    
               {/* 1. Left Side: Brand/Logo */}
                     <aside className="text-center md:text-left order-1">
                     <p className="text-2xl font-bold text-pink-500">HI-BOOK Store</p>
                     <p className="text-gray-400 text-sm mt-2">Providing quality books since 2026.</p>
                     </aside>

                   {/* 2. Middle Side: Social Icons (Ab ye Desktop par Center mein honge) */}
                    <nav className="flex justify-center gap-6 order-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                     className="cursor-pointer text-gray-400 hover:text-[#1DA1F2] transition-all duration-500 animate-bounce-slow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                      className="cursor-pointer text-gray-400 hover:text-[#FF0000] transition-all duration-500 animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                      className="cursor-pointer text-gray-400 hover:text-[#1877F2] transition-all duration-500 animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                 </a>
               </nav>

              {/* 3. Right Side: Navigation Links */}
                <nav className="flex flex-wrap justify-center md:justify-end gap-6 order-3">
                     {["About us", "Contact", "Jobs", "Press kit"].map((link) => (
                     <a 
                         key={link} 
                          href={`/${link.toLowerCase().replace(/\s+/g, '')}`}
                            className="link link-hover text-gray-500 hover:text-pink-500 font-medium transition-all duration-300 hover:translate-y-[-2px] cursor-pointer text-sm"
                         >
                       {link}
                    </a>
                    ))}
                 </nav>
             </div>

                <div className="border-t border-gray-100 mt-10 pt-8 w-full">
                     <div className="flex flex-col items-center md:items-end px-4 md:px-0">
                     {/* Main Copyright Text */}
                   <p className="text-gray-500 text-[12px] md:text-sm tracking-widest uppercase font-semibold text-center md:text-right leading-relaxed">
                       Copyright © {new Date().getFullYear()} 
                         <span className="mx-2 text-gray-300 hidden md:inline">|</span> 
                         <br className="md:hidden" /> {/* Mobile par line break taaki kate nahi */}
                          All Rights Reserved By 
                         <span className="text-pink-500 font-bold ml-1">
                            HI-BOOK STORE
                            </span>
                    </p>

                    {/* Professional Tagline */}
                    <p className="text-[9px] md:text-[10px] text-gray-400 mt-2 tracking-[0.3em] uppercase opacity-70 text-center md:text-right">
                     Crafted for the Love of Reading
                    </p>
               </div>
           </div>



</footer>
      
    </div>
  );
}

export default Footer;







import React, { forwardRef } from "react";
import { NavLink } from 'react-router-dom';


const Sidebar = forwardRef(({ showNav, setShowNav }, ref) => {

  return (
    <div ref={ref} className=" fixed md:static inset-y-0 left-0 bg-white w-64 px-8 py-6 border-r z-30 overflow-y-auto lg:translate-x-0 transform shadow-lg" >

      <div className="flex justify-between items-center">
        <img src="public/black-logo.png" className="w-36 h-12" alt="Logo" />
        {/* onClick={() => toggleSidebar(false)} */}
        <button className="text-gray-700 lg:hidden" onClick={() => setShowNav(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </button>
      </div>

      <nav className="mt-8">
        <h3 className="text-md font-semibold text-gray-600 uppercase ">
          Dashboard
        </h3>
        <div className="mt-2 -mx-3">
          <NavLink className="flex justify-between items-center px-3 py-2" to="/dashboard">
            <span className="text-sm font-medium text-gray-700">Anasayfa</span>
            {/* <span className="text-sm font-semibold text-gray-700">23</span> */}
          </NavLink>
          <NavLink className="flex justify-between items-center px-3 py-2 bg-gradient-to-r from-purple-700 to-blue-500 rounded" to="/domain">
            <span className="text-sm font-medium text-white">Domain-Hosting</span>
            {/* <span className="text-sm font-semibold text-gray-700">23</span> */}
          </NavLink>
          <NavLink className="flex justify-between items-center px-3 py-2" to="/password">
            <span className="text-sm font-medium text-gray-700">Şifreler</span>
            {/* <span className="text-sm font-semibold text-gray-700">23</span> */}
          </NavLink>
          <NavLink className="flex justify-between items-center px-3 py-2" to="/settings">
            <span className="text-sm font-medium text-gray-700">Ayarlar</span>
            {/* <span className="text-sm font-semibold text-gray-700">23</span> */}
          </NavLink>


        </div>

      </nav>

    </div>
  );
});

export default Sidebar;
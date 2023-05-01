import React, { forwardRef } from "react";
import { NavLink } from 'react-router-dom';
import {
  FaTh,
  FaKey,
  FaListAlt,
  FaTools
}from "react-icons/fa";



const Sidebar = forwardRef(({ showNav, setShowNav }, ref) => {
  
  const menuItem=[
    {
        path:"/dashboard",
        name:"Dashboard",
        icon:<FaTh/>
    },
    {
        path:"/domain",
        name:"Domain-Hosting",
        icon:<FaListAlt/>
    },
    {
        path:"/password",
        name:"Şifreler",
        icon:<FaKey/>
    },
    {
        path:"/settings",
        name:"Ayarlar",
        icon:<FaTools/>
    },
    
]


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
        <h3 className="text-md font-semibold text-gray-900 uppercase ">
          Dashboard
        </h3>
        <div className="mt-6 -mx-3">

          {
          menuItem.map((item,index) =>(
            <NavLink className="flex items-center px-3 py-2 text-gray-700" activeclassName="active" to={item.path}>
           <span className="">{item.icon}</span>
            <span className="text-sm font-medium  ml-4">{item.name}</span>
          </NavLink>
          ))
          }

        </div>

      </nav>

    </div>
  );
});

export default Sidebar;
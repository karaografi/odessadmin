import React from 'react'

const Topbar = ({ showNav, setShowNav }) => {
  return (
    <div>
            {/* Header */}
    <header className="border-b flex flex-col px-6 border-gray-300">
      <div className="flex justify-between py-3">

        <div className="flex items-center py-3">

          {/* Hamburger Menu */}
          <button className="text-gray-600 lg:hidden" onClick={() => setShowNav(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>



          {/* Searchbar */}
          <div className="ml-4 relative w-64 lg:ml-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />

              </svg>
            </span>
            <input className="block w-full text-sm border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400" placeholder="Search" type="text" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center">
          <button className="w-6 h-6 text-gray-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>


          </button>

          <button className="ml-6">
            <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80" alt="woman1" className="w-9 h9 rounded-full object-cover" />
          </button>
        </div>

      </div>

      {/* HeaderBottom */}
      <div className="flex justify-between items-center p-2">
        <div className="sm:flex sm:items-center">
          <h2 className="text-lg font-medium text-gray-900">Assigness</h2>
          <div className="flex items-center ml-6">
            <span className="border-2 border-white rounded-full">
              <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80" alt="woman1" className="w-6 h-6 rounded-full object-cover" />
            </span>

            <span className="-ml-2 border-2 border-white rounded-full">
              <img src="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80" alt="woman1" className="w-6 h-6 rounded-full object-cover" />
            </span>

            <span className="-ml-2 border-2 border-white rounded-full">
              <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80" alt="woman1" className="w-6 h-6 rounded-full object-cover" />
            </span>

            <span className="-ml-2 border-2 border-white rounded-full">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80" alt="woman1" className="w-6 h-6 rounded-full object-cover" />
            </span>

          </div>
        </div>

        <div className="flex items-center">
          <button className="flex pl-2 pr-4 py-2 ml-5 font-medium text-sm text-white hover:from-purple-600 hover:to-blue-400  rounded-md bg-gradient-to-r from-purple-700 to-blue-500 items-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>


            <span className="ml-1">New Item</span>
          </button>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Topbar
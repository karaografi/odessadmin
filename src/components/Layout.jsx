import React,{useState,useEffect,Fragment} from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import { Transition } from '@headlessui/react'
import Topbar from './Topbar';
import { Outlet } from 'react-router';


export default function Layout() {


    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    function handleResize() {
        if(innerWidth <= 768) {
            setShowNav(false);
            setIsMobile(true);
        }else {
            setShowNav(true);
            setIsMobile(false);
        }
    }

    useEffect(() => {
        if(typeof window != undefined) {
            addEventListener("resize",handleResize);
        }

        return () => {
            removeEventListener("resize",handleResize);
        };
    },[]);

  return (
    <div className='flex h-screen'>

<Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Sidebar showNav={showNav} setShowNav={setShowNav} />
      </Transition>

    
    <div className='flex flex-col flex-1 min-w-0'>
    <Topbar showNav={showNav} setShowNav={setShowNav} />
    <Outlet />
    {/* <Main className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">
            <Outlet />
        </div>

    </Main> */}
    </div>

    </div>
  )
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const {pathname}=useLocation()
   
  return (
    <div className="w-16 h-full text-white mx-1 flex flex-col gap-3 text-xs fixed mt-2">
      <Link 
        className={`p-2 rounded-2xl flex justify-center items-center ${pathname==="/"?'bg-gradient-to-r from-[#ff6e02] to-[#747411]': 'bg-[rgb(85,36,0)]'} hover:bg-black transition duration-200 ease-in-out`}
        to="/"
      >
        Casino
      </Link>
      <Link 
        className={`p-2 rounded-2xl flex justify-center items-center ${pathname==="/all-games/slots"?'bg-gradient-to-r from-[#ff6e02] to-[#747411]': 'bg-[rgb(85,36,0)]'} hover:bg-black transition duration-200 ease-in-out`}
        to="/all-games/slots"
      >
        Slot
      </Link>
    </div>
  );
};

export default Sidebar;

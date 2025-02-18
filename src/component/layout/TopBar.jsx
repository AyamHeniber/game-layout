import React from 'react'
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="w-full z-10 fixed mt-[80px] rounded-2xl text-xs bg-gray-900 flex justify-evenly text-white p-2 md:p-3 overflow-auto "> 
            <Link className=" block py-1 px-4 hover:text-[rgb(247,180,30)]" to="/">Event</Link>
            <Link className=" block py-1 px-4 hover:text-[rgb(247,180,30)]" to="/">Announcement</Link>
            <Link className=" block py-1 px-4 hover:text-[rgb(247,180,30)] text-nowrap" to="/">My Page</Link>
        </div>
    );
}

export default TopBar
import { Link, NavLink, Outlet } from "react-router-dom";
import JavascriptSvg from '../assets/javascript.svg'
import React from 'react';

export default function Introductie() {
    return (
        <div className="flex w-full h-full text-white">
            <div className="min-w-60 h-full border-1 border-r border-[#252625] hidden lg:inline-block">
                <div className="w-full border-b border-[#252625]">
                    <p className="p-2 px-5 text-xl relative">
                        Introductie
                        <i className="bi bi-chevron-down absolute right-5 my-auto"></i>
                    </p>
                </div>

                <div className="flex flex-col text-gray-500">
                    <NavLink to={'/introductie/apparatuur.js'} className={({ isActive }) => isActive ? "text-white" : "" }>
                        <div className="px-5 py-2 hover:bg-[#212123] hover:text-white">
                            <div className="flex gap-2">
                                <img className="w-5 rounded-sm" src={JavascriptSvg} />
                                <p>apparatuur.js</p>
                            </div>
                        </div>
                    </NavLink>
                    
                    <NavLink to={'/introductie/persoon.js'} className={({ isActive }) => isActive ? "text-white" : "" }>
                        <div className="px-5 py-2 hover:bg-[#212123] hover:text-white">
                            <div className="flex gap-2">
                                <img className="w-5 rounded-sm" src={JavascriptSvg} />
                                <p>persoon.js</p>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to={'/introductie/werk.js'} className={({ isActive }) => isActive ? "text-white" : "" }>
                        <div className="px-5 py-2 hover:bg-[#212123] hover:text-white">
                            <div className="flex gap-2">
                                <img className="w-5 rounded-sm" src={JavascriptSvg} />
                                <p>werk.js</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="w-full h-full overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}
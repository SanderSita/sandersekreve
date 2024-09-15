import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);

    const navigate = useNavigate();

    const goToIntroductie = (e) => {
        e.preventDefault();
        navigate('/introductie/persoon.js'); 
        setShowMobileDropdown(false)
    };

    const handleNavLinkClick = () => {
        setShowMobileDropdown(false); 
    };

    return (
        <div className="w-full text-xl bg-black z-50 text-gray-500 rounded-t-md border-b border-1 border-[#252625] lg:relative sticky top-0">
            <div className="mx-auto flex items-center h-full lg:justify-start justify-between">
                <Link onClick={handleNavLinkClick} to={'/'} className="cursor-pointer lg:w-60 p-5 border-r border-[#252625] text-white">
                    Sander Sekreve
                </Link>
                
                <div className="absolute inset-x-0 top-[4.31rem] lg:relative px-0 lg:top-0">
                    <ul className={`lg:flex flex-row dropdown-list max-h-0 lg:max-h-none ${showMobileDropdown ? ' bg-black border-1 border-b border-white max-h-[28rem] lg:border-none' : 'invisible lg:visible'}`}>
                        <li className='invisible'>.</li>
                        <NavLink onClick={handleNavLinkClick} className={({ isActive }) => isActive ? " border-b-2 border-white text-white" : "" } to={'/'}>
                            <div className="cursor-pointer pr-20 p-5 border-r border-[#252625]">
                                hallo
                            </div>
                        </NavLink>
                        <NavLink onClick={goToIntroductie} className={({ isActive }) => isActive ? " lg:border-b-2 lg:border-white text-white" : "" } to={'/introductie'}>
                            <div className="cursor-pointer pr-20 p-5 pb-2 border-r border-[#252625]">
                                introductie
                            </div>
                        </NavLink>
                        <ul className="lg:hidden flex flex-col gap-2">
                            <NavLink onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "lg:border-b-2 lg:border-white text-white" : "" } to={'/introductie/apparatuur.js'}>
                                <div className="cursor-pointer pr-20 px-5">
                                    {"> apparatuur.js"}
                                </div>
                            </NavLink>
                            <NavLink onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "lg:border-b-2 lg:border-white text-white" : "" } to={'/introductie/persoon.js'}>
                                <div className="cursor-pointer pr-20 px-5">
                                    {"> persoon.js"}
                                </div>
                            </NavLink>
                            <NavLink onClick={handleNavLinkClick} className={({ isActive }) => isActive ? "lg:border-b-2 lg:border-white text-white" : "" } to={'/introductie/werk.js'}>
                                <div className="cursor-pointer pr-20 px-5">
                                    {"> werk.js"}
                                </div>
                            </NavLink>
                        </ul>
                    
                        <NavLink onClick={handleNavLinkClick} className={({ isActive }) => isActive ? " border-b-2 border-white text-white" : "" } to={'/projecten'}>
                            <div className="cursor-pointer pr-20 p-5 border-r border-[#252625]">
                                projecten
                            </div>
                        </NavLink>

                        {/* <NavLink onClick={handleNavLinkClick} className={({ isActive }) => isActive ? " border-b-2 border-white text-white" : "" } to={'/bezoekers'}>
                            <div className="cursor-pointer pr-20 p-5 border-r border-[#252625]">
                                bezoekers
                            </div>
                        </NavLink> */}
                        
                        <li className='invisible'>.</li>
                    </ul>
                </div>
                <div className="p-3 px-5 my-auto lg:hidden cursor-pointer" onClick={() => setShowMobileDropdown(!showMobileDropdown)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:hidden scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
            </div>
        </div>
    );
}
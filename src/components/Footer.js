import React from 'react';

export default function Footer() {
  return (
    <div className='w-full flex justify-between border-t border-t-[#252625] rounded-t-md lg:rounded-md bottom-0 lg:absolute sticky text-gray-400 z-50 bg-black'>
        <div className='flex'>
            <a className='p-1 flex gap-1 px-2 hidden md:flex'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-lg my-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 4C15.57 4 14 5.57 14 7.5c0 1.554 1.025 2.859 2.43 3.315-.146.932-.547 1.7-1.23 2.323-1.946 1.773-5.527 1.935-7.2 1.907V8.837c1.44-.434 2.5-1.757 2.5-3.337C10.5 3.57 8.93 2 7 2S3.5 3.57 3.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C3.5 20.43 5.07 22 7 22s3.5-1.57 3.5-3.5c0-.551-.14-1.065-.367-1.529 2.06-.186 4.657-.757 6.409-2.35 1.097-.997 1.731-2.264 1.904-3.768C19.915 10.438 21 9.1 21 7.5 21 5.57 19.43 4 17.5 4zm-12 1.5C5.5 4.673 6.173 4 7 4s1.5.673 1.5 1.5S7.827 7 7 7s-1.5-.673-1.5-1.5zM7 20c-.827 0-1.5-.673-1.5-1.5a1.5 1.5 0 0 1 1.482-1.498l.13.01A1.495 1.495 0 0 1 7 20zM17.5 9c-.827 0-1.5-.673-1.5-1.5S16.673 6 17.5 6s1.5.673 1.5 1.5S18.327 9 17.5 9z"></path></svg>
                <p>main</p>
            </a>
            <a className='p-1 border-l border-l-[#252625] px-2 hidden md:flex'>
                <i className="bi bi-arrow-repeat my-auto"></i>
            </a>
            <a className='p-1 border-l border-l-[#252625] px-2 flex gap-1 hidden md:flex'>
                <i className="bi bi-x-circle my-auto"></i>
                0
                <i className="bi bi-exclamation-triangle"></i>
                0
            </a>

            <a href='mailto:sandersekreve@gmail.com' className='p-1 border-l border-[#252625] px-2 flex gap-1 hover:text-white hidden md:flex'>
                <i className="bi bi-circle-fill text-green-500 text-sm my-auto"></i>
                <p>Altijd beschikbaar!</p>
            </a>
            
            <a href='https://www.linkedin.com/in/sander-sekreve-2880aa189/' target='_blank' className='p-1 flex gap-1 px-2 border-l border-l-[#252625] hover:text-white'>
                <i className="bi bi-linkedin"></i>
                <p>Sander</p>
            </a>

            <a href='https://github.com/SanderSita' target='_blank' className='p-1 flex gap-1 px-2 border-l border-r border-[#252625] hover:text-white'>
                <i className="bi bi-github"></i>
                <p>SanderSita</p>
            </a>
        </div>

        <div className='hidden md:flex'>
            <a className='p-1 px-2 border-r border-l border-[#252625] flex gap-1'>
                <i className="bi bi-braces"></i>
                <p>JavaScript</p>
            </a>
            <a className='p-1 px-2'>
                <i className="bi bi-bell"></i>
            </a>
        </div>
    </div>
  );
}
import React, { useState } from 'react';
import wave from '../assets/wave.png';
import logo from '../assets/logo.png';
import img2 from '../assets/2nd.png'

const Navbar = () => {
  const [Bar, setBar] = useState(false);
  const [ToggleDropdown, setToggleDropdown] = useState(false);
  return (
    <>
      <div className="relative">
        {/* Background wave image positioned absolutely */}
        <img src={wave} className="absolute top-0 left-0 w-full h-52 lg:h-64" alt="Wave" />

        {/* Flex container for logo and menu icon */}
        <div className="flex items-center justify-between p-3 relative z-10 w-full">
          <img src={logo} className="h-20" alt="Logo" />


          <i className="fa-solid fa-bars fa-lg lg:hidden"
          onClick={()=>setBar(!Bar)}
          ></i>

          <div className='hidden lg:block lg:flex justify-center gap-3 font-medium'>
            <div>ABOUT US</div>
            <div>OUR PROGRAMS</div>
            <div>UDDESHYA</div>
            <div className='lg:hidden xl:block'>RESOURCE FOR PARENTS</div>
            <button className='bg-[#FBAE17] p-2 rounded-lg'>BOOK A CONSULTATION</button>
            <button className='bg-[#582B80] p-2 rounded-lg'>CONTACT US</button>
          </div>
        </div>
        <div>
          <img src={img2} className='absolute top-14 -z-50 h-52 w-full xl:h-72 lg:h-64' />
        </div>
      </div>
      

      {/* mobile */}
      <div
        className={`fixed top-[4.5rem] right-0 h-[100vh] w-56 pl-2 shadow-lg bg-white transition-transform duration-300 z-50 ${Bar ? "-translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="text-[#07004D]" >
          <li className='bg-[#582B80] p-4 text-white'>MENU</li>
          <li className="my-4">
            <a>
              Home
            </a>
          </li>

          <li className="my-4">
            <a  >
              ABOUT
            </a>
          </li>


          <li className="my-4">
            <a 
            > OUR PROGRAMS</a>
          </li>

          <li className="my-4">
            <a >UDDESHYA</a>
          </li>
          <li className="my-4">
            <a > RESOURCE FOR PARENTS</a>
          </li>
          <li className="my-4">
            <a >BOOK A CONSULTATION</a>
          </li>
          <li className="my-4">
            <a >CONTACT US</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react'
import logo from '../assets/synovus-logo-red.svg'
import { Link, useNavigate } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"




export default function NavBar() {
    const [dropdown, setDropdown] = useState(false)
    const [toggleBar, setToggleBar] = useState(false)
   
    const navigate = useNavigate()

    const handleToggle = () =>{
        setToggleBar(!toggleBar)
    }
    const handleLogToggle = () => {
      navigate('/login')
    }

    const handleMouseEnter = () => {
      setDropdown(true);
    };

    const handleMouseLeave = () => {
      setDropdown(false);
    };
  return (
    <>
      <header className="bg-slate-50">
        <div className="max-w-7xl px-9 flex justify-between items-center py-4">
          <button onClick={handleToggle} className="lg:hidden">
            {handleToggle ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
          <div className="max-w-[120px]">
            <img src={logo} alt="" className="w-full" />
          </div>
          <nav>
            <ul className="lg:flex hidden items-center justify-center gap-8">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="">Personal </Link>{" "}
                {dropdown && <span>Show some text</span>}
              </li>
              <li className="hover:text-red-500">
                <Link to="">Small Business</Link>
              </li>
              <li className="hover:text-red-500">
                <Link to="">Corporate & Commercial</Link>
              </li>

              <li className="hover:text-red-500">
                <Link to="">Wealth</Link>
              </li>
              <li className="hover:text-red-500">
                <Link to="">About us</Link>
              </li>
            </ul>
          </nav>
          <div className="lg:flex hidden gap-4 text-xs text-gray-400">
            <p>find location</p>
            <p>contact us</p>
          </div>
          <button className="lg:hidden" onClick={handleLogToggle}>
            Log In
          </button>
          
        </div>
        {toggleBar && (
          <div className="bg-[#3a3a3a] fixed w-full h-full lg:hidden ">
            <ul className="flex flex-col font-bold text-white text-xl px-9 ">
              <li className="hover:text-red-500 mt-4 mb-7">
                <Link to="">Personal </Link>
              </li>
              <li className="hover:text-red-500  mb-7">
                <Link to="">Small Business</Link>
              </li>
              <li className="hover:text-red-500  mb-7">
                <Link to="">Corporate & Commercial</Link>
              </li>

              <li className="hover:text-red-500  mb-7">
                <Link to="">Wealth</Link>
              </li>
              <li className="hover:text-red-500  mb-7">
                <Link to="">About us</Link>
              </li>
            </ul>
            <div className="font-semibold text-white text-sm fixed bottom-0 bg-[#333333] w-full">
              <div className="px-9 py-2">
                <p className="mt-4 mb-4">find location</p>
                <p className="mb-4">contact us</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

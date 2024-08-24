import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { IoPerson} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

function Navbar({theme,dark}) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleNav = () => {
    setShowMenu(!showMenu);
  }
  const navigate_wishlist = ()=>{
    navigate('/wishlist')
  }

  const handle_theme = ()=>{
    if(theme=='dark'){
      dark('light')
    }
    else{
      dark('dark')
    }

  }
  return (
    <div className=''>
      <div className={`flex justify-between items-center h-24 max-w-6xl mx-auto px-4 ${theme==='light'?'text-zinc-800 ':'text-zinc-300 '}`}>
        {/* Left side - Demo text */}
        <h1 className='text-3xl px-4 karla-bold'>r
          <span className="text-red-500">e</span>
          c
          <span className="text-red-500">i</span>
          p
          <span className="text-red-500">e</span>
          </h1>

        {/* Middle - Home link */}
        <ul className='flex-grow flex justify-start md:ml-16'>
          <li className='p-4  w-20 h-10 justify-center items-center pt-2 text-gray-500  duration-200 cursor-pointer font-semibold hover:text-black'>Home</li>
          <li className='p-4  w-20 h-10 justify-center items-center pt-2 text-gray-500  duration-200 cursor-pointer font-semibold hover:text-black'>menu</li>
          <li className='md:block lg:block p-4  w-20 h-10 justify-center items-center pt-2 text-gray-500  duration-200 cursor-pointer font-semibold hover:text-black sm:block hidden' onClick={navigate_wishlist}>wishlist</li>
                  {/* <li>
                  <svg display="none">
          <symbol id="light" viewBox="0 0 24 24">
            <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(0,12,12)" />
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(45,12,12)" />
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(90,12,12)" />
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(135,12,12)" />
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(180,12,12)" />
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(225,12,12)" />
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(270,12,12)" />
              <line x1="12" y1="17" x2="12" y2="20" transform="rotate(315,12,12)" />
            </g>
            <circle fill="currentColor" cx="12" cy="12" r="5" />
          </symbol>
          <symbol id="dark" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.1,14.9c-3-0.5-5.5-3-6-6C8.8,7.1,9.1,5.4,9.9,4c0.4-0.8-0.4-1.7-1.2-1.4C4.6,4,1.8,7.9,2,12.5c0.2,5.1,4.4,9.3,9.5,9.5c4.5,0.2,8.5-2.6,9.9-6.6c0.3-0.8-0.6-1.7-1.4-1.2C18.6,14.9,16.9,15.2,15.1,14.9z" />
          </symbol>
        </svg>
        <label className="switch">
          <input className="switch__input" type="checkbox" role="switch" name="dark" />
          <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
            <use href="#light" />
          </svg>
          <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
            <use href="#dark" />
          </svg>
          <span className="switch__inner"></span>
          <span className="switch__inner-icons">
            <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
              <use href="#light" />
            </svg>
            <svg className="switch__icon" width="24px" height="24px" aria-hidden="true">
              <use href="#dark" />
            </svg>
          </span>
          <span className="switch__sr">Dark Mode</span>
        </label>
                  </li> */}
                  <li>
                  <button onClick={handle_theme} className="py-2 px-4">
          {theme==='light'?<BsMoon title="dark" className="text-gray-600 cursor-pointer" size={20}   />:<BsSun title="light" className="text-gray-400 cursor-pointer" size={20}  />}
          </button>
                  </li>
        </ul>

        {/* Right side - Sign Up and Login buttons */}
        <ul className='hidden md:flex items-center gap-[2vw]'>
      <li className='flex items-center p-4 mx-2 w-30 h-10 justify-center text-amber-400 rounded-xl hover:bg-white shadow-2xl hover:shadow duration-200 cursor-pointer hover:text-black'>
        <IoPerson className='mr-2' />Sign Up
      </li>
      <li className='p-4 mx-2 bg-amber-300 w-24 h-10 justify-center items-center pt-2 text-black rounded-xl hover:bg-amber-400 shadow-2xl hover:shadow duration-200 cursor-pointer'>
        Login
      </li>
    </ul>


        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {showMenu ? <IoCloseCircle size={30} /> : <CiMenuFries size={30} />}
        </div>

        {/* Mobile Menu */}
        {showMenu ? (
          <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-zinc-900 ease-in-out duration-700 md:hidden z-50'>
            <h1 className='w-full text-3xl text-white p-4'>Demo</h1>
            <ul className='pt-2 uppercase'>
              <li className='p-4 border-b border-zinc-100 text-amber-400'>Home</li>
              <li className='p-4 border-b border-zinc-100 text-amber-400'>Sign Up</li>
              <li className='p-4 border-b border-zinc-100 text-amber-400'>Login</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar;

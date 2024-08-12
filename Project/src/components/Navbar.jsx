import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { IoPerson} from "react-icons/io5";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleNav = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className=''>
      <div className='flex justify-between items-center h-24 max-w-6xl mx-auto px-4 text-zinc-800'>
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
          <li className='md:block lg:block p-4  w-20 h-10 justify-center items-center pt-2 text-gray-500  duration-200 cursor-pointer font-semibold hover:text-black sm:block hidden'>wishlist</li>
        </ul>

        {/* Right side - Sign Up and Login buttons */}
        <ul className='hidden md:flex items-center gap-[2vw]'>
      <li className='flex items-center p-4 mx-2 w-30 h-10 justify-center text-amber-400 rounded-xl hover:bg-white shadow-2xl hover:shadow duration-200 cursor-pointer hover:text-black'>
        <IoPerson className='mr-2' />Sign Up
      </li>
      <li className='p-4 mx-2 bg-amber-300 w-24 h-10 justify-center items-center pt-2 text-black-600 rounded-xl hover:bg-amber-400 shadow-2xl hover:shadow duration-200 cursor-pointer'>
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

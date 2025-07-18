import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Navbar() {
    const navigate=useNavigate();

    const {token,setToken,userData} = useContext(AppContext)

    const [showMenu,setshowMenu]=useState(false)
    // const [token,settoken] = useState(true)

    const logout = () =>
    {
        setToken(false)
        localStorage.removeItem('token')
    }
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-v-grey-400'>
        <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt='' />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>
                    HOME
                </li>
                <hr className=" hidden border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto"></hr>
            </NavLink>
             <NavLink to='/doctors'>
                <li className='py-1'>
                    ALL DOCTORS
                </li>
                <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto"></hr>
            </NavLink>
             <NavLink to='/about'>
                <li className='py-1'>
                    ABOUT
                </li>
                <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto"></hr>
            </NavLink>
             <NavLink to="/contact">
                <li className='py-1'>
                    CONTACT
                </li>
                <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto"></hr>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'> 
            {
                token && userData
                ? <div className='flex items-center gap-2 cursor-pointer group relative'> 
                    <img className="w-8 rounded-full" src={userData.image} alts="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alts="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>  
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'> 
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div> : <button onClick={()=>navigate('/login')}className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block'>CREATE ACCOUNT</button> 
          }
          <img onClick={() => setshowMenu(true)} className="w-6 md:hidden"src={assets.menu_icon} alt='' />
       {/*------------------- Mobile Menu ------------------- */}
<div className={`${showMenu ? 'fixed w-full h-full top-0 right-0 z-20 bg-white' : 'w-0 h-0 overflow-hidden'} md:hidden transition-all duration-300`}>
    <div className='flex items-center justify-between px-5 py-6'>
        <img className='w-36' src={assets.logo} alt="" />
        <img className='w-7 cursor-pointer' onClick={() => setshowMenu(false)} src={assets.cross_icon} alt="" />
    </div>
    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <NavLink onClick={() => setshowMenu(false)} to='/'><p className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>HOME</p></NavLink>
        <NavLink onClick={() => setshowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>ALL DOCTORS</p></NavLink>
        <NavLink onClick={() => setshowMenu(false)} to='/about'><p className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>ABOUT</p></NavLink>
        <NavLink onClick={() => setshowMenu(false)} to='/contact'><p className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>CONTACT</p></NavLink>
    </ul>
</div>

        </div>
    </div> 
  )
}

export default Navbar
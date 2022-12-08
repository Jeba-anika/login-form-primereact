import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const menu = useRef(null);
    const [isHidden, setIsHidden] = useState(false)


    const items = <>
        <div >
            <button className='h-full p-0 hover:border-b-2 hover:border-black'>Home</button>
        </div>
        <div >
            <button className='h-full  p-0 hover:border-b-2 hover:border-black'>Article</button>
        </div>
        <div >
            <button className='h-full  p-0 hover:border-b-2 hover:border-black'>Download</button>
        </div>
        <div >
            <button className='h-full  p-0 hover:border-b-2 hover:border-black'>Pricing</button>
        </div>
    </>

    const toggle = ()=>{
        setIsHidden(!isHidden)
    }

    return (
        <div className='flex justify-evenly items-center gap-4 shadow '>
            <div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='lg:flex lg:gap-6 md:flex md:gap-6 sm:hidden hidden'>
                {items}
            </div>
            <div className='lg:hidden md:hidden rounded-full hover:bg-slate-300 p-1 w-8 h-8 justify-center flex hover:border'>
                <button className='lg:hidden md:hidden' onClick={toggle}><RxHamburgerMenu></RxHamburgerMenu></button>
            </div>
            <div className={`lg:hidden md:hidden  ${isHidden ? 'sm:flex flex flex-col sm:flex-col absolute top-[70px] z-10 bg-white gap-4 w-96 px-10 py-4 shadow-md ' : 'sm:hidden hidden z-0'}`}>
                {items}
            </div>

            <div className='flex gap-2'>
                <button className='border py-1 px-4 bg-green-800 text-white hover:bg-green-700'><Link to='/register'>Register</Link></button>
                <button className='border py-1 px-4 bg-green-800 text-white hover:bg-green-700'><Link to='/login'>Login</Link></button>
            </div>
        </div>
    );
};

export default NavBar;
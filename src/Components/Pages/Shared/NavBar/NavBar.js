import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-center mt-4 gap-4'>
            <button className='border py-1 px-4 bg-green-800 text-white hover:bg-green-700'><Link to='/register'>Register</Link></button>
            <button className='border py-1 px-4 bg-green-800 text-white hover:bg-green-700'><Link to='/'>Login</Link></button>
        </div>
    );
};

export default NavBar;
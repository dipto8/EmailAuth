import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLinks = 
    <>
         <li><NavLink to='/login'>Login</NavLink></li>
         <li><NavLink to='/register'>Register</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Email Auth</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
            <li>
           
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;
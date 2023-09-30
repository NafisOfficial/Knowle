import React from 'react';
import logo from '../../../assets/photos/logo1-removebg-preview.png'
import logo2 from '../../../assets/photos/7272693-removebg.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-300">
                <div className="navbar-start">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn bg-blue-300 border-0 hover:bg-blue-300 drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <img src={logo} className='h-16 w-16' alt="" />
                    <img src={logo2} className='h-12 w-22' alt="" />
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <div className="avatar hidden">
                        <div className="w-8">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <NavLink to='/login' className="btn btn-ghost btn-circle" onClick='./login'>
                        login
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
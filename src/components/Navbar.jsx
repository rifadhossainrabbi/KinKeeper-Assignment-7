import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { WiTime3 } from 'react-icons/wi';
import { BiHomeAlt2 } from 'react-icons/bi';
import MyNavLinks from './MyNavLinks';

const Navbar = () => {
  const navItems = [
    {
      path: '/',
      text: 'Home',
      icon: <BiHomeAlt2 size={20} />,
    },
    {
      path: '/timeline',
      text: 'Timeline',
      icon: <WiTime3 size={25} />,
    },
    {
      path: '/stats',
      text: 'Stats',
      icon: <BsGraphUp size={20} />,
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
  
      {/* Nav Logo */}
      <div className="navbar-start">
        <a className="text-xl md:text-2xl font-semibold">
          Keen
          <span className="bg-[#32584b] bg-clip-text text-transparent">
            Keeper
          </span>
        </a>
      </div>


      <div className="navbar-end">
        {/* Mobile Dropdown */}
        <div className="dropdown md:hidden lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems.map((item, ind) => (
              <li key={ind}>
                <MyNavLinks to={item.path}>
                  {item.icon}
                  <span>{item.text}</span>
                </MyNavLinks>
              </li>
            ))}
          </ul>
        </div>


        {/* Desktop style */}
        <div className="hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item, ind) => (
              <li key={ind}>
                <MyNavLinks to={item.path}>
                  {item.icon}
                  <span>{item.text}</span>
                </MyNavLinks>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

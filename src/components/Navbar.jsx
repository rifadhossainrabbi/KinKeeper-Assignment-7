import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { WiTime3 } from 'react-icons/wi';
import MyNavLinks from './MyNavLinks';
import { BiHomeAlt2 } from 'react-icons/bi';

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
    <div className="bg-base-100 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-3 md:flex-row lg:flex-row items-center md:justify-between py-3 w-full md:max-w-6xl mx-auto px-4">
        {/* Nav Text */}
        <div className="flex-1">
          <a>
            <div className="flex text-3xl font-semibold">
              <span>Keen</span>
              <span className="bg-[#32584b] bg-clip-text text-transparent">
                Keeper
              </span>
            </div>
          </a>
        </div>
        {/* Nav links */}
        <div className="flex flex-row sm:flex-row md:flex-row gap-3 order-1 md:order-2">
          {navItems.map((item, ind) => (
            <MyNavLinks key={ind} to={item.path}>
              {item.icon}
              {item.text}
            </MyNavLinks>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

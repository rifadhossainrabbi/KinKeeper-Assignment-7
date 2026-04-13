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
      <div className="navbar container mx-auto">
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
        <div className="flex gap-3">
          {navItems.map((item, ind) => (
            <MyNavLinks key={ind} to={item.path}>
              {item.icon}{item.text}
            </MyNavLinks>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

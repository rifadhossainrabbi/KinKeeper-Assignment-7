import React from 'react';
import { NavLink } from 'react-router';

const MyNavLinks = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex gap-1 px-3 py-2 rounded-md items-center font-semibold pb-2 ${isActive ? 'bg-[#244d3f] text-white' : ''}`
      }>
      {children}
    </NavLink>
  );
};

export default MyNavLinks;
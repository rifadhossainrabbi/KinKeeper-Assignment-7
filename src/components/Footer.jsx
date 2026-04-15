import React from 'react';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import FooterLogo from '../assets/KeenKeeper.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="bg-[#244d3f] text-white py-10">
      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-8/12 mx-auto ">
        <div className="space-y-4">
          <img src={FooterLogo} className="mx-auto" alt="Footer Logo" />
          <p className="text-center text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="text-center">
            <p className="text-2xl mb-3">Social Links</p>
            <div className="flex gap-4 justify-center items-center mt-2">
              <Link className="p-3 rounded-full bg-white">
                <RiInstagramFill color="black" size={25} />
              </Link>
              <Link className="p-3 rounded-full bg-white">
                <BiLogoFacebookSquare color="black" size={25} />
              </Link>
              <Link className="p-3 rounded-full bg-white">
                <FaXTwitter color="black" size={25} />
              </Link>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="divider before:bg-gray-500 after:bg-gray-500 my-6"></div>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between text-gray-400">
          <p className='text-center md:text-left lg:text-left'>© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-3">
            <li>Privacy Policy</li>
            <li>Terms fo Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

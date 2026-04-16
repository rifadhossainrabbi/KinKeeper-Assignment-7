import React from 'react';
import { GoPlus } from 'react-icons/go';

const AddFriend = () => {
  return (
    <div className="max-w-11/12 md:max-w-10/12 lg:max-w-8/12 mx-auto pt-12">
      <div className=" space-y-6">
        <h1 className="text-5xl font-semibold text-center">
          Friends to keep close in your life
        </h1>
        <p className="w-full md:w-[48%] mx-auto text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244d3f] text-white flex items-center justify-center mx-auto">
          <GoPlus size={25} />
          Add Friend
        </button>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
          <div className="px-5 py-7 shadow bg-white rounded-md">
            <h1
              className="text-xl
             font-semibold">
              10
            </h1>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
          <div className="p-5 shadow bg-white rounded-md">
            <h1
              className="text-xl
             font-semibold">
              3
            </h1>
            <p className="text-[#64748B]">On Track</p>
          </div>
          <div className="p-5 shadow bg-white rounded-md">
            <h1
              className="text-xl
             font-semibold">
              6
            </h1>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
          <div className="p-5 shadow bg-white rounded-md">
            <h1
              className="text-xl
             font-semibold">
              12
            </h1>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
      </div>
      <div className="divider mt-6 mb-6"></div>
    </div>
  );
};

export default AddFriend;

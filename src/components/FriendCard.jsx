import React from 'react';

const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags } = friend;
  console.log(friend);
  return (
    <div className="bg-white shadow-xl p-6 rounded-md space-y-1">
      <img
        src={picture}
        className="w-26 h-26 rounded-full mx-auto"
        alt={name}
      />
      <p className="text-center font-semibold text-2xl">{name}</p>
      <p className="text-center text-[#64748B]">{days_since_contact}d ago</p>
      <div className="flex gap-3 justify-center items-center">
        {tags.map((tag, ind) => (
          <p className="bg-[#cbfadb] px-3 py-1 rounded-full" key={ind}>
            {tag}
          </p>
        ))}
      </div>
      <div className="flex justify-center">
        <p
          className={`text-center ${
            status == 'almost due'
              ? 'bg-[#efad44] px-3 py-1 mt-3 text-white rounded-full inline-block'
              : status === 'overdue'
                ? 'bg-red-500 px-3 py-1 mt-3 text-white rounded-full inline-block'
                : status === 'on-track'
                  ? 'bg-[#244d3f] px-3 py-1 mt-3 text-white rounded-full inline-block'
                  : ''
          }`}>
          <span className="justify-center mx-auto">{status}</span>
        </p>
      </div>
    </div>
  );
};

export default FriendCard;

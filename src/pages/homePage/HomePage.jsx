import React from 'react';
import AddFriend from './AddFriend';
import AllFriends from './AllFriends';

const HomePage = () => {
  return (
    <div className="bg-[#f8fafc]">
      <AddFriend />
      <AllFriends />
    </div>
  );
};

export default HomePage;
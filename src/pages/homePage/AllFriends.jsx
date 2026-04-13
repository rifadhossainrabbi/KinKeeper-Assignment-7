import React from 'react';
import useFriends from '../../hooks/useFriends';
import FriendCard from '../../components/FriendCard';
import { HashLoader } from 'react-spinners';

const AllFriends = () => {
  const { friends, loading } = useFriends();
  console.log(friends, loading);
  return (
    <div className="max-w-8/12 mx-auto pb-14">
      <h1 className="text-2xl font-semibold">Your friends</h1>

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <HashLoader />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 mt-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;

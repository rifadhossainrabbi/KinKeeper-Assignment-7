import React from 'react';
import useFriends from '../../hooks/useFriends';
import FriendCard from '../../components/FriendCard';
import { HashLoader } from 'react-spinners';

const AllFriends = () => {
  const { friends, loading } = useFriends();
  // console.log(friends, loading);
  return (
    <div className="max-w-11/12 md:max-w-10/12 lg:max-w-8/12 mx-auto pb-14">
      <h1 className="text-2xl font-semibold">Your friends</h1>

      {loading ? (
        <div className="flex justify-center items-center my-10">
          <HashLoader color="blue" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;

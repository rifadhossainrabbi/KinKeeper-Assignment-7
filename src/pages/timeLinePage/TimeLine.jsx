import React, { useContext } from 'react';
import { FriendsContextInfo } from '../../context/FriendsContext';

const TimeLine = () => {
  const { friendsCard, setFriendsCard } = useContext(FriendsContextInfo)
  console.log(friendsCard, setFriendsCard);
  return (
    <div>
      TimeLine
    </div>
  );
};

export default TimeLine;
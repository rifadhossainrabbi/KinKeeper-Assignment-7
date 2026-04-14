import React, { createContext, useState } from 'react';

export const FriendsContextInfo = createContext();

const FriendsContext = ({ children }) => {
  const [friendsCard, setFriendsCard] = useState([]);
  const data = {
    friendsCard, 
    setFriendsCard,
  }
  return (
    <FriendsContextInfo.Provider value={data}>{children}</FriendsContextInfo.Provider>
  );
};

export default FriendsContext;
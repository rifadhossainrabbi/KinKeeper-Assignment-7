import React, { useEffect, useState } from 'react';

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      console.log(data, "Data from UseEffect");

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 500)
    };
    fetchData();
  }, []);

  return {friends, loading};
};

export default useFriends;

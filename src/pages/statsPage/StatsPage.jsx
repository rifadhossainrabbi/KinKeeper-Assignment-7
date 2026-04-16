import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContextInfo } from '../../context/FriendsContext';

const StatsPage = () => {
  const { friendsCard } = useContext(FriendsContextInfo);
  console.log(friendsCard);
  let callLength = 0;
  let textLength = 0;
  let videoLength = 0;
  friendsCard.map((card) => {
    if (card.actionType == 'Call') {
      return callLength++;
    } else if (card.actionType == 'Text') {
      return textLength++;
    } else {
      return videoLength++;
    }
  });
  console.log(callLength, textLength, videoLength);
  const data = [
    { name: 'Call', value: callLength, fill: '#244d3f' },
    { name: 'Text', value: textLength, fill: '#7f37f5' },
    { name: 'Video', value: videoLength, fill: '#37a163' },
  ];
  return callLength == 0 && textLength == 0 && videoLength == 0 ? (
    <div className="text-center min-h-[50vh] flex justify-center items-center bg-[#f8fafc]">
      <p className="text-5xl">No data added</p>
    </div>
  ) : (
    <div className="bg-[#f8fafc]">
      <div className="max-w-11/12 md:max-w-10/12 lg:max-w-8/12 mx-auto py-14">
        <h1 className="text-3xl font-bold mb-5">Friendship Analytics</h1>
        <div className="bg-white shadow rounded-md p-8">
          <p className="text-2xl font-semibold">By Interaction Type</p>
          <div className="flex justify-center">
            <PieChart
              style={{
                width: '100%',
                maxWidth: '400px',
                maxHeight: '80vh',
                aspectRatio: 1,
              }}
              responsive>
              <Pie
                data={data}
                cy="49%"
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;

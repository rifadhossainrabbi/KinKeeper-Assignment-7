import React, { useContext } from 'react';
import { FriendsContextInfo } from '../../context/FriendsContext';
// import { MdCall } from 'react-icons/md';
// import { BsFillChatLeftTextFill } from 'react-icons/bs';
// import { FaVideo } from 'react-icons/fa';
import CallImage from '../../assets/call.png';
import TextImage from '../../assets/text.png';
import VideoImage from '../../assets/video.png';

const TimeLine = () => {
  const { friendsCard, setFriendsCard } = useContext(FriendsContextInfo);
  console.log(friendsCard, setFriendsCard);
  // const today = new Date();
  // const due = new Date(friendsCard.map((item) => item.next_due_date));

  // // Formating data to human Readable
  // const formattedDate = due.toDateString();
  const handleImagesIcon = (type) => {
    if (type == 'Call') {
      return CallImage;
    } else if (type == 'Text') {
      return TextImage;
    } else {
      return VideoImage;
    }
  };
  return friendsCard.length === 0 ? (
    <div className="text-center min-h-[50vh] flex justify-center items-center bg-[#f8fafc]">
      <p className="text-5xl">No data added</p>
    </div>
  ) : (
    <div className="bg-[#f8fafc]">
      <div className="max-w-8/12 mx-auto py-20">
        <h1 className="text-3xl font-semibold mb-3">Timeline</h1>

        <div className="space-y-5">
          {friendsCard.map((item, ind) => (
            <div
              key={ind}
              className="bg-white shadow-xl p-6 rounded-md flex items-center gap-4">
              <div>
                <img
                  src={handleImagesIcon(item.actionType)}
                  alt={item.actionType}
                  className="w-10 h-10"
                />
              </div>

              <div>
                <h1 className="text-xl text-gray-500">
                  <span className="text-[#244D3F] font-semibold mr-1">
                    {item.actionType}
                  </span>
                  with {item.name}
                </h1>

                <p>{new Date().toDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;

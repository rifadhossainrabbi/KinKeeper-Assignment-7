import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { HashLoader } from 'react-spinners';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { PiArchive } from 'react-icons/pi';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';
import { FiVideo } from 'react-icons/fi';
import { FriendsContextInfo } from '../../context/FriendsContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const DetailPage = () => {
  const { friendsCard, setFriendsCard } = useContext(FriendsContextInfo);
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const expectedId = friends.find((friend) => String(friend.id) == id);
  // console.log(friends, loading);
  // console.log(expectedId, 'expectedId');

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <HashLoader color="blue" />
      </div>
    );
  }
  const today = new Date();
  const due = new Date(expectedId.next_due_date);

  const diffTime = today - due;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Formating data to human Readable
  const formatted = due.toDateString();

  const handleFriendsData = (type) => {
    const newExpectedData = {
      ...expectedId,
      actionType: type,
    };
    const friendsCardIsExists = friendsCard.find(
      (data) =>
        data.id === expectedId.id && data.actionType === type,
    );
    if (!friendsCardIsExists) {
      setFriendsCard([...friendsCard, { ...expectedId, ...newExpectedData }]);
      toast.success(`Successfully ${type} ${expectedId.name}!`);
    } else {
      toast.error(`Already added ${expectedId.name} to ${type}`)
    }
  };

  return (
    <div className="bg-[#f8fafc] py-12">
      <div className="max-w-8/12 mx-auto grid gap-6 grid-cols-12">
        {/* left side section */}
        <div className="my-10 col-span-4">
          <div className="bg-white shadow-xl p-6 rounded-md">
            <img
              src={expectedId.picture}
              className="w-26 h-26 rounded-full mx-auto mb-2"
              alt={expectedId.name}
            />
            <p className="text-center font-semibold text-2xl">
              {expectedId.name}
            </p>
            <div className="flex justify-center mb-3">
              <p
                className={`text-center ${
                  expectedId.status == 'almost due'
                    ? 'bg-[#efad44] px-3 py-1 mt-3 text-white rounded-full inline-block'
                    : expectedId.status === 'overdue'
                      ? 'bg-red-500 px-3 py-1 mt-3 text-white rounded-full inline-block'
                      : expectedId.status === 'on-track'
                        ? 'bg-[#244d3f] px-3 py-1 mt-3 text-white rounded-full inline-block'
                        : ''
                }`}>
                <span className="justify-center mx-auto">
                  {expectedId.status}
                </span>
              </p>
            </div>
            <div className="flex gap-3 justify-center items-center">
              {expectedId.tags.map((tag, ind) => (
                <p className="bg-[#cbfadb] px-3 py-1 rounded-full" key={ind}>
                  {tag}
                </p>
              ))}
            </div>
            <p className="text-center font-semibold my-2.5">
              <em>
                <q>{expectedId.bio}</q>
              </em>
            </p>
            <p className="text-center">Prefered:{expectedId.email}</p>
          </div>
          <div className="bg-white shadow-xl mt-5 rounded-md">
            <p className="flex items-center gap-1 py-2 justify-center text-center font-semibold">
              <RiNotificationSnoozeLine />
              Snooz {diffDays} days
            </p>
          </div>
          <div className="bg-white shadow-xl mt-3 py-2 rounded-md">
            <p className="flex items-center gap-1 justify-center text-center font-semibold">
              <PiArchive />
              Archive
            </p>
          </div>
          <div className="bg-white shadow-xl mt-3 rounded-md">
            <p className="flex items-center gap-1 py-2 justify-center text-center text-red-500 font-semibold">
              <RiDeleteBinLine color="red" />
              Delete
            </p>
          </div>
        </div>

        {/* Rignt side section */}
        <div className="my-10 col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="px-5 py-7 shadow bg-white rounded-md text-center">
              <h1
                className="text-2xl
             font-semibold text-[#244D3F]">
                {expectedId.days_since_contact}
              </h1>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>
            <div className="px-5 py-7 shadow bg-white rounded-md text-center">
              <h1
                className="text-2xl
             font-semibold text-[#244D3F]">
                {expectedId.goal}
              </h1>
              <p className="text-[#64748B]">Goal(days)</p>
            </div>
            <div className="px-5 py-7 shadow bg-white rounded-md text-center">
              <h1
                className="text-2xl
             font-semibold text-[#244D3F]">
                {formatted}
              </h1>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>
          <div className="bg-white shadow-xl p-6 rounded-md">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold text-[#244D3F]">
                Relationship Goal
              </p>
              <button className="btn">Edit</button>
            </div>
            <p className="text-gray-500 font-semibold">
              Connect Every{' '}
              <span className="text-black">
                {expectedId.days_since_contact} days
              </span>
              .
            </p>
          </div>
          <div className="bg-white shadow-xl p-8 rounded-md">
            <p className="text-2xl font-semibold text-[#244D3F]">
              Quick Check-In
            </p>
            <div className=" grid grid-cols-3 gap-6 mt-6">
              <div
                onClick={() => handleFriendsData('Call')}
                className="btn border-none flex items-center justify-center bg-[#f8fafc] shadow-xl p-6 rounded-md h-32">
                <p className="flex flex-col items-center justify-center gap-2 text-2xl font-semibold text-[#244D3F]">
                  <MdOutlineWifiCalling3 />
                  Call
                </p>
              </div>
              <div
                onClick={() => handleFriendsData('Text')}
                className="btn border-none flex items-center justify-center bg-[#f8fafc] shadow-xl p-6 rounded-md h-32">
                <p className="flex flex-col items-center justify-center gap-2 text-2xl font-semibold text-[#244D3F]">
                  <BsChatLeftText />
                  Text
                </p>
              </div>
              <div
                onClick={() => handleFriendsData('Video')}
                className="btn border-none flex items-center justify-center bg-[#f8fafc] shadow-xl p-6 rounded-md h-32">
                <p className="flex flex-col items-center justify-center gap-2 text-2xl font-semibold text-[#244D3F]">
                  <FiVideo />
                  Video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

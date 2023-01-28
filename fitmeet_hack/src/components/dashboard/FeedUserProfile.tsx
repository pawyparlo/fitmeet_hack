import { Link } from "react-router-dom";

const FeedUserProfile = ({ user }) => {
  return (
    <div className="bg-primaryBlack rounded-md p-4">
      <div>
        <div className="relative">
          <div className="bg-backgroundBlack rounded-md w-full h-[120px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="absolute bottom-[-40px] left-1/2 translate-x-[-50%]">
            <div className="bg-backgroundBlack flex justify-center items-center rounded-3xl w-[80px] h-[80px] border-4 border-white overflow-hidden">
              <div className="w-[68px] h-[68px] bg-primaryBlack rounded-[16px]"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex-1 text-center text-sm">
            <div className="text-gray-500">Main Sport:</div>
            <div>Running</div>
          </div>
          <div className="w-[100px]" />
          <div className="flex-1 text-center text-sm">
            <div className="text-gray-500">Level:</div>
            <div>Beginner</div>
          </div>
        </div>
        <div className="text-center mt-8">
          <h3>{user?.name}</h3>
          <span>@username</span>
        </div>
        <div className="mt-4 text-sm text-gray-400 text-center">
          Hey, I am looking for a partner/trainer who would like to help me with
          reaching my personal goal. I am currently preparing for my first 5k
          run.
        </div>
        <div className="mt-8">
          <Link
            to={"/profile"}
            className="block text-center text-white w-full rounded-md px-4 py-2 bg-backgroundBlack"
          >
            My Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedUserProfile;

import { BsSearch } from "react-icons/bs";
import ProfileBar from "./ProfileBar";

// redux import
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Conversations = () => {
  const messages = useSelector((state: RootState) => state.conversations);
  console.log(`🚀 ~ Conversations ~ messages:`, messages);

  return (
    <div className="flex flex-col mt-[107px] mx-[22px] h-screen-[107px] justify-center items-center">
      {/*------------- Page Heading  -------------*/}
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-[#45464E]">Conversations with Customers</h1>
        </div>
        <p>
          <button className="bg-[#5570F1] hover:bg-[#5570F1]/90 hover:scale-105 duration-300 text-white py-[9.5px] px-[33.5px] rounded-xl">
            New Message
          </button>
        </p>
      </div>

      {/*------------------ Contacts List Left & Message box Right ------------------ */}
      <div className="flex mt-[28.5px] justify-between w-full gap-[19px]">
        <div className="bg-white py-[22px] px-[24px] basis-[35%] border">
          <div className="flex justify-between w-full text-5">
            <p className="text-[#2C2D33]">Contacts</p>
            <p className="text-[#A6A8B1]">37</p>
          </div>
          <div className="mt-[15px]">
            <div className="flex items-center w-full h-12 py-2 px-4 border border-[#CFD3D4] rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <BsSearch className="ml-[18px] my-[14px] mr-[14px] text-xl text-[#130F26]" />
              <input
                className=" h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
          <div className="flex mt-[25px]">Chats list</div>
        </div>

        {/*------------------ Chat box ------------------ */}
        <div className="bg-white basis-[65%] px-[24px] py-[16px]">
          <ProfileBar />
        </div>
      </div>
    </div>
  );
};

export default Conversations;

// Imports
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Contacts from "./Contacts";
import ProfileBar from "./ProfileBar";

const Conversations = () => {
  // Access the 'messages' state from the Redux store using useSelector hook
  const messages = useSelector(
    (state: RootState) => state.conversations.messages
  );
  console.log(`🚀 ~ Conversations ~ messages:`, messages);

  return (
    // Main container for the Conversations component
    <div className="flex flex-col mt-[107px] mx-[22px] h-screen-[107px] justify-center items-center">
      {/* Page Heading */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-[#45464E]">Conversations with Customers</h1>
        </div>
        <p>
          {/* Button for creating a new message */}
          <button className="bg-[#5570F1] hover:bg-[#5570F1]/90 hover:scale-105 duration-300 text-white py-[9.5px] px-[33.5px] rounded-xl">
            New Message
          </button>
        </p>
      </div>

      {/* Contacts List Left & Message box Right */}
      <div className="flex basis-[35%] mt-[28.5px] justify-between w-full gap-[19px]">
        {/* Contacts Component */}
        <Contacts />

        {/* Chat box */}
        <div className="bg-white basis-[65%] px-[24px] py-[16px]">
          {/* ProfileBar Component */}
          <ProfileBar />
        </div>
      </div>
    </div>
  );
};

export default Conversations;

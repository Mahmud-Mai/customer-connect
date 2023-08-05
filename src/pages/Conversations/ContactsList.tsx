import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import ContactsListItem from "./ContactsListItem";
import { SetStateAction, useState } from "react";
import { BsSearch } from "react-icons/bs";

const ContactsList = () => {
  const conversations_data = useSelector(
    (state: RootState) => state.conversations.messages
  );
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // Update the search term whenever the user changes the value of the search input
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: searchTerm,
    });
  };

  // Filter the conversations_data based on the search query
  const filteredContacts = conversations_data.filter(({ senderName }) =>
    senderName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full h-12 py-2 px-4 border border-[#CFD3D4] rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <BsSearch className="ml-[18px] my-[14px] mr-[14px] text-xl text-[#130F26]" />
        <input
          type="text"
          className=" h-full w-full outline-none text-sm text-gray-700 pr-2"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <div className="mt-[15px]"></div>
      {filteredContacts.map(({ id, senderName, senderImg, content }) => {
        return (
          <ContactsListItem
            key={id}
            senderImg={`${senderImg}`}
            senderName={senderName}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default ContactsList;

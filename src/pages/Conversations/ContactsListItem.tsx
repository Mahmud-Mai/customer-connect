interface ListItem {
  senderName: string;
  senderImg: string;
  content: string;
}

const ContactsListItem = ({ senderName, senderImg, content }: ListItem) => {
  return (
    <div className="flex flex-row py-[12px] justify-between w-full">
      <div className="">
        <img
          src={`${senderImg}`}
          alt="profile img"
          className="w-12 h-12 rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col ml-[17px]">
        <div className="flex justify-between">
          <div className="text-[16px] text-black/60">{senderName}</div>
          <div className="bg-[#FEF5EA] text-[12px] px-[7px] py-[2px]">New</div>
        </div>
        <div className="text-black/30 text-[14px]">{content}</div>
      </div>
    </div>
  );
};

export default ContactsListItem;

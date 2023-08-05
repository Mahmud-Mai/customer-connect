import ContactsList from "./ContactsList";

const Contacts = () => {
  return (
    <div className="bg-white py-[22px] px-[24px] basis-[35%] border">
      <div className="flex justify-between w-full text-5">
        <p className="text-[#2C2D33]">Contacts</p>
        <p className="text-[#A6A8B1]">37</p>
      </div>

      <div className="flex mt-[25px]">
        <ContactsList />
      </div>
    </div>
  );
};

export default Contacts;

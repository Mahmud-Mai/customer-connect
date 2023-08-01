import { BsBellFill, BsChevronDown } from "react-icons/bs";
import profile from '../assets/profile.jpg'
import { GoHomeFill } from "react-icons/go";

const TopNav = () => {
  return (
    <div className="absolute flex flex-col w-full bg-white">
      <div className="flex justify-between py-[14px] px-[21px]">
        <h1 className="text-xl">Dashboard</h1>
        <p className="flex justify-between gap-5 items-center">
          <div className="flex gap-5 items-center bg-secondary-100/20 py-[5px] px-3">Nanny's Shop <span><BsChevronDown /> </span></div>
          <div> <BsBellFill className="text-primary-100"/> </div>
            <div> <img className="w-8 h-8 rounded-lg" src={profile} alt="profile" /> </div>
        </p>
      </div>
      <p className="pl-5 py-1"><GoHomeFill className='text-primary-100 h-4 w-4' /></p>
    </div>
  );
};

export default TopNav;

import { BsBellFill } from "react-icons/bs";
import profile from "../assets/profile.jpg";
import { GoHomeFill } from "react-icons/go";
import DropDown from "./DropDown";

const TopNav = () => {
  return (
    <div className="absolute flex flex-col w-full bg-white">
      <div className="flex justify-between py-[14px] px-[21px]">
        <h1 className="text-xl">Dashboard</h1>
        <div className="flex justify-between gap-5 items-center">
          <div className="flex gap-5 items-center bg-secondary-100/20 py-[5px] px-3">
            <DropDown
              label={"Nanny's Shop"}
              color={"#1C1D22"}
              bg_color={"#FEF5EA"}
            />
          </div>
          <div>
            {" "}
            <BsBellFill className="text-primary-100 hover:scale-110 duration-300 cursor-pointer" />{" "}
          </div>
          <div>
            {" "}
            <img
              className="w-8 h-8 rounded-lg hover:scale-110 duration-300"
              src={profile}
              alt="profile"
            />{" "}
          </div>
        </div>
      </div>
      <p className="pl-5 py-1">
        <GoHomeFill className="text-primary-100 h-4 w-4" />
      </p>
    </div>
  );
};

export default TopNav;

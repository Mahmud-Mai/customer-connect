import { BsHandbag } from "react-icons/bs";
import profile from "../../assets/profile.jpg";

const ProfileBar = () => {
  return (
    <div className="flex w-full justify-between">
      {/* Profile Bar Image  */}
      <p className="w-[60px] h-[60px]">
        <img
          className="w-full h-full rounded-lg"
          src={profile}
          alt=""
        />
      </p>

      {/* Profile Bar Details  */}
      <div className="w-full justify-between items-center space-y-3 pl-[14px]">
        {/* Column 1  */}
        <div className="flex justify-between">
          <div className="flex justify-between items-center w-full h-full">
            <div className="text-[19px]">Jane</div>
            <div className="flex gap-[14px]">
              <span className="bg-[#FEF5EA] rounded-lg text-[12px] px-[7px] py-[2px]">
                New Customer
              </span>
              <span className="bg-primary-100/10 text-primary-100  rounded-lg text-[12px] px-[7px] py-[2px]">
                View Profile
              </span>
            </div>
          </div>
        </div>
        {/* Column 2*/}
        <div className="flex justify-between">
          <div className="flex justify-between items-center w-full h-full pl-[14px]">
            <div className="relative text-[#B6BFE8] text-[14px]">
              <span className="absolute top-[6px] left-[-16px] rounded-full w-[8px]  h-[8px] bg-[#5570F1]" />
              Application
              <span className="pl-4 text-black/30">12:55am</span>
            </div>
            <div className="flex items-center">
              <BsHandbag className="text-black/50 text-lg" />
              <span className="pl-4 text-black/30">0 Orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;

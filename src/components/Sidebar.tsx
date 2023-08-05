import { FiHeadphones } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { GrLogout } from "react-icons/gr";
import logo from "../assets/Logo.png";
import MenuItem from "./MenuItem";
import { NAVITEMS as nav_items } from "../data/constants";

export interface INav {
  navMenu: {
    key: number;
    icon: JSX.Element;
    name: string;
    link: string;
    alert?: number;
  }[];
}

const Sidebar = () => {
  const renderNav = () => {
    return nav_items.map(({ id, name, icon, alert, link }) => {
      return (
        <MenuItem
          key={id}
          name={name}
          icon={icon}
          alert={alert}
          link={link}
        />
      );
    });
  };

  return (
    <aside className="hidden basis-[20.56%] bg-white w-full h-screen xl:flex flex-col px-8 pt-[14px] pb-8">
      {/* Logo  */}
      <div className="w-[124px] h-[52px]">
        <img
          className="w-full h-full"
          src={logo}
          alt="logo"
        />
      </div>
      {/* Stretch Menu Links and Support/Logout links across the screen */}
      <div className="h-screen flex flex-col justify-between">
        {/* Nav Items  */}
        <div className="flex flex-col mt-[62px]">
          <nav>{renderNav()}</nav>
        </div>
        {/* Gift & Support  */}
        <div>
          <a className="flex items-center capitalize bg-[#5E63661A] text-black-50 text-[14px] leading-[16.94px] font-normal gap-4 py-4 px-5 hover:cursor-pointer rounded-xl my-4">
            <div>
              <FiHeadphones />
            </div>
            <div>Contact Support</div>
          </a>
          <a className="flex flex-col bg-secondary-100/20 capitalize text-black-50  font-normal gap-4 py-4 px-5 hover:cursor-pointer rounded-xl my-4">
            <div className="flex items-center text-[14px] leading-[16.94px] gap-4">
              <span>
                <GoGift />
              </span>
              <span>Free Gift Awaits you!</span>
            </div>
            <div className="text-[14px]">Upgrade your account</div>
          </a>

          {/* Logout  */}
          <div className="flex capitalize text-[#CC5F5F] text-[14px] leading-[16.94px] font-normal hover:cursor-pointer">
            <span className="w-1/2 h-full py-[11px] px-[15px]">
              <a className="flex items-center gap-2">
                <div>
                  <GrLogout />
                </div>
                <div>Logout</div>
              </a>
            </span>
            <span className="w-1/2 h-full py-[11px] px-[15px]"></span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

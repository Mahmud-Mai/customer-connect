import { BsGridFill } from "react-icons/bs";
import { PiHandbag } from "react-icons/pi";
import { GrLogout } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { FiFolderMinus, FiHeadphones } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { GoGear, GoGift } from "react-icons/go";
import logo from "../assets/Logo.png";
import MenuItem from "./MenuItem";

export interface INav {
  navMenu: {
    id: number;
    icon: JSX.Element;
    name: string;
    link: string;
    alert?: number;
  }[];
}

const NAVITEMS = [
  { id: 0, name: "dashboard", link: "dashboard", icon: <BsGridFill /> },
  { id: 1, name: "orders", link: "orders", icon: <PiHandbag />, alert: 3 },
  { id: 2, name: "customers", link: "customers", icon: <LuUsers /> },
  { id: 3, name: "inventory", link: "inventory", icon: <FiFolderMinus /> },
  {
    id: 4,
    name: "conversations",
    link: "conversations",
    icon: <AiOutlineMessage />,
    alert: 16,
  },
  { id: 5, name: "settings", link: "settings", icon: <GoGear /> },
];

const Sidebar = () => {
  const renderNav = () => {
    return NAVITEMS.map(({ id, name, icon, alert, link }) => {
      return (
        <MenuItem
          id={id}
          name={name}
          icon={icon}
          alert={alert}
          link={link}
        />
      );
    });
  };

  return (
    <aside className="hidden  basis-[20.56%] bg-white w-full h-screen lg:flex flex-col px-8 pt-[14px] pb-8">
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
            <p>
              <FiHeadphones />
            </p>
            <p>Contact Support</p>
          </a>
          <a className="flex flex-col bg-secondary-100/20 capitalize text-black-50  font-normal gap-4 py-4 px-5 hover:cursor-pointer rounded-xl my-4">
            <p className="flex items-center text-[14px] leading-[16.94px] gap-4">
              <span>
                <GoGift />
              </span>
              <span>Free Gift Awaits you!</span>
            </p>
            <p className="text-[14px]">Upgrade your account</p>
          </a>

          {/* Logout  */}
          <p className="flex capitalize text-[#CC5F5F] text-[14px] leading-[16.94px] font-normal hover:cursor-pointer">
            <span className="w-1/2 h-full py-[11px] px-[15px]">
              <a className="flex items-center gap-2">
                <p>
                  <GrLogout />
                </p>
                <p>Logout</p>
              </a>
            </span>
            <span className="w-1/2 h-full py-[11px] px-[15px]"></span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

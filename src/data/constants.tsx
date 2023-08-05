import { BsGridFill } from "react-icons/bs";
import { PiHandbag } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { FiFolderMinus } from "react-icons/fi";

export const NAVITEMS = [
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

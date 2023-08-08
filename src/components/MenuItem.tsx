import { Link } from "react-router-dom";

interface Menu {
  icon: JSX.Element;
  name: string;
  link: string;
  alert?: number;
}

const MenuItem = ({ icon, name, link, alert }: Menu) => {
  return (
    <Link
      to={link}
      className="flex items-center capitalize text-black-50 text-[14px] leading-[16.94px] font-normal gap-4 px-5 active:py-4 active:bg-primary-100 active:text-white hover:cursor-pointer rounded-xl my-4"
    >
      <span>{icon}</span>
      <span>{name}</span>
      {alert && (
        <span className="flex items-center justify-center w-6 h-6 bg-secondary-100 text-[12px] rounded-full">
          {alert}
        </span>
      )}
    </Link>
  );
};

export default MenuItem;

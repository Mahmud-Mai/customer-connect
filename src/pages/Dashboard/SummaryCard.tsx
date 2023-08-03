import { BsChevronDown } from "react-icons/bs";
// import { LuPieChart } from "react-icons/lu";

interface ISummanryCard {
  data: {
    label_1: string | JSX.Element;
    value_1: string;
    incr_1?: string;
    label_2: string;
    value_2: string;
    label_3?: string;
    value_3?: string;
    incr_2?: string;
    icon: JSX.Element;
    icon_bg: string;
  };
}

const SummaryCard = ({
  label_1,
  value_1,
  incr_1,
  label_2,
  value_2,
  label_3,
  value_3,
  incr_2,
  icon,
  icon_bg,
}: ISummanryCard["data"]) => {
  return (
    <div className="rounded-xl bg-white flex flex-col w-full px-[15px] py-[11px]">
      {/* Icon with text  */}
      <p className="flex justify-between mb-8">
        <span
          className={`bg-[${icon_bg}] flex w-9 h-9 justify-center rounded-lg items-center`}
        >
          {icon}
        </span>
        <div className="flex gap-5 items-center text-3 text-[#BEC0CA] font-normal py-[5px] px-3">
          This Week
          <span>
            <BsChevronDown />
          </span>
        </div>
      </p>
      {/* Statistics  */}
      <p className="flex justify-between w-full gap-x-8">
        {/* First column */}
        <span className="flex flex-col justify-between">
          <span className="text-[14px] text-black/30 mb-2">{label_1}</span>
          <span className="text-black-60 text-sm xl:text-xl">
            {value_1}
            <span className="text-[10px] ml-[7px] md:text-[12px] text-[#519C66]">
              {incr_1}
            </span>
          </span>
        </span>

        {/* Optional Middle Section  */}
        {label_3 && (
          <span className="flex flex-col justify-between">
            <span className="text-[14px] text-black/30 mb-2">{label_3}</span>
            <span className="text-black-60 text-base xl:text-xl">
              {value_3}
              <span className="text-[10px] ml-[7px] md:text-[12px] text-[#519C66]">
                {incr_2}
              </span>
            </span>
          </span>
        )}
        {/* Second Column  */}
        <span className="flex flex-col justify-between">
          <span className="text-[14px] text-black/30 mb-2">{label_2}</span>
          <span className="text-black-60 text-base xl:text-xl">
            {value_2}{" "}
            <span className="text-[10px] ml-[7px] md:text-[12px] text-[#519C66]">
              {incr_2}
            </span>
          </span>
        </span>
      </p>
    </div>
  );
};

export default SummaryCard;

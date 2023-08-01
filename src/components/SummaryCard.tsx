import { BsChevronDown } from "react-icons/bs"
import { LuPieChart } from "react-icons/lu"

const SummaryCard = () => {
  return (
            <div className="bg-white flex flex-col w-full px-[15px] py-[11px]">
          {/* Icon with text  */}
          <p className="flex justify-between mb-8">
            <span className="flex w-9 h-9 justify-center bg-[#5570F11F]/20 rounded-lg items-center"><LuPieChart className='w-5 h-5 text-primary-100'/></span> 
          <div className="flex gap-5 items-center text-3 text-black/10 font-normal py-[5px] px-3">This Week <span><BsChevronDown /> </span></div>
              </p>
          {/* Statistics  */}
          <p className="grid grid-cols-2 w-full gap-x-8">
            {/* First column */}
            <span className="flex flex-col justify-between">
              <span className="text-[14px] text-black/30 mb-2">Sales</span>
              <span className="text-black-60 text-base lg:text-xl">₦4,000,000.00</span>
            </span>
            {/* Second Column  */}
            <span className="flex flex-col justify-between">
                            <span className="text-[14px] text-black/30 mb-2">Volume</span>
              <span className="text-black-60 text-base lg:text-xl">450 <span className="text-[12px] text-[#519C66]">+20.000%</span> </span>
            </span>
          </p>
        </div>
  )
}

export default SummaryCard

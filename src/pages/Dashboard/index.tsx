// Icons import
import { FiShoppingCart } from "react-icons/fi";
import { FiFolderMinus } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { PiHandbag } from "react-icons/pi";

// Components import
import SummaryBarChart from "../../components/SummaryBarChart";
import OrdersList from "../../components/OrdersList";
import SummaryCard from "../../components/SummaryCard";
import MarketingPieChart from "../../components/MarketingPieChart";
import DropDown from "../../components/DropDown";

const Dashboard = () => {
  return (
    <div className="mx-[19px] mt-[112px] mb-5">
      {/*--------------------- ROW 1: Statistics Summary  -------------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/*------- Row 1: First two boxes left  -------*/}
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <SummaryCard
                label_1={"Sales"}
                value_1={"N4,000,000"}
                incr_1={"+20.00%"}
                label_2={"Volume"}
                value_2={"450"}
                incr_2={"+20.00%"}
                icon={
                  <FiFolderMinus className="text-[#5570F1] bg-[#5570F11F]" />
                }
                icon_bg={"#5570F11F"}
              />
            </div>
            <div>
              <SummaryCard
                label_1={"Customers"}
                value_1={"1,250"}
                incr_1={"+15.00%"}
                label_2={"Active"}
                value_2={"1,180"}
                incr_2={"+85%"}
                icon={<LuUsers className="text-[#1C1D22] bg-[#FFCC9129]" />}
                icon_bg={"#FFCC9129"}
              />
            </div>
          </div>
        </div>
        {/*------- Row 1: last box right  -------*/}
        <div className="col-span-2">
          <SummaryCard
            label_1={"All Orders"}
            value_1={"450"}
            label_2={"Completed"}
            value_2={"455"}
            label_3={"Pending"}
            value_3={"5"}
            icon={<PiHandbag className="text-[#1C1D22] bg-[#FFCC9129]" />}
            icon_bg={"#FFCC9129"}
          />
        </div>
      </div>

      {/*--------------------- ROW 2: Charts And Recent Orders  -------------------------*/}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {/* -------Row 2.(1): Pie Chart and two Summary Cards  -------*/}
        <div className="col-span-3">
          <div className="row-span-1 grid grid-cols-2 gap-4">
            {/*--- Pie Chart  Section---*/}
            <div className="rounded-xl  col-span-1 bg-white">
              <MarketingPieChart />
            </div>
            <div className="col-span-1 grid grid-rows-2 gap-[19px]">
              <p>
                {/*--- All products  Section ---*/}
                <div className="bg-primary-100 rounded-xl text-white flex flex-col w-full px-[15px] py-[11px]">
                  {/* Icon with text  */}
                  <p className="flex justify-between mb-8">
                    <span className="flex w-9 h-9 justify-center bg-[#7087f3] p-[2px] rounded-lg items-center">
                      <FiFolderMinus className="w-5 h-5 text-white bg-primary-100/10" />
                    </span>
                  </p>
                  {/*---  Statistics  Section ---*/}
                  <p className="grid grid-cols-2 w-full gap-x-8">
                    {/* First column */}
                    <span className="flex flex-col justify-between">
                      <span className="text-sm lg:text-[14px] mb-2">
                        All products
                      </span>
                      <span className=" text-base lg:text-xl">45</span>
                    </span>
                    {/* --- Second Column  ---*/}
                    <span className="flex flex-col justify-between">
                      <span className="text-[14px] mb-2">Active</span>
                      <span className="text-base lg:text-xl">
                        32
                        <span className="text-[12px] ml-[7px]">
                          +24.00%0%
                        </span>{" "}
                      </span>
                    </span>
                  </p>
                </div>
              </p>
              <p>
                <SummaryCard
                  label_1={
                    <span className="text-[#CC5F5F]">Abandoned Cart</span>
                  }
                  value_1={"20%"}
                  incr_1={"+0.00%"}
                  label_2={"Customers"}
                  value_2={"30"}
                  icon={
                    <FiShoppingCart className="text-[#1C1D22] bg-[#FFCC9129]" />
                  }
                  icon_bg={"#FFCC9129"}
                />
              </p>
            </div>
          </div>

          {/*------- Row 2.(2): Summary & This Week  -------*/}
          <div className="row-span-1 grid grid-cols-1 rounded-xl bg-white px-5 mx-auto mt-5">
            {/* Heading  */}
            <div className="px-5 py-[15px]">
              <div className="flex justify-between">
                <div className="flex justify-between gap-[21px] items-center">
                  <h2>Summary</h2>
                  <DropDown
                    label={"This Week"}
                    color={"#5570F1"}
                    bg_color={"#5570F114"}
                  />
                </div>
                {/* 7 days section  */}
                <DropDown
                  label="7 days"
                  color="#1C1D22"
                  bg_color={"#fff"}
                />
              </div>
              {/* Bar Chart */}
              <div className="mt-9">
                <SummaryBarChart />
              </div>
            </div>
          </div>
        </div>

        {/*------- Row 2.(2): Recent Orders  -------*/}
        <div className="bg-white rounded-xl col-span-3 lg:col-span-2 row-span-2">
          <OrdersList />
        </div>
      </div>

      {/* End of Section  */}
    </div>
  );
};

export default Dashboard;

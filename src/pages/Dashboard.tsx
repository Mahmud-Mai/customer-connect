// import { BsChevronDown } from "react-icons/bs";
// import { LuPieChart } from "react-icons/lu";

import SummaryBarChart from "../components/SummaryBarChart";
import OrdersList from "../components/OrdersList";
import SummaryCard from "../components/SummaryCard";
import MarketingPieChart from "../components/MarketingPieChart";

const Dashboard = () => {
  return (
    <div className="mx-[19px] mt-[112px] mb-5">
      {/* Summary Cars  */}
      <div className="grid grid-flow-col gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <SummaryCard />
            </div>
            <div>
              <SummaryCard />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <SummaryCard />
        </div>
      </div>

      {/* Charts And Recent Orders  */}
      <div className="grid grid-flow-col gap-4 mt-5">
        <div className="col-span-3">
          <div className="row-span-1 grid grid-cols-2 gap-4">
            <div className="col-span-1 bg-white">
              <MarketingPieChart />
            </div>
            <div className="col-span-1 grid grid-rows-2 gap-[19px]">
              <p>
                <SummaryCard />
              </p>
              <p>
                <SummaryCard />
              </p>
            </div>
          </div>
          <div className="row-span-1 grid grid-cols-1 bg-white px-5  mx-auto mt-5">
            Marketing
            <SummaryBarChart />
          </div>
        </div>
        <div className=" col-span-2 row-span-2">
          <OrdersList />
        </div>
      </div>

      {/* End of Section  */}
    </div>
  );
};

export default Dashboard;

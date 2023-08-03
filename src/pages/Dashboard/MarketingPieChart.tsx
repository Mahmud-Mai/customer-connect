import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import DropDown from "../../components/DropDown";

const data = [
  { name: "Group A", value: 35 },
  { name: "Group B", value: 10 },
  { name: "Group C", value: 55 },
];
const COLORS = ["#FFCC91", "#97A5EB", "#5570F1"];

const MarketingPieChart = () => {
  return (
    <>
      <div className="flex justify-between px-5 py-[23px] gap-[21px] items-center">
        <h2>Marketing</h2>
        <DropDown
          label={"This Week"}
          color={"#5570F1"}
          bg_color={"#5570F114"}
        />
      </div>
      <div className="flex justify-between px-8 text-[11px] text-[#A6A8B1]">
        <p className="relative">
          <span className="absolute top-[4px] left-[-16px] rounded-full w-[8px]  h-[8px] bg-[#5570F1]" />{" "}
          Application
        </p>
        <p className="relative">
          <span className="absolute top-[4px] left-[-16px] rounded-full w-[8px]  h-[8px] bg-[#97A5EB]" />{" "}
          Purchase
        </p>
        <p className="relative">
          <span className="absolute top-[4px] left-[-16px] rounded-full w-[8px]  h-[8px] bg-[#FFCC91]" />{" "}
          Retention
        </p>
      </div>
      <div className="relative flex h-[250px] justify-center items-end">
        <div className="absolute rounded-full top-[22px] h-[210px] w-[210px] p-5 bg-[#EEF0FA]">
          <div className="absolute rounded-full top-[55px] left-[58px] h-[94px] w-[94px] p-5 bg-white" />
        </div>
        <ResponsiveContainer height={250}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={67}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default MarketingPieChart;

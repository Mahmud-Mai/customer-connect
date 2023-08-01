import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 35 },
  { name: "Group B", value: 10 },
  { name: "Group C", value: 55 },
];
const COLORS = ["#FFCC91", "#97A5EB", "#5570F1"];

const MarketingPieChart = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={55}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
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
  );
};

export default MarketingPieChart;

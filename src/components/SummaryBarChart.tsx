// import React, { PureComponent } from 'react';
import { BarChart, Bar, YAxis, XAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Sept 10",
    uv: 90000,
  },
  {
    name: "Sept 11",
    uv: 40000,
  },
  {
    name: "Sept 12",
    uv: 60000,
  },
  {
    name: "Sept 13",
    uv: 20000,
  },
  {
    name: "Sept 14",
    uv: 80000,
  },
  {
    name: "Sept 15",
    uv: 40000,
  },
  {
    name: "Sept 16",
    uv: 80000,
  },
];

const SummaryBarChart = () => {
  return (
    <>
      <ResponsiveContainer height={200}>
        <BarChart
          width={700}
          height={200}
          data={data}
        >
          <XAxis
            dataKey="name"
            stroke="#BEC0CA"
          />

          <YAxis stroke="#BEC0CA" />
          <Bar
            dataKey="uv"
            barSize={13}
            fill="#5570F1"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SummaryBarChart;

import { createSlice } from "@reduxjs/toolkit";

const pie_data = [
  { name: "Group A", value: 35 },
  { name: "Group B", value: 10 },
  { name: "Group C", value: 55 },
];

const initialState = {
  input: pie_data,
};

export const pieChartSlice = createSlice({
  name: "pieChartSlice",
  initialState,
  reducers: {},
});

export default pieChartSlice.reducer;

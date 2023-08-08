import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import orders_data from "../../data/data";
import iphone_1 from "../../assets/iphone_1.jpg";
import iphone_2 from "../../assets/iphone_2.jpg";
import iphone_3 from "../../assets/iphone_3.jpg";

const orders_data = [
  {
    id: 0,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦730,000.00",
    qty: 1,
    imgSrc: iphone_1,
    status: "Pending",
  },
  {
    id: 1,
    label: "iPhone 12 Pro Max",
    date: "12 Sept 2023",
    price: "₦710,000.00",
    qty: 3,
    imgSrc: iphone_2,
    status: "Confirmed",
  },
  {
    id: 2,
    label: "iPhone 13 Pro",
    date: "12 Sept 2023",
    price: "₦780,000.00",
    qty: 4,
    imgSrc: iphone_3,
    status: "Pending",
  },
  {
    id: 3,
    label: "iPhone 12",
    date: "12 Sept 2023",
    price: "₦830,000.00",
    qty: 2,
    imgSrc: iphone_1,
    status: "Confirmed",
  },
  {
    id: 4,
    label: "iPhone 14",
    date: "12 Sept 2023",
    price: "₦950,000.00",
    qty: 8,
    imgSrc: iphone_2,
    status: "Pending",
  },
  {
    id: 5,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦730,000.00",
    qty: 1,
    imgSrc: iphone_3,
    status: "Pending",
  },
  {
    id: 6,
    label: "iPhone 13",
    date: "12 Sept 2023",
    price: "₦710,000.00",
    qty: 3,
    imgSrc: iphone_2,
    status: "Pending",
  },
];

// Interface for now
interface OrderData {
  id: number;
  label: string;
  date: string;
  price: string;
  status: string;
  qty: number;
  imgSrc: string;
}

type State = {
  orders: Array<OrderData>;
};

const initialState: State = {
  orders: orders_data,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Not implemented for now
    addOrder(state, action: PayloadAction<OrderData>) {
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    },
    removeOrder(state, action: PayloadAction<number>) {
      // Fixed the type of 'action'
      const orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      return {
        ...state,
        orders,
      };
    },
  },
});

export const { addOrder, removeOrder } = ordersSlice.actions; // Exporting the action creators

export default ordersSlice.reducer;

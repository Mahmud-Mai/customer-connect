import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "../features/conversations/conversationsSlice";
import ordersReducer from "../features/orders/ordersSlice";
import pieChartReducer from "../features/pieChart/pieChartSlice";

export const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    orders: ordersReducer,
    pieChart: pieChartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

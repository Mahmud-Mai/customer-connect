import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const conversationsSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addConversation(state, action) {
      // Not implemented for now
      state.messages.push(action.payload);
    },
    removeConversation(state, action) {
      state.messages = state.messages.filter((message) => {
        return message.id !== action.payload;
      });
    },
  },
});

export default conversationsSlice.reducer;

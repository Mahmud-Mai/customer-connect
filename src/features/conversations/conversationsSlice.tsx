import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
};

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addConversation(state, action) {
      state.conversations.push(action.payload);
    },
    removeConversation(state, action) {
      state.conversations = state.conversations.filter((conversation) => {
        return conversation.id !== action.payload;
      });
    },
  },
});

export default conversationsSlice.reducer;

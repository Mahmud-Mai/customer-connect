import { createSlice } from "@reduxjs/toolkit";
import profile_1 from "../../assets/profile_1.jpg";
import profile_2 from "../../assets/profile_2.jpg";
import profile_3 from "../../assets/profile_3.jpg";
import profile_4 from "../../assets/profile_4.jpg";

interface Message {
  id: string;
  senderId: number;
  senderName: string;
  senderImg: string;
  content: string;
  timestamp: number;
}

// Dummy data for messages
const messages: Message[] = [
  {
    id: "message_1",
    senderId: 0,
    senderName: "Alice Doe",
    content: "Hello John!",
    senderImg: profile_1,
    timestamp: Date.now() - 60000,
  },
  {
    id: "message_2",
    senderId: 0,
    senderName: "John Smith",
    content: "Hi Alice!",
    senderImg: profile_2,
    timestamp: Date.now() - 120000,
  },
  {
    id: "message_3",
    senderId: 0,
    senderName: "Jane Peters",
    content: "Hey! This is Jane",
    senderImg: profile_3,
    timestamp: Date.now() - 600000,
  },
  {
    id: "message_4",
    senderId: 0,
    senderName: "Sarah Robert",
    content: "Guys!! It's Sarah here",
    senderImg: profile_4,
    timestamp: Date.now() - 600000,
  },
];

const initialState = {
  messages: messages,
  searchQuery: "",
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
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = conversationsSlice.actions;
export default conversationsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  displayName: string;
  profilePictureUrl: string;
  online: boolean;
}

const initialState: User[] = [
  {
    id: "user_1",
    displayName: "John Doe",
    profilePictureUrl: "https://example.com/profile/user1.jpg",
    online: true,
  },
  {
    id: "John",
    displayName: "John Smith",
    profilePictureUrl: "https://example.com/profile/user2.jpg",
    online: false,
  },
  {
    id: "Alice",
    displayName: "Alice Doe",
    profilePictureUrl: "https://example.com/profile/user1.jpg",
    online: true,
  },
  {
    id: "Jane",
    displayName: "Jane Peters",
    profilePictureUrl: "https://example.com/profile/user2.jpg",
    online: false,
  },
  {
    id: "Sarah",
    displayName: "Sarah Robert",
    profilePictureUrl: "https://example.com/profile/user1.jpg",
    online: true,
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

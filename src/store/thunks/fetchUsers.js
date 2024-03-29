import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:3001/users");

  await pause(1000);
  return response.data;
});

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export { fetchUsers };

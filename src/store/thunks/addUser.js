import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUsers = createAsyncThunk("users/addUsers", async () => {
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.name.fullName(),
  });
  return response.data;
});

export { addUsers };

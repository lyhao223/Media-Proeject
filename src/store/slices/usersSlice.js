import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUsers } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUsers";
const usersSlices = createSlice({
  name: "user",
  initialState: { data: [], isLoading: false, error: null },
  extraReducers(builder) {
    //fetchUsers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //addUsers

    builder.addCase(addUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    });

    builder.addCase(addUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    //deleteUsers
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload.id);
      state.isLoading = false;
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlices.reducer;

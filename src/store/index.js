import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/usersApi";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);
export * from "./slices/usersSlice";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/photosApi";

export {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation,
} from "./apis/usersApi";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import userReducer from "../slices/user";

const reducer = {
	auth: authReducer,
	message: messageReducer,
	user: userReducer,
};

export const store = configureStore({
	reducer: reducer,
	devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

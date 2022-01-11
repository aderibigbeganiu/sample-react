import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user/user.service";
import { setMessage } from "./message";

export const getUser = createAsyncThunk(
	"user/getUser",
	async ({ empty }: any, thunkAPI) => {
		try {
			const data = await userService.getUser();
			return { user: data };
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue(await error.json());
		}
	}
);

export interface UserState {
	user: any;
}

const initialState: UserState = {
	user: {},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUser.fulfilled, (state, action) => {
			state.user = action.payload;
		});
		builder.addCase(getUser.rejected, (state, action) => {
			state.user = null;
		});
	},
});

const { reducer } = userSlice;
export default reducer;

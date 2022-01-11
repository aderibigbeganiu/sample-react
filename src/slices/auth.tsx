import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import authService from "../services/auth/auth.service";
import { getUser } from "./user";

const authToken = JSON.parse(localStorage.getItem("authToken")!);

export const register = createAsyncThunk(
	"auth/register",
	async ({ username, email, password1, password2 }: any, thunkApi) => {
		try {
			const response = await authService.register(
				username,
				email,
				password1,
				password2
			);
			thunkApi.dispatch(setMessage(response.data.message));
			return response.data;
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkApi.dispatch(setMessage(message));
			return thunkApi.rejectWithValue(await error.json());
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async ({ username, password }: any, thunkAPI) => {
		try {
			const data = await authService.login(username, password);
			thunkAPI.dispatch(getUser({}));
			return { authToken: data };
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.non_field_errors) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue(await error.json());
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logout();
});

export interface AuthState {
	isLoggedIn: boolean;
	authToken: any;
}

const initialState: AuthState = authToken
	? { isLoggedIn: true, authToken }
	: { isLoggedIn: false, authToken: null };

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(register.fulfilled, (state, action) => {
			state.isLoggedIn = false;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.isLoggedIn = false;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoggedIn = true;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isLoggedIn = false;
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			state.isLoggedIn = false;
			state.authToken = null;
		});
	},
});

const { reducer } = authSlice;

export default reducer;

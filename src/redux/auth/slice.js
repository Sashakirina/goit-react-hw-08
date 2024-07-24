import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {
			name: null,
			email: null,
		},
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
	},
	extraReducers: (builder) =>
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(register.rejected, (state) => {
				state.isLoggedIn = false;
				console.log("slice error");
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = "";
				state.token = "";
				state.isLoggedIn = false;
			}),
});

export const authReducer = authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const authSlice = createSlice({
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
			}),
});

export default authSlice.reducer;

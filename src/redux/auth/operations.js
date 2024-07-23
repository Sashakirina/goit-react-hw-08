import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
	"auth/register",
	async (credentials, thunkAPI) => {
		try {
			const results = await axios.post("/users/signup", credentials);
			setAuthHeader(results.data.token);
			return results.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async (credentials, thunkAPI) => {
		try {
			const results = await axios.post("/users/login", credentials);
			setAuthHeader(results.data.token);
			return results.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
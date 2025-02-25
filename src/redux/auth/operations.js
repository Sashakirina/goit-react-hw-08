import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = "";
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

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		await axios.post("/users/logout");
		clearAuthHeader();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk(
	"auth/refresh",
	async (_, thunkAPI) => {
		try {
			const {
				auth: { token },
			} = thunkAPI.getState();
			setAuthHeader(token);
			const response = await axios.get("/users/current");
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
	{
		condition: (_, { getState }) => {
			const reduxState = getState();
			const savedToken = reduxState.auth.token;
			return savedToken !== null;
		},
	}
);

import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
	key: "authSlice",
	storage,
	whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		contacts: contactsReducer,
		filters: filtersReducer,
	},
});

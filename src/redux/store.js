import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
	persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
	key: "authSlice",
	storage,
	whitelist: ["token"],
};

const contactsPersistConfig = {
	key: "contactsSlice",
	storage,
	whitelist: ["items"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedContactsRed = persistReducer(
	contactsPersistConfig,
	contactsReducer
);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		contacts: persistedContactsRed,
		filters: filtersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

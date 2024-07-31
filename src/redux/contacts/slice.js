import { createSlice } from "@reduxjs/toolkit";
import {
	fetchContacts,
	addContact,
	deleteContact,
	updateContact,
} from "./operations";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.error = null;
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state) => {
				state.error = true;
			})
			.addCase(addContact.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(addContact.rejected, (state) => {
				state.error = true;
			})
			.addCase(deleteContact.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				const index = state.items.findIndex(
					(item) => item.id === action.payload.id
				);
				state.items.splice(index, 1);
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(updateContact.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.items.push(payload);
			});
	},
});

export const contactsReducer = contactsSlice.reducer;

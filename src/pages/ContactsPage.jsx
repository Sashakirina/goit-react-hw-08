import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchForm/SearchForm";
import ContactList from "../components/ContactList/ContactList";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

function ContactsPage() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => dispatch(fetchContacts()), [dispatch]);

	return (
		<Box>
			<Box sx={{ mb: 2 }}>
				<Typography align="right">Welcome, {user.name}</Typography>

				<ContactForm />
				<SearchBox />
			</Box>
			<ContactList />
		</Box>
	);
}

export default ContactsPage;

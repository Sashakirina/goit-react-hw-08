import ContactForm from "../../components/ContactForm/ContactForm";
import SearchForm from "../../components/SearchForm/SearchForm";
import ContactList from "../../components/ContactList/ContactList";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

function ContactsPage() {
	const user = useSelector(selectUser);

	return (
		<Box>
			<Box sx={{ mb: 2 }}>
				<Typography align="right">Welcome, {user.name}</Typography>

				<ContactForm />
				<SearchForm />
			</Box>
			<ContactList />
		</Box>
	);
}

export default ContactsPage;

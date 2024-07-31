import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";

function Welcome() {
	const features = [
		"Add New Contacts",
		"Edit Contacts",
		"Delete Contacts",
		"Search	Functionality",
		"User Authentication",
	];
	return (
		<Box>
			<Typography component="h1" variant="h5">
				Phonebook
			</Typography>
			<Divider variant="middle" />
			<Typography variant="body1" sx={{ mt: 1 }}>
				Welcome to the Phonebook App, your go-to solution for managing contacts
				efficiently and effortlessly. Our home page provides an intuitive and
				streamlined interface designed to help you access all the essential
				features with ease.
			</Typography>

			<List>
				<Typography variant="h6">Key Features:</Typography>
				{features.map((item) => (
					<ListItem key={item}>
						<ListItemText primary={item} />
					</ListItem>
				))}
			</List>
			<Typography>
				Built with React, using Formik for form handling and validation, and
				Material-UI for modern, responsive design components.
			</Typography>
		</Box>
	);
}

export default Welcome;

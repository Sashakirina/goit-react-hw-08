import { Box, Typography } from "@mui/material";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

function RegisterPage() {
	return (
		<Box>
			<Typography component="h1" variant="h5" sx={{ mb: 2 }}>
				Register
			</Typography>
			<RegistrationForm />
		</Box>
	);
}

export default RegisterPage;

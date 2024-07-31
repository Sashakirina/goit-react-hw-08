import { Box, Typography } from "@mui/material";
import RegisterForm from "../components/RegisterForm/RegisterForm";

function RegisterPage() {
	return (
		<Box>
			<Typography component="h1" variant="h5" sx={{ mb: 2 }}>
				Register
			</Typography>
			<RegisterForm />
		</Box>
	);
}

export default RegisterPage;

import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
	return (
		<Box>
			<Typography component="h1" variant="h5" sx={{ mb: 2 }}>
				Log in
			</Typography>
			<LoginForm />
		</Box>
	);
}

export default LoginPage;

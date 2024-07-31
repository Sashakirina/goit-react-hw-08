import { Button } from "@mui/material";

function AuthNav() {
	return (
		<nav>
			<Button href="/register">Register</Button>
			<Button href="/login">Log In</Button>
		</nav>
	);
}

export default AuthNav;

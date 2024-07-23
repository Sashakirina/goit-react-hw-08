import { NavLink } from "react-router-dom";

function AuthNav() {
	return (
		<nav>
			<NavLink to="/register">Register</NavLink>
			<NavLink to="/login">Log In</NavLink>
		</nav>
	);
}

export default AuthNav;

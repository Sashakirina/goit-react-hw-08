import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<nav>
			<NavLink to="/contacts">Contacts</NavLink>
			<NavLink to="/">Home</NavLink>
		</nav>
	);
}

export default Navigation;

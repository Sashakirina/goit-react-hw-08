import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

function Navigation() {
	const { isLoggedIn } = useSelector(selectIsLoggedIn);
	return (
		<nav>
			{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
			<NavLink to="/">Home</NavLink>
		</nav>
	);
}

export default Navigation;

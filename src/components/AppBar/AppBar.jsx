import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

function AppBar() {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	console.log(isLoggedIn);

	return (
		<header>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	);
}

export default AppBar;

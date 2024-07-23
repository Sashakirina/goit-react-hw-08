import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

function AppBar() {
	return (
		<header>
			<Navigation />
			<UserMenu />
			<AuthNav />
		</header>
	);
}

export default AppBar;

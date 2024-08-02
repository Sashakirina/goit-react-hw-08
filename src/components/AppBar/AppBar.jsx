import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Box, Toolbar } from "@mui/material";

function AppBar() {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<Box>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}>
				<Navigation />
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</Toolbar>
		</Box>
	);
}

export default AppBar;

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Button, IconButton, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function Navigation() {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<nav>
			<Link href="/">
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}>
					<HomeIcon />
				</IconButton>
			</Link>

			{isLoggedIn && <Button href="/contacts">Contacts</Button>}
		</nav>
	);
}

export default Navigation;

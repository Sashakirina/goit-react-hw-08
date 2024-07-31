import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { Box, Button } from "@mui/material";

function UserMenu() {
	const dispatch = useDispatch();

	return (
		<Box>
			<Button type="button" onClick={() => dispatch(logout())}>
				Logout
			</Button>
		</Box>
	);
}

export default UserMenu;

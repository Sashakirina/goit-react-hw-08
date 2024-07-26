import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

function RestrictedRoute({ component: Component }) {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return isLoggedIn ? <Navigate /> : Component;
}

export default RestrictedRoute;

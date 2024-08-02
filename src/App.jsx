import "./App.css";

import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { CircularProgress } from "@mui/material";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
	const isRefreshing = useSelector(selectIsRefreshing);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<CircularProgress />
	) : (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/register"
					element={<RestrictedRoute component={<RegistrationPage />} />}
				/>
				<Route
					path="/login"
					element={<RestrictedRoute component={<LoginPage />} />}
				/>
				<Route
					path="/contacts"
					element={
						<PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />
					}
				/>
			</Routes>
		</Layout>
	);
}

export default App;

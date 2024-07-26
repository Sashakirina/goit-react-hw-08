import "./App.css";

import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
	const isRefreshing = useSelector(selectIsRefreshing);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<p>Refreshing user, please wait... </p>
	) : (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/register"
					element={<RestrictedRoute component={<RegisterPage />} />}
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

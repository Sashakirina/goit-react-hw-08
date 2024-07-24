import "./App.css";

import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/contacts" element={<ContactsPage />} />
			</Routes>
		</Layout>
	);
}

export default App;

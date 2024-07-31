import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Container } from "@mui/material";

function Layout({ children }) {
	return (
		<Container component="main" maxWidth="xs">
			<AppBar />
			<Suspense fallback={null}>{children}</Suspense>
		</Container>
	);
}

export default Layout;

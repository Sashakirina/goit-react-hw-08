import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Box, Button, TextField } from "@mui/material";
import { validationLogin } from "../../validation/validation";

function LoginForm() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: validationLogin,
		onSubmit: (values) => {
			dispatch(login(values));
		},
	});

	return (
		<Box
			component="form"
			onSubmit={formik.handleSubmit}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 2,
			}}>
			<TextField
				fullWidth
				id="email"
				name="email"
				label="Email"
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				fullWidth
				id="password"
				name="password"
				label="Password"
				type="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.password && Boolean(formik.errors.password)}
				helperText={formik.touched.password && formik.errors.password}
			/>
			<Button fullWidth color="primary" variant="contained" type="submit">
				Submit
			</Button>
		</Box>
	);
}

export default LoginForm;

import { Field, Form, Formik } from "formik";

function LoginForm() {
	const handleSubmit = () => {};
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}>
			<Form>
				<label>
					Email
					<Field name="email" type="email" />
				</label>
				<label>
					Password
					<Field name="password" type="password" />
				</label>
				<button type="submit">Login</button>
			</Form>
		</Formik>
	);
}

export default LoginForm;

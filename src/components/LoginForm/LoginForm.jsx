import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

function LoginForm() {
	const dispatch = useDispatch();

	const handleSubmit = (value, action) => {
		dispatch(login({ email: value.email, password: value.password }));
		action.resetForm();
	};
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

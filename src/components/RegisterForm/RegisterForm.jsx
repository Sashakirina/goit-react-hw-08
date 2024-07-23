import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

function RegisterForm() {
	const dispatch = useDispatch();

	const handleSubmit = (value, action) => {
		dispatch(
			register({
				name: value.name,
				email: value.email,
				password: value.password,
			})
		);
		action.resetForm();
	};
	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}>
			<Form>
				<label>
					Name
					<Field type="name" name="name" />
				</label>
				<label>
					Email
					<Field type="email" name="email" />
				</label>
				<label>
					Password
					<Field type="password" name="password" />
				</label>
				<button type="submit">Register</button>
			</Form>
		</Formik>
	);
}

export default RegisterForm;

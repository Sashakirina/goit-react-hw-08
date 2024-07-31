import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { validationContacts } from "../../validation/validation";
import { Box, Button, TextField } from "@mui/material";

function ContactForm() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			name: "",
			number: "",
		},
		validationSchema: validationContacts,
		onSubmit: (values, action) => {
			dispatch(addContact(values));
			action.resetForm();
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
				id="name"
				name="name"
				label="Name"
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
			/>
			<TextField
				fullWidth
				id="number"
				name="number"
				label="Number"
				value={formik.values.number}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.number && Boolean(formik.errors.number)}
				helperText={formik.touched.number && formik.errors.number}
			/>

			<Button fullWidth color="primary" variant="contained" type="submit">
				Add
			</Button>
		</Box>
	);
}

export default ContactForm;

import * as Yup from "yup";

export const validationLogin = Yup.object({
	email: Yup.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: Yup.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

export const validationRegistration = Yup.object({
	name: Yup.string("Enter your name")
		.min(2, " Name should be of mininmum 2 characters length")
		.required("Name is required"),
	email: Yup.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: Yup.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

export const validationContacts = Yup.object({
	name: Yup.string("Enter your name")
		.min(2, " Name should be of mininmum 2 characters length")
		.required("Name is required"),
	number: Yup.string("")
		.min(3, "Number should be of minimum 8 characters length")
		.max(50, "Number should be of max 50 characters length")
		.required("Number is required"),
});

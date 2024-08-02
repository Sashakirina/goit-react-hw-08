import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilterByName } from "../../redux/filters/selectors";
import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";

function SearchForm() {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilterByName);

	const formik = useFormik({
		initialValues: {
			query: "",
		},
	});

	return (
		<Box sx={{ mt: 2 }}>
			<TextField
				fullWidth
				name="query"
				id="query"
				label="Search"
				value={filter}
				onChange={(e) => {
					dispatch(setFilter(e.target.value));
				}}
				onBlur={formik.handleBlur}
			/>
		</Box>
	);
}

export default SearchForm;

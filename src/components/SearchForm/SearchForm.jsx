import { useId } from "react";
import style from "./SearchForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

function SearchForm() {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilter);

	const queryId = useId();

	return (
		<div className={style.container}>
			<label htmlFor={queryId}>Search</label>
			<input
				className={style.search}
				type="text"
				name="query"
				id={queryId}
				value={filter}
				onChange={(evt) => dispatch(setFilter(evt.target.value))}
			/>
		</div>
	);
}

export default SearchForm;

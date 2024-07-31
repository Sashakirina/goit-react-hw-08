import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

function ContactList() {
	const visibleContacts = useSelector(selectFilteredContacts);

	return (
		<ul>
			{visibleContacts.map(({ id, name, number }) => (
				<Contact key={id} name={name} number={number} id={id} />
			))}
		</ul>
	);
}

export default ContactList;

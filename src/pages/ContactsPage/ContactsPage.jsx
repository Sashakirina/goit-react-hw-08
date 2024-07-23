import ContactForm from "../../components/ContactForm/ContactForm";
import SearchForm from "../../components/SearchForm/SearchForm";
import ContactList from "../../components/ContactList/ContactList";

function ContactsPage() {
	console.log("contacts");
	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchForm />
			<ContactList />
		</div>
	);
}

export default ContactsPage;

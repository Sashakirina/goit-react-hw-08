import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { updateContact } from "../redux/contacts/operations";
import { useState } from "react";

function ContactEditForm({ name, number, id, onClose }) {
	const [newName, setName] = useState(name);
	const [newNumber, setNumber] = useState(number);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newName);
		console.log(id);
		dispatch(updateContact({ id, name: newName, number: newNumber }))
			.unwrap()
			.then(() => onClose());
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
				<PersonIcon sx={{}} />
				<TextField
					id="name"
					name="name"
					size="small"
					variant="standard"
					value={newName}
					onChange={(e) => setName(e.target.value)}
				/>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<Box sx={{ display: "flex", gap: 2 }}>
					<PhoneIcon />
					<TextField
						id="number"
						name="number"
						size="small"
						variant="standard"
						value={newNumber}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</Box>
				<Tooltip title="Edit">
					<IconButton type="submit">
						<EditIcon />
					</IconButton>
				</Tooltip>
			</Box>
		</Box>
	);
}

export default ContactEditForm;

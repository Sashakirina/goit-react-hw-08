import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneIcon from "@mui/icons-material/Phone";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ContactEditForm from "../ContactEditForm";

function Contact({ name, number, id }) {
	const [isEditing, setIsEditing] = useState();
	const dispatch = useDispatch();

	return (
		<Paper sx={{ p: 2, w: "inherit", mb: 2 }}>
			{isEditing ? (
				<ContactEditForm
					name={name}
					number={number}
					id={id}
					onClose={() => setIsEditing(false)}
				/>
			) : (
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
							<PersonIcon sx={{}} />
							<Typography>{name}</Typography>
						</Box>
						<Tooltip title="Edit">
							<IconButton onClick={() => setIsEditing(true)}>
								<EditIcon />
							</IconButton>
						</Tooltip>
					</Box>

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Box sx={{ display: "flex", gap: 2 }}>
							<PhoneIcon />
							<Typography>{number}</Typography>
						</Box>
						<Tooltip title="Delete">
							<IconButton onClick={() => dispatch(deleteContact(id))}>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					</Box>
				</Box>
			)}
		</Paper>
	);
}

export default Contact;

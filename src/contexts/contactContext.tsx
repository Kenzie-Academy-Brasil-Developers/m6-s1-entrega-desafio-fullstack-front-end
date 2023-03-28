import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
	IContact,
	IContactCreate,
	IContactDelete,
	IContactEdit,
} from "../entities/contact.entities";
import { api } from "../services/api";

export const ContactContext = createContext<IContactContextExports>(
	{} as IContactContextExports
);

interface IContactContextExports {
	contacts: IContact[];
	setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
	editContact_onSubmitFunction: (
		data: IContactCreate,
		contact: IContact
	) => void;
	createContact_onSubmitFunction: (data: IContactEdit) => void;
	deleteContact_onSubmitFunction: (data: IContactDelete) => void;
}

function ContactProvider({ children }) {
	const [contacts, setContacts] = useState<IContact[]>([] as IContact[]);

	useEffect(() => {
		loadContacts();
		async function loadContacts() {
			const { data } = await api.get<IContact[]>("users/contacts");
			const contacts = data;
			setContacts(contacts);
			console.log(data);
		}
	}, []);

	function createContact_onSubmitFunction(data: IContactCreate) {
		api.post<IContact>("users/contacts", { ...data })
			.then((response) => {
				const newContact = response.data;
				toast.success("Contato criado", {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setContacts([...contacts, newContact]);
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	}

	function deleteContact_onSubmitFunction(data: IContactDelete) {
		api.delete(`users/contacts/${data.id}/`)
			.then((response) => {
				toast.success("Contato deletado", {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				const deletedContact = contacts.find(
					(contact) => contact.id === data.id
				);
				const deletedContactIndex = contacts.indexOf(deletedContact);
				contacts.splice(deletedContactIndex, 1);
				setContacts([...contacts]);
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	}

	function editContact_onSubmitFunction(
		data: IContactEdit,
		contact: IContact
	) {
		const filteredData: IContactEdit = removeEmptyValuesFromContact(data);
		api.patch(`users/contacts/${contact.id}/`, filteredData)
			.then((response) => {
				toast.success("Contato atualizado", {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				const updatedContactIndex = contacts.indexOf(contact);
				contacts.splice(updatedContactIndex, 1, {
					...contact,
					...filteredData,
				});
				setContacts([...contacts]);
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					position: "top-right",
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});

		function removeEmptyValuesFromContact(contactData): IContactEdit {
			const keys = Object.keys(contactData);
			const result = {};
			for (const key of keys) {
				const value = contactData[key];
				if (value !== "") {
					result[key] = value;
				}
			}
			return result;
		}
	}

	return (
		<ContactContext.Provider
			value={{
				contacts,
				setContacts,
				createContact_onSubmitFunction,
				editContact_onSubmitFunction,
				deleteContact_onSubmitFunction,
			}}>
			{children}
		</ContactContext.Provider>
	);
}

export function useContactContext() {
	return useContext(ContactContext);
}

export default ContactProvider;

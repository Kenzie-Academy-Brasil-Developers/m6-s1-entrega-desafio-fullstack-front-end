import { useState } from "react";
import ContactProvider, {
	useContactContext,
} from "../../contexts/contactContext";
import ModalBody from "../modal-body";
import ContactsCard from "./contact-card";
import { StyledContactsContainer } from "./style";
import { BsPersonFillAdd } from "react-icons/bs";
import CreateContactForm from "./create-contact-form";

export default function ContactsContainer() {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const { contacts, setContacts } = useContactContext();

	return (
		<StyledContactsContainer>
			{modalIsOpen && (
				<ModalBody
					setModalIsOpen={setModalIsOpen}
					title={"Adicionar Contato"}>
					<CreateContactForm setModalIsOpen={setModalIsOpen} />
				</ModalBody>
			)}
			<h2 className="title">Meus contatos</h2>
			<button onClick={onClickOpenModal} className="btn-open-modal">
				<BsPersonFillAdd />
			</button>
			<div className="contact-cards-container">{LoadContacts()}</div>
		</StyledContactsContainer>
	);

	function LoadContacts() {
		if (contacts.length > 0) {
			return contacts.map((contact) => (
				<ContactsCard key={contact.id} contact={contact} />
			));
		} else {
			return <h4>Ainda não há contatos</h4>;
		}
	}

	function onClickOpenModal() {
		setModalIsOpen(true);
	}
}

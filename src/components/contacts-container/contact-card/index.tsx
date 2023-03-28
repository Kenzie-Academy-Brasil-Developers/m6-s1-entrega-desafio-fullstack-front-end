import { IContact } from "../../../entities/contact.entities";
import { StyledContactsCard } from "./style";
import { BsFillTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import ModalBody from "../../modal-body";
import { useState } from "react";
import DeleteContactConfirmation from "../delete-contact-confirmation";
import EditContactForm from "../edit-contact-form";

interface IContactsCardProps {
	contact: IContact;
}

export default function ContactsCard({ contact }: IContactsCardProps) {
	const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
	const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);

	function onClickEdit() {
		setEditModalIsOpen(true);
	}
	function onClickDelete() {
		setDeleteModalIsOpen(true);
	}

	return (
		<StyledContactsCard className="contact-card">
			{editModalIsOpen && (
				<ModalBody
					setModalIsOpen={setEditModalIsOpen}
					title={"Editar Contato"}>
					<EditContactForm
						setModalIsOpen={setEditModalIsOpen}
						contact={contact}
					/>
				</ModalBody>
			)}
			{deleteModalIsOpen && (
				<ModalBody
					setModalIsOpen={setDeleteModalIsOpen}
					title={"Deletar Contato"}>
					<DeleteContactConfirmation
						contactId={contact.id}
						setModalIsOpen={setDeleteModalIsOpen}
					/>
				</ModalBody>
			)}
			<div className="card-header">
				<h3 className="card-title">{contact.name}</h3>
				<div className="buttons-container">
					<button className="edit-btn btn" onClick={onClickEdit}>
						<MdEdit />
					</button>
					<button className="erase-btn btn" onClick={onClickDelete}>
						<BsFillTrashFill />
					</button>
				</div>
			</div>
			<div className="card-content">
				<p>
					<b>Email:</b> {contact.email}
				</p>
				{contact.phone && (
					<p>
						<b>Telefone:</b> {contact.phone}
					</p>
				)}
			</div>
		</StyledContactsCard>
	);
}

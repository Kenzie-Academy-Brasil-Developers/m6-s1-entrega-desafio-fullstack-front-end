import { useContactContext } from "../../../contexts/contactContext";
import { StyledForm } from "./style";

export default function DeleteContactConfirmation({
	setModalIsOpen,
	contactId,
}) {
	const { deleteContact_onSubmitFunction } = useContactContext();

	function onClickDeleteContact() {
		deleteContact_onSubmitFunction({ id: contactId });
		setModalIsOpen(false);
	}

	return (
		<StyledForm>
			<h2>Are you sure?</h2>
			<div className="btn-container">
				<button
					onClick={onClickDeleteContact}
					className={"btn-primary"}>
					Yes
				</button>
				<button
					onClick={() => {
						setModalIsOpen(false);
					}}
					className={"btn-third"}>
					Cancel
				</button>
			</div>
		</StyledForm>
	);
}

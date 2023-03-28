import { StyledModalBg } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface IModalBodyProps {
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
	title?: string;
}

export default function ModalBody({
	setModalIsOpen,
	children,
	title,
}: IModalBodyProps) {
	return (
		<StyledModalBg>
			<div className="modal-container">
				<div className="modal-header">
					<h3>{title ? title : "Modal sem título"}</h3>
					<button
						className="btn-close-modal"
						onClick={() => setModalIsOpen(false)}>
						{<AiOutlineCloseCircle />}
					</button>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</StyledModalBg>
	);
}

import styled from "styled-components";

export const StyledContactsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 0 10px;
	margin-top: 20px;
	.title {
		margin: 0;
	}
	.btn-open-modal {
		background-color: transparent;
		border: none;
		font-size: 2em;
		color: var(--grey1);
		cursor: pointer;
		transition: 0.2s;
	}
	.btn-open-modal:hover {
		color: var(--success);
	}
`;

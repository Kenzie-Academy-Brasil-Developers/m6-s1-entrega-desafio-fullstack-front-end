import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;
	max-width: 370px;
	gap: 20px;
	background-color: var(--grey3);
	color: var(--fontDefault);
	padding: 20px;
	border-radius: 5px;
	.btn-container {
		display: flex;
		gap: 5px;
		button {
			width: 50%;
		}
	}
`;

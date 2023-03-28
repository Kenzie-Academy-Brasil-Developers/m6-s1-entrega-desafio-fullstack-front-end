import styled from "styled-components";

export const StyledModalBg = styled.div`
	background-color: var(--modalBgColor);
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	.modal-container {
		background-color: var(--grey3);
		width: 90%;
		max-width: 400px;
		border-radius: 5px;
		overflow: hidden;
		.modal-header {
			background-color: var(--grey2);
			color: var(--fontDefault);
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 20px;
			button {
				font-size: 2em;
				color: var(--grey1);
				cursor: pointer;
				transition: 0.2s;
				background-color: transparent;
				border: none;
			}
			button:hover {
				color: white;
			}
		}
		.modal-content {
			padding: 20px;
		}
	}
`;

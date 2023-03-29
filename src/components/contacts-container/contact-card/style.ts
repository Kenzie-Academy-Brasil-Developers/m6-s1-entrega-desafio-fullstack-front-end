import styled from "styled-components";

export const StyledContactsCard = styled.div`
	border: 1px solid var(--grey2);
	background-color: var(--grey3);
	border-radius: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
	.card-header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--grey2);
		padding-bottom: 5px;
		.card-title {
			margin: 0;
		}
		.buttons-container {
			button {
				font-size: 1.4em;
				color: var(--grey1);
				background-color: transparent;
				border: none;
				cursor: pointer;
				transition: 0.2s;
			}
			button:hover {
				color: white;
			}
			.erase-btn:hover {
				color: var(--negative);
			}
		}
	}
	.card-content {
		color: #cccccc;
	}
	@media only screen and (min-width: 500px) {
		width: 400px;
	}
`;

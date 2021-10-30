import styled from "styled-components"

export const IconContainer = styled.button`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 4;
	flex: 1;
	border: none;
	background-color: transparent;

	i,
	:hover {
		cursor: pointer;
	}

	i {
		margin-bottom: 8;
	}

	:hover {
		box-shadow: out;
	}
`

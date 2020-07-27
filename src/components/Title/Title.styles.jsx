import styled from "styled-components";

export const TitleContainer = styled.div`
	background-color: #fff;
	border-radius: 10px;
	flex-grow: 2;
	display: flex;
	flex-direction: column;
	margin-left: 2px;
	border: 1.5px solid #071419;
	@media screen and (max-width: 750px) {
		margin-left: 0;
	}
`;

export const Heading = styled.h1`
	font-size: 18px;
`;

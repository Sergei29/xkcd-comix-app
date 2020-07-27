import styled from "styled-components";

export const AppContainer = styled.div`
	text-align: center;
	width: 60%;
	margin: 0 auto;
	@media screen and (max-width: 750px) {
		width: 90%;
	}
	@media screen and (max-width: 1200px) {
		width: 70%;
	}
`;

export const MainContainer = styled.main`
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	border: 1.5px solid #071419;
	margin-bottom: 6px;
`;

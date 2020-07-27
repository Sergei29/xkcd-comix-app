import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 6px;
	@media screen and (max-width: 750px) {
		flex-direction: column;
	}
`;

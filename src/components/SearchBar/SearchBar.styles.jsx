import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 3px 0;
	width: 80%;
	margin: 0 auto;
`;

export const StyledInput = styled.input`
	display: inline-block;
	border: 1.5px solid #071419;
	border-radius: 6px;
	padding: 2px 4px;
	margin: 2px 0;
	width: 100%;
	box-sizing: border-box;
`;

export const SubmitButton = styled.button`
	display: inline-block;
	border: 1.5px solid #071419;
	border-radius: 6px;
	padding: 2px 4px;
	margin: 2px 0;
	color: #fff;
	background-color: #96a8c8;
	width: 100%;
`;

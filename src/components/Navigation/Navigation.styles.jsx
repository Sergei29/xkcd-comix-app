import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
	background-color: #fff;
	border-radius: 10px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	margin-right: 2px;
	border: 1.5px solid #071419;
	@media screen and (max-width: 750px) {
		order: 2;
		margin-top: 6px;
		margin-right: 0;
	}
`;

export const Navbar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledLink = styled(NavLink)`
	display: inline-block;
	width: 50%;
	border-radius: 6px;
	text-decoration: none;
	margin: 3px 0;
	padding: 3px 6px;
	border: 1.5px solid #071419;
	background-color: #96a8c8;
	font-weight: bold;
	color: #fff;
`;

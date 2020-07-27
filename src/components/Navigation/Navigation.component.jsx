import React from "react";
import { NavigationContainer, StyledLink, Navbar } from "./Navigation.styles";
import SearchBar from "../SearchBar/SearchBar.component";

const Navigation = () => (
	<NavigationContainer>
		<Navbar>
			<StyledLink to="/">Recent Comics</StyledLink>
		</Navbar>
		<SearchBar />
	</NavigationContainer>
);

export default Navigation;

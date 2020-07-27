import React from "react";
import { NavigationContainer, StyledLink, Navbar } from "./Navigation.styles";

const Navigation = () => (
	<NavigationContainer>
		<Navbar>
			<StyledLink to="/link1">Link1</StyledLink>
			<StyledLink to="/link2">Link2</StyledLink>
			<StyledLink to="/link3">Link3</StyledLink>
		</Navbar>
		<p>comics search bar</p>
	</NavigationContainer>
);

export default Navigation;

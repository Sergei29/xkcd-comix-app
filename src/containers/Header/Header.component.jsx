import React from "react";
import Navigation from "../../components/Navigation/Navigation.component";
import Title from "../../components/Title/Title.component";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
	return (
		<HeaderContainer>
			<Navigation />
			<Title />
		</HeaderContainer>
	);
};

export default Header;

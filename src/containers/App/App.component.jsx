import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
	AppContainer,
	HeaderContainer,
	MainContainer,
	FooterContainer,
} from "./App.styles";

// components:
import Navigation from "../../components/Navigation/Navigation.component";
import Title from "../../components/Title/Title.component";
import Footer from "../Footer/Footer.component";
import RecentComicsPage from "../RecentComicsPage/RecentComicsPage.component";

function App() {
	return (
		<AppContainer>
			<BrowserRouter>
				<HeaderContainer>
					<Navigation />
					<Title />
				</HeaderContainer>
				<MainContainer>
					{/* Routing must go here for 2 pages + 404 */}
					<RecentComicsPage />
				</MainContainer>
				<FooterContainer>
					<Footer />
				</FooterContainer>
			</BrowserRouter>
		</AppContainer>
	);
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContainer, MainContainer } from "./App.styles";

// components:
import Header from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import RecentComicsPage from "../RecentComicsPage/RecentComicsPage.component";
import ComicsPage from "../ComicsPage/ComicsPage.component";

function App() {
	return (
		<AppContainer>
			<BrowserRouter>
				<Header />
				<MainContainer>
					{/* Routing must go here for 2 pages + 404 */}
					<Switch>
						<Route path="/" exact component={RecentComicsPage} />
						<Route path="/:id" exact component={ComicsPage} />
						<Route render={() => <h1>Page not found</h1>} />
					</Switch>
				</MainContainer>
				<Footer />
			</BrowserRouter>
		</AppContainer>
	);
}

export default App;

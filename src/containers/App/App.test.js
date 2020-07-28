import { shallow } from "enzyme";
import React from "react";

import App from "./App.component";

describe("App", () => {
	it("should render the component without crashing", () => {
		shallow(<App />);
	});
});

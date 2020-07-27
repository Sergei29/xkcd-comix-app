import { shallow } from "enzyme";
import React from "react";

import App from "./App";

describe("App", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});
	it("should render the component", () => {
		expect(wrapper.exists(".App")).toEqual(true);
	});
});

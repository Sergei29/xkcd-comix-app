import { shallow } from "enzyme";
import React from "react";

import Navigation from "./Navigation.component";

describe("Navigation", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Navigation />);
	});

	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

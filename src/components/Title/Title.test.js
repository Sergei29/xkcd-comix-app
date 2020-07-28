import { shallow } from "enzyme";
import React from "react";

import Title from "./Title.component";

describe("Title", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Title />);
	});

	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

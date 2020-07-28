import { shallow } from "enzyme";
import React from "react";

import Header from "./Header.component";

describe("Header", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Header />);
	});
	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

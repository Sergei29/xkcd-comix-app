import { shallow } from "enzyme";
import React from "react";

import Footer from "./Footer.component";

describe("Footer", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Footer />);
	});
	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

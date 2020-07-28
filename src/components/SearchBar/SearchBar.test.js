import { shallow } from "enzyme";
import React from "react";

import SearchBar from "./SearchBar.component";

describe("SearchBar", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SearchBar />);
	});

	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

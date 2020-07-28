import { shallow } from "enzyme";
import React from "react";

import ComicsView from "./ComicsView.component";

describe("ComicsView", () => {
	let wrapper;
	const mockProps = {
		title: "ABC",
		img: "https:://my-img.png",
		num: 123,
		alt: "BCD",
	};

	beforeEach(() => {
		wrapper = shallow(<ComicsView {...mockProps} />);
	});

	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

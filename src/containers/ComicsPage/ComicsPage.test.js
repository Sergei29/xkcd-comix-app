import { shallow, mount } from "enzyme";
import React from "react";

import { ComicsPage } from "./ComicsPage.component";
import ComicsView from "../../components/Comics/ComicsView.component";

describe("ComicsPage", () => {
	let wrapper;
	const currentComics = {
		title: "ABC",
		img: "https:://my-img.png",
		num: 614,
		alt: "BCD",
	};
	const mockProps = {
		loading: false,
		comicsList: {
			614: currentComics,
		},
		fetchComicsById: jest.fn(),
		match: { params: { id: 614 } },
	};

	beforeEach(() => {
		wrapper = shallow(<ComicsPage {...mockProps} />);
	});
	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("should contain ComicsView component", () => {
		const mountedWrapper = mount(<ComicsPage {...mockProps} />);

		expect(mountedWrapper.containsMatchingElement(<ComicsView />)).toEqual(
			true
		);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

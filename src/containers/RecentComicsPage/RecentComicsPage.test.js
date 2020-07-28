import { shallow } from "enzyme";
import React from "react";

import { RecentComicsPage } from "./RecentComicsPage.component";
import ComicsView from "../../components/Comics/ComicsView.component";

describe("RecentComicsPage", () => {
	let wrapper;
	const mockProps = {
		loading: false,
		recentComics: {
			title: "ABC",
			img: "https:://my-img.png",
			num: 123,
			alt: "BCD",
		},
		fetchRecent: jest.fn(),
	};
	beforeEach(() => {
		wrapper = shallow(<RecentComicsPage {...mockProps} />);
	});
	it("should render the component without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("should contain ComicsView component", () => {
		expect(wrapper.containsMatchingElement(<ComicsView />)).toEqual(true);
	});

	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

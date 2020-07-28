import reducer from "./reducer";
import actionsTypes from "./actions.types";

const INITIAL_STATE = {
	loading: false,
	error: null,
	recentComics: {},
	comicsList: {},
};

const mockError = new Error("Test Error");
const recentComicsMockData = {
	title: "ABC",
	img: "https:://my-img.png",
	num: 123,
	alt: "BCD",
};

const comicsByIdMockData = {
	"123": {
		title: "DDD",
		img: "https:://my-img-123.png",
		num: 123,
		alt: "mmm",
	},
};

describe("reducer", () => {
	it("should return initial state as default case", () => {
		const expectedState = INITIAL_STATE;
		const receivedState = reducer(undefined, {});
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle FETCH_START event", () => {
		const prevState = INITIAL_STATE;
		const expectedState = { ...prevState, loading: true };
		const receivedState = reducer(INITIAL_STATE, {
			type: actionsTypes.FETCH_START,
		});

		expect(receivedState).toEqual(expectedState);
	});

	it("should handle FETCH_ERROR event", () => {
		const prevState = INITIAL_STATE;
		const expectedState = {
			...prevState,
			loading: false,
			error: mockError,
		};
		const receivedState = reducer(INITIAL_STATE, {
			type: actionsTypes.FETCH_ERROR,
			payload: mockError,
		});

		expect(receivedState).toEqual(expectedState);
	});

	it("should handle FETCH_RECENT_SUCCESS event", () => {
		const prevState = INITIAL_STATE;
		const expectedState = {
			...prevState,
			loading: false,
			error: null,
			recentComics: recentComicsMockData,
		};
		const receivedState = reducer(INITIAL_STATE, {
			type: actionsTypes.FETCH_RECENT_SUCCESS,
			payload: recentComicsMockData,
		});

		expect(receivedState).toEqual(expectedState);
	});

	it("should handle FETCH_BY_ID_SUCCESS event", () => {
		const prevState = INITIAL_STATE;
		const expectedState = {
			...prevState,
			loading: false,
			error: null,
			comicsList: { ...INITIAL_STATE.comicsList, ...comicsByIdMockData },
		};

		const receivedState = reducer(INITIAL_STATE, {
			type: actionsTypes.FETCH_BY_ID_SUCCESS,
			payload: comicsByIdMockData,
		});

		expect(receivedState).toEqual(expectedState);
	});
});

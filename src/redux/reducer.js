import actionsTypes from "./actions.types";

const INITIAL_STATE = {
	loading: false,
	error: null,
	recentComics: {},
	comicsList: {},
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsTypes.FETCH_START:
			return {
				...state,
				loading: true,
			};
		case actionsTypes.FETCH_RECENT_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				recentComics: action.payload,
			};
		case actionsTypes.FETCH_BY_ID_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				comicsList: { ...state.comicsList, ...action.payload },
			};
		case actionsTypes.FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

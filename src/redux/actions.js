import axios from "axios";
import actionsTypes from "./actions.types";
//GET_CORS_PROXY: CORS Anywhere - see README.md
const GET_CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const fetchComicsStart = () => ({
	type: actionsTypes.FETCH_START,
});

export const fetchRecentSuccess = (recentComics) => ({
	type: actionsTypes.FETCH_RECENT_SUCCESS,
	payload: recentComics,
});

export const fetchComicsByIdSuccess = (comicsById) => ({
	type: actionsTypes.FETCH_BY_ID_SUCCESS,
	payload: comicsById,
});

export const fetchComicsError = (error) => ({
	type: actionsTypes.FETCH_ERROR,
	payload: error,
});

export const fetchRecent = () => async (dispatch) => {
	dispatch(fetchComicsStart());
	const comicsUrl = "http://xkcd.com/info.0.json";
	const url = `${GET_CORS_PROXY}${comicsUrl}`;

	try {
		const { data } = await axios.get(url);
		dispatch(fetchRecentSuccess(data));
	} catch (error) {
		dispatch(fetchComicsError(error));
	}
};

export const fetchComicsById = (id, comicsList) => async (dispatch) => {
	if (comicsList[id]) return;
	dispatch(fetchComicsStart());

	const comicsUrl = `http://xkcd.com/${id}/info.0.json`;
	const url = `${GET_CORS_PROXY}${comicsUrl}`;

	try {
		const { data } = await axios.get(url);
		const comics = { [data.num]: data };
		dispatch(fetchComicsByIdSuccess(comics));
	} catch (error) {
		dispatch(fetchComicsError(error));
	}
};

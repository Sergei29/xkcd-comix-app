import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchComicsById } from "../../redux/actions";
import ComicsView from "../../components/Comics/ComicsView.component";
import ErrorView from "../../components/404/ErrorView.component";

export const ComicsPage = ({
	match,
	loading,
	error,
	comicsList,
	fetchComicsById,
}) => {
	const { id } = match.params;
	const [currentComics, setCurrentComics] = useState({});
	const { title, num, img, alt } = currentComics;

	useEffect(() => {
		let willUnmount = false;

		if (comicsList[id]) {
			setCurrentComics(comicsList[id]);
		}

		if (!willUnmount) {
			fetchComicsById(id, comicsList);
		}

		return () => {
			// cleanup for all api calls before unmount:
			willUnmount = true;
		};
	}, [id, comicsList, fetchComicsById]);

	const comicsView = currentComics.num ? (
		<ComicsView title={title} num={num} img={img} alt={alt} />
	) : null;

	return (
		<>{loading ? <p>Loading...</p> : error ? <ErrorView /> : comicsView}</>
	);
};

const mapStateToProps = (state) => ({
	comicsList: state.comicsList,
	loading: state.loading,
	error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
	fetchComicsById: (id, comicsList) =>
		dispatch(fetchComicsById(id, comicsList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicsPage);

import React, { useEffect, useState, useRef } from "react";
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
	const status = useRef({ willUnmount: false });
	const [currentComics, setCurrentComics] = useState({});
	const { title, img, num, alt } = currentComics;

	useEffect(() => {
		if (!status.current.willUnmount) {
			fetchComicsById(id, comicsList);
		}
		if (comicsList[id]) {
			setCurrentComics(comicsList[id]);
		}
	}, [id, comicsList, fetchComicsById]);

	useEffect(() => {
		return () => {
			// cleanup for all api calls before unmount:
			status.current.willUnmount = true;
		};
	}, []);
	return (
		<>
			<h1>Comics page {match.params.id}</h1>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<ErrorView />
			) : (
				<ComicsView title={title} img={img} num={num} alt={alt} />
			)}
		</>
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

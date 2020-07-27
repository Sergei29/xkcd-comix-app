import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComicsById } from "../../redux/actions";

const ComicsPage = ({ match, comicsList, fetchComicsById }) => {
	const { id } = match.params;
	useEffect(() => {
		fetchComicsById(id, comicsList);
	}, [id, comicsList, fetchComicsById]);

	useEffect(() => {
		return () => {
			console.log("cleanup fn for api calls before unmount");
		};
	}, []);
	return (
		<>
			<h1>Comics page {match.params.id}</h1>
		</>
	);
};

const mapStateToProps = (state) => ({
	comicsList: state.comicsList,
});

const mapDispatchToProps = (dispatch) => ({
	fetchComicsById: (id, comicsList) =>
		dispatch(fetchComicsById(id, comicsList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComicsPage);

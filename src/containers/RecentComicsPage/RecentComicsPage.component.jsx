import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecent } from "../../redux/actions";
import ComicsView from "../../components/Comics/ComicsView.component";
import ErrorView from "../../components/404/ErrorView.component";

export const RecentComicsPage = ({
	loading,
	error,
	recentComics,
	fetchRecent,
}) => {
	const { title, num, img, alt } = recentComics;

	useEffect(() => {
		let willUnmount = false;
		if (!willUnmount && Object.keys(recentComics).length === 0) {
			fetchRecent();
		}

		return () => {
			// cleanup for all api calls before unmount:
			willUnmount = true;
		};
	}, [fetchRecent, recentComics]);

	const comicsView = recentComics.num ? (
		<ComicsView title={title} num={num} img={img} alt={alt} />
	) : null;

	return (
		<>{loading ? <p>Loading...</p> : error ? <ErrorView /> : comicsView}</>
	);
};

const mapStateToProps = (state) => ({
	recentComics: state.recentComics,
	loading: state.loading,
	error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
	fetchRecent: () => dispatch(fetchRecent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentComicsPage);

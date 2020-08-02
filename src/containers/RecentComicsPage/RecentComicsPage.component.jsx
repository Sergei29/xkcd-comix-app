import React, { useEffect, useRef } from "react";
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
	const status = useRef({ willUnmount: false });
	const { title, num, img, alt } = recentComics;

	useEffect(() => {
		if (
			!status.current.willUnmount &&
			Object.keys(recentComics).length === 0
		) {
			fetchRecent();
		}
	}, [fetchRecent, recentComics]);

	useEffect(() => {
		return () => {
			// cleanup for all api calls before unmount:
			status.current.willUnmount = true;
		};
	}, []);

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

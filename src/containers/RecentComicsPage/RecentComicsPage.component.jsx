import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchRecent } from "../../redux/actions";

const RecentComicsPage = ({ recentComics, fetchRecent }) => {
	const status = useRef({ willUnmount: false });

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

	return (
		<>
			<h1>recent comics page</h1>
		</>
	);
};

const mapStateToProps = (state) => ({
	recentComics: state.recentComics,
});

const mapDispatchToProps = (dispatch) => ({
	fetchRecent: () => dispatch(fetchRecent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentComicsPage);

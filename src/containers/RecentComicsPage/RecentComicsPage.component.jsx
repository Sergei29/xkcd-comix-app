import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchRecent } from "../../redux/actions";
import ComicsView from "../../components/Comics/ComicsView.component";

const RecentComicsPage = ({ loading, recentComics, fetchRecent }) => {
	const status = useRef({ willUnmount: false });
	const { title, img, num, alt } = recentComics;

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
			<h2>Recent comics page</h2>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ComicsView title={title} img={img} num={num} alt={alt} />
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	recentComics: state.recentComics,
	loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
	fetchRecent: () => dispatch(fetchRecent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentComicsPage);

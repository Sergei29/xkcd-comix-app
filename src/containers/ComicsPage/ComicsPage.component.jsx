import React from "react";

const ComicsPage = ({ match }) => {
	return (
		<>
			<h1>Comics page {match.params.id}</h1>
		</>
	);
};

export default ComicsPage;

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { StyledForm, StyledInput, SubmitButton } from "./SearchBar.styles";

const SearchBar = ({ history }) => {
	const [id, setId] = useState("");

	const changeHandler = (event) => {
		let newId = parseInt(event.target.value, 10);
		if (isNaN(newId)) newId = "";

		setId(newId);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (id === "") return;
		history.push(`/${id}`);
		setId("");
	};

	return (
		<StyledForm onSubmit={submitHandler}>
			<StyledInput
				type="text"
				value={id}
				onChange={changeHandler}
				placeholder="numeric value"
			/>
			<SubmitButton type="submit">get comics</SubmitButton>
		</StyledForm>
	);
};

export default withRouter(SearchBar);

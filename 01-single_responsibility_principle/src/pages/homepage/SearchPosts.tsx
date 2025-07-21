import React from "react";

// SearchPosts Responsibilities

/*
1. Search Functionality
*/

type SearchPostsPropTypes = {
	handleSearchtext: (event: React.ChangeEvent<HTMLInputElement>) => void;
	searchText: string;
};
const SearchPosts: React.FC<SearchPostsPropTypes> = ({
	handleSearchtext,
	searchText,
}) => {
	return (
		<div style={{ margin: "10px", padding: "20px" }}>
			<input
				style={{ padding: "10px" }}
				type='text'
				placeholder='Seact Posts'
				onChange={handleSearchtext}
				value={searchText}
			/>
		</div>
	);
};

export default SearchPosts;

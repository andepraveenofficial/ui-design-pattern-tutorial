import React, { useEffect, useState } from "react";
import type { Post } from "./types";
import Posts from "./Posts";
import useFetchPosts from "./useFetchPosts";
import SearchPosts from "./SearchPosts";

// HomePage Responsibilities

/*
1. Show UI Compoennts
*/

const HomePage: React.FC = () => {
	const [posts, setPosts] = useState<null | Post[]>(null);
	const [searchText, setSearchText] = useState<string>("");
	const [filteredPosts, setFilteredPosts] = useState<null | Post[]>(null);

	// Custom Hook
	const fetchedPostsData = useFetchPosts();

	useEffect(() => {
		setPosts(fetchedPostsData);
	}, [fetchedPostsData]);

	useEffect(() => {
		// safe check
		if (!posts) return;

		const updatedFilteredPosts = posts?.filter((post) =>
			post.title.includes(searchText)
		);
		setFilteredPosts(updatedFilteredPosts);
	}, [posts, searchText]);

	const handleSearchtext = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		setSearchText(event.target.value);
	};

	return (
		<div>
			
			{/* -----> Search Functionality<----- */}
			<SearchPosts
				handleSearchtext={handleSearchtext}
				searchText={searchText}
			/>

			{/* -----> UI Rendering <----- */}
			<Posts filteredPosts={filteredPosts} />

		</div>
	);
};

export default HomePage;
